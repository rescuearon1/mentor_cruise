# MentorCruise Year in Review

A celebratory, personalized "Year in Review" page for MentorCruise mentors to showcase their impact and share with their network.

## 🎨 Brand Guidelines

This website follows MentorCruise's brand guidelines:

- **Typography**: Shippori Mincho (headings) + Inter (body text)
- **Colors**: Deep greens (#2F4538), peach tones (#F5E6D3, #E8C4A6), warm earth colors
- **Style**: Vintage-inspired meets modern tech, professional yet approachable

## 📋 Features

### ✨ Celebration Section
- Personalized hero with mentor's name and photo
- Animated confetti effect
- Smooth scroll animations

### 📊 Mentoring Stats
- Number of mentorships
- Global reach (countries represented)
- Hours spent on calls
- Average mentorship duration
- Animated counters

### 🌍 World Map
- Visual representation of global reach
- Animated pulse dots for each country
- Country tags display

### 💬 Use Cases & Impact
- Showcase different challenges solved
- Real mentee quotes and testimonials
- Categorized by use case type

### ⭐ Reviews & Ratings
- Star rating display
- Detailed testimonials from mentees
- Mentee profiles and company info

### 🔮 Tarot Personality Card
- Unique mentor archetype
- Personality traits
- Interactive card design

### 🌐 Global Platform Stats
- Total mentorships on MentorCruise
- Countries represented
- Case studies published

### 🏆 Ranking
- Top percentage ranking
- Performance metrics
- Animated badge

### 📱 Share Functionality
- Twitter/X sharing
- LinkedIn sharing
- Copy link feature
- Share preview card

## 🚀 Setup & Customization

### 1. Personalize Mentor Data

Edit the `mentorData` object in `script.js`:

```javascript
const mentorData = {
    firstName: "Sarah",  // Change to mentor's first name
    fullName: "Sarah Thompson",  // Full name
    image: "https://your-image-url.com/photo.jpg",  // Mentor photo URL
    stats: {
        mentorships: 24,  // Number of mentorships
        countries: 12,  // Countries reached
        hoursOfCalls: 156,  // Total hours
        averageMonths: 8,  // Average duration
        rating: 4.9,  // Star rating
        globalRankPercentage: 5  // Top X%
    },
    globalStats: {
        totalMentorships: 12500,
        totalCountries: 130,
        caseStudies: 89
    }
};
```

### 2. Update Countries List

In `index.html`, update the countries in the world map section:

```html
<div class="countries-list">
    <span class="country-tag">United States</span>
    <span class="country-tag">United Kingdom</span>
    <!-- Add more countries -->
</div>
```

### 3. Customize Use Cases

Update the use case cards in `index.html` with real mentee quotes:

```html
<div class="use-case-card animate-on-scroll">
    <div class="quote-mark">"</div>
    <p class="use-case-text">Your custom quote here</p>
    <div class="use-case-tag">Category</div>
</div>
```

### 4. Add Real Testimonials

Update testimonial cards with actual mentee feedback:

```html
<div class="testimonial-card animate-on-scroll">
    <div class="testimonial-stars">★★★★★</div>
    <p class="testimonial-text">"Testimonial text"</p>
    <div class="testimonial-author">
        <img src="mentee-photo.jpg" alt="Mentee">
        <div>
            <div class="author-name">Mentee Name</div>
            <div class="author-title">Job Title at Company</div>
        </div>
    </div>
</div>
```

### 5. Customize Tarot Archetype

The personality type is defined in `script.js`. You can:
- Use one of the existing archetypes (The Catalyst, The Navigator, The Architect)
- Create custom archetypes

## 🎯 Running the Website

### Local Development
Simply open `index.html` in a web browser. No build process required!

### Production Deployment
Upload all files to your web hosting:
- `index.html`
- `styles.css`
- `script.js`

### Dynamic Data Integration
To integrate with a backend:

1. Replace the `mentorData` object in `script.js` with an API call:

```javascript
async function loadMentorData() {
    const mentorId = new URLSearchParams(window.location.search).get('id');
    const response = await fetch(`/api/mentor/${mentorId}/year-review`);
    const data = await response.json();
    // Update DOM with data
}
```

2. Update the data attributes in HTML dynamically based on API response

## 🎨 Customization Tips

### Colors
All colors are defined in CSS variables at the top of `styles.css`:

```css
:root {
    --dark-green: #2F4538;
    --peach-light: #F5E6D3;
    /* etc. */
}
```

### Animations
- Counter animations: Adjust `duration` in `animateCounter()`
- Scroll animations: Modify `observerOptions` threshold
- Parallax speed: Change `speed` value in `initParallax()`

### Share Text
Customize share messages in `shareOnTwitter()` function

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🔧 Technical Details

- **No frameworks required** - Pure HTML, CSS, JavaScript
- **Modern CSS** - Grid, Flexbox, CSS Variables
- **Smooth animations** - Intersection Observer API
- **Optimized performance** - Minimal dependencies
- **Google Fonts** - Shippori Mincho & Inter

## 📄 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎉 Features Checklist

- ✅ Celebration section with mentor photo & name
- ✅ Animated statistics counters
- ✅ World map with country visualization
- ✅ Use cases and impact stories
- ✅ Reviews and testimonials
- ✅ Tarot personality card
- ✅ Global platform statistics
- ✅ Ranking badge with metrics
- ✅ Social sharing (Twitter, LinkedIn, Copy Link)
- ✅ Fully responsive design
- ✅ Smooth scroll animations
- ✅ Parallax effects
- ✅ On-brand styling (MentorCruise guidelines)

## 🚀 Next Steps

1. Replace placeholder images with actual mentor photos
2. Update all statistics with real data
3. Add real testimonials and quotes
4. Customize tarot personality based on mentor profile
5. Test share functionality
6. Deploy to production

## 📞 Support

For questions or customization help, refer to the MentorCruise brand guidelines:
https://trass-swell-42145112.figma.site/

---

Made with ❤️ for MentorCruise mentors
