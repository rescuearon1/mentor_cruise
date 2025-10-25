// MentorCruise 2025 Wrapped - Interactive JavaScript

// ===== Configuration =====
const mentorDataV2 = {
    firstName: "James",
    fullName: "James Booth",
    image: "images/james_booth.png",
    stats: {
        mentorships: 24,
        countries: 12,
        hoursOfCalls: 156,
        averageMonths: 8,
        rating: 4.9,
        videoCalls: 93,
        globalRankPercentage: 5
    },
    globalStats: {
        totalMentorships: 12500,
        totalCountries: 130,
        caseStudies: 89
    }
};

// ===== Progress Bar =====
function updateProgressBar() {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.pageYOffset;
    const progress = (scrolled / scrollableHeight) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
}

window.addEventListener('scroll', updateProgressBar);

// ===== Counter Animation =====
function animateCounterV2(element, target, duration = 2000, decimals = 0) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = decimals > 0 ? target.toFixed(decimals) : Math.round(target).toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = decimals > 0 ? current.toFixed(decimals) : Math.round(current).toLocaleString();
        }
    }, 16);
}

// ===== Intersection Observer =====
const observerOptionsV2 = {
    threshold: 0.3,
    rootMargin: '0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const section = entry.target;
            const sectionNumber = section.getAttribute('data-section');
            
            // Trigger animations based on section
            if (sectionNumber === '3') {
                // Big stat animation
                const numberElement = section.querySelector('.stat-number-huge');
                if (numberElement && !numberElement.classList.contains('animated')) {
                    animateCounterV2(numberElement, mentorDataV2.stats.mentorships);
                    numberElement.classList.add('animated');
                    createPersonIcons();
                }
            }
            
            if (sectionNumber === '4') {
                // World number animation
                const numberElement = section.querySelector('.world-number');
                if (numberElement && !numberElement.classList.contains('animated')) {
                    animateCounterV2(numberElement, mentorDataV2.stats.countries);
                    numberElement.classList.add('animated');
                }
            }
            
            if (sectionNumber === '5') {
                // Time animation
                const numberElement = section.querySelector('.time-number');
                if (numberElement && !numberElement.classList.contains('animated')) {
                    animateCounterV2(numberElement, mentorDataV2.stats.hoursOfCalls);
                    numberElement.classList.add('animated');
                }
            }
            
            if (sectionNumber === '7') {
                // Rating animation
                const numberElement = section.querySelector('.rating-number-display');
                if (numberElement && !numberElement.classList.contains('animated')) {
                    animateCounterV2(numberElement, mentorDataV2.stats.rating, 2000, 1);
                    numberElement.classList.add('animated');
                }
            }
            
            if (sectionNumber === '9') {
                // Global stats animation
                const numberElements = section.querySelectorAll('.global-stat-number');
                numberElements.forEach((element, index) => {
                    if (!element.classList.contains('animated')) {
                        const targets = [
                            mentorDataV2.globalStats.totalMentorships,
                            mentorDataV2.globalStats.totalCountries,
                            mentorDataV2.globalStats.caseStudies
                        ];
                        setTimeout(() => {
                            animateCounterV2(element, targets[index]);
                        }, index * 200);
                        element.classList.add('animated');
                    }
                });
            }
        }
    });
}, observerOptionsV2);

// ===== Create Person Icons =====
function createPersonIcons() {
    const container = document.getElementById('personIcons');
    if (!container || container.children.length > 0) return;
    
    for (let i = 0; i < mentorDataV2.stats.mentorships; i++) {
        const icon = document.createElement('div');
        icon.className = 'person-icon';
        icon.textContent = '👤';
        icon.style.animationDelay = `${i * 0.05}s`;
        container.appendChild(icon);
    }
}

// ===== Stories Carousel =====
let currentStoryIndex = 0;
const stories = document.querySelectorAll('.story-card');
const carouselDots = document.querySelectorAll('.carousel-dot');

function showStory(index) {
    stories.forEach((story, i) => {
        story.classList.remove('active');
        if (i === index) {
            story.classList.add('active');
        }
    });
    
    carouselDots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === index) {
            dot.classList.add('active');
        }
    });
    
    currentStoryIndex = index;
}

function initCarousel() {
    carouselDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showStory(index);
        });
    });
    
    // Auto-advance carousel every 5 seconds
    setInterval(() => {
        currentStoryIndex = (currentStoryIndex + 1) % stories.length;
        showStory(currentStoryIndex);
    }, 5000);
}

// ===== Share Modal =====
function openShareModal() {
    const modal = document.getElementById('shareModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeShareModal() {
    const modal = document.getElementById('shareModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function shareTwitterV2() {
    const text = `🎉 My 2025 Year in Review is here! Proud to have mentored ${mentorDataV2.stats.mentorships} amazing people from ${mentorDataV2.stats.countries} countries this year. Thank you for trusting me with your journey! 🚀\n\n#MentorCruise #YearInReview`;
    const url = window.location.href;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank', 'width=550,height=420');
}

function shareLinkedInV2() {
    const url = window.location.href;
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedInUrl, '_blank', 'width=550,height=420');
}

function copyLinkV2() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        const btn = event.target.closest('.modal-share-btn');
        const originalHTML = btn.innerHTML;
        btn.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Copied!</span>
        `;
        
        setTimeout(() => {
            btn.innerHTML = originalHTML;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        alert('Failed to copy link');
    });
}

// ===== Load Data =====
function loadDataV2() {
    // Update mentor name and image
    const nameElement = document.getElementById('mentorNameV2');
    const imageElement = document.getElementById('mentorImageV2');
    
    if (nameElement) {
        nameElement.textContent = mentorDataV2.fullName;
    }
    
    if (imageElement) {
        imageElement.src = mentorDataV2.image;
        imageElement.alt = mentorDataV2.fullName;
    }
    
    // Update page title
    document.title = `${mentorDataV2.firstName}'s 2025 Wrapped - MentorCruise`;
    
    // Update preview number in intro section
    const previewNumber = document.querySelector('.preview-number');
    if (previewNumber) {
        previewNumber.setAttribute('data-number', mentorDataV2.stats.mentorships);
        previewNumber.textContent = mentorDataV2.stats.mentorships;
    }
}

// ===== Smooth Scroll for Anchors =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===== Keyboard Navigation =====
function initKeyboardNav() {
    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('shareModal');
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeShareModal();
        }
    });
}

// ===== Initialize Everything =====
document.addEventListener('DOMContentLoaded', () => {
    // Load mentor data
    loadDataV2();
    
    // Initialize interactions
    initCarousel();
    initSmoothScroll();
    initKeyboardNav();
    
    // Observe all sections for animations
    const sections = document.querySelectorAll('.fullscreen-section');
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    // Initial progress bar update
    updateProgressBar();
});

// ===== Expose functions globally =====
window.openShareModal = openShareModal;
window.closeShareModal = closeShareModal;
window.shareTwitterV2 = shareTwitterV2;
window.shareLinkedInV2 = shareLinkedInV2;
window.copyLinkV2 = copyLinkV2;
