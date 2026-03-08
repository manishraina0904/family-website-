# Raina Family Website 👨‍👩‍👧‍👦

A warm, modern, and responsive family website celebrating love, laughter, and memories. Built with React, TypeScript, and enhanced with beautiful animations and interactive features.

## 🌟 Features

- **Individual Family Member Pages** - Detailed profiles with timelines and achievements
- **Interactive Gallery** - Photo management with zoom modals and categorization
- **Family Calendar** - Birthdays, anniversaries, and special events
- **Enhanced Animations** - Smooth hover effects and transitions throughout
- **Responsive Design** - Perfect experience across all devices
- **Contact Form** - Functional email integration
- **Auto-Styling** - Consistent photo sizing and effects

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## 📁 Project Structure

```
client/
├── components/
│   ├── ui/          # Reusable UI components (buttons, modals, etc.)
│   └── Layout.tsx   # Main layout with navigation
├── pages/
│   ├── Index.tsx    # Homepage
│   ├── About.tsx    # About our family
│   ├── Father.tsx   # Individual family member pages
│   ├── Mother.tsx
│   ├── Sister.tsx
│   ├── Brother.tsx
│   ├── FamilyMembers.tsx  # Family overview
│   ├── Gallery.tsx  # Photo gallery
│   ├── Calendar.tsx # Family calendar
│   └── Contact.tsx  # Contact form
├── global.css       # Global styles and animations
└── App.tsx         # Main app with routing

server/
├── routes/
│   └── contact.ts   # Email functionality
└── index.ts        # Express server setup

public/
└── gallery/        # Store family photos here
```

## 📸 Photo Management

### Adding New Photos

1. **Upload Location**: Place photos in `/public/gallery/` folder
2. **Naming Convention**: Use descriptive names like `goa-sunset-2023.jpg`
3. **Supported Formats**: JPG, PNG, WEBP
4. **Recommended Size**: 1200x800px for optimal quality

### Auto-Styling Features

All photos automatically receive:
- ✅ **Uniform sizing** with responsive grid layout
- ✅ **Rounded corners** and soft shadows
- ✅ **Hover effects** with scale and brightness adjustments
- ✅ **Overlay descriptions** on hover
- ✅ **Consistent spacing** and alignment
- ✅ **Mobile optimization** across all screen sizes

### Updating Photo Data

Edit the `photos` array in `client/pages/Gallery.tsx`:

```typescript
{
  id: 9,
  title: 'Your Photo Title',
  description: 'Detailed description of the moment captured.',
  category: 'vacations', // or 'festivals', 'birthdays', 'daily'
  date: '2024-12-01',
  location: 'Photo Location',
  photographer: 'Photographer Name',
  image: '/gallery/your-photo.jpg',
  likes: 0,
  tags: ['tag1', 'tag2', 'tag3']
}
```

## 👥 Family Member Management

### Adding New Family Members

1. **Create Individual Page**: Copy `/client/pages/Father.tsx` as template
2. **Update Data**: Modify the timeline, interests, and personal information
3. **Add Route**: Include new route in `/client/App.tsx`
4. **Update Navigation**: Add to family members overview page

### Individual Page Structure

Each family member page includes:
- **Hero Section** with photo and basic info
- **Timeline** of major life events
- **Interests & Hobbies** with interactive cards
- **Achievements** and special moments
- **Personal Quotes** and fun facts

## 📅 Calendar Management

### Adding New Events

Update the `familyEvents` array in `client/pages/Calendar.tsx`:

```typescript
{
  id: 10,
  title: 'Event Name',
  type: 'birthday', // or 'anniversary', 'vacation', 'festival', 'milestone'
  date: '2025-01-01',
  person: 'Family Member',
  description: 'Event description',
  location: 'Event location',
  time: '6:00 PM',
  icon: '🎉',
  color: 'bg-blue-100 text-blue-700'
}
```

### Event Types

- **Birthday** 🎂 - Family member birthdays
- **Anniversary** 💕 - Wedding anniversaries
- **Vacation** ✈️ - Family trips and travels
- **Festival** 🎉 - Cultural celebrations
- **Milestone** 🎓 - Graduations, achievements
- **Sports** 🏀 - Sports events and competitions

## 🎨 Customizing Animations

### Button Animations

Available animation classes in `/client/global.css`:

- `.btn-glow` - Glowing hover effect with shine
- `.btn-bounce` - Bouncing animation on hover
- `.btn-pulse` - Pulsing glow effect
- `.btn-shimmer` - Shimmering background animation
- `.btn-float` - Floating upward effect

### Card Animations

- `.card-hover` - Basic scale and shadow on hover
- `.card-float` - Floating effect with enhanced shadow
- `.text-glow` - Text glow effect on hover

### Usage Example

```jsx
<button className="bg-primary text-white px-6 py-3 rounded-lg btn-glow">
  Animated Button
</button>
```

## 📧 Email Configuration

### Setting Up Contact Form

1. **Environment Variables**: Set in Builder.io environment settings
   - `EMAIL_USER`: Your Gmail address
   - `EMAIL_PASS`: Gmail App Password

2. **Gmail Setup**:
   - Enable 2-Factor Authentication
   - Generate App Password in Google Account settings
   - Use App Password (not regular password)

### Customizing Email Template

Edit `/server/routes/contact.ts` to modify:
- Email styling and layout
- Recipient email address
- Subject line format
- Auto-response messages

## 🛠 Maintenance Tasks

### Regular Updates

- **Photos**: Add new family photos monthly
- **Calendar**: Update events and birthdays annually
- **News**: Add family updates in homepage news section
- **Achievements**: Update individual member pages with new accomplishments

### Seasonal Updates

- **Holiday Themes**: Update hero images for festivals
- **Anniversary Content**: Add special content for important dates
- **Vacation Photos**: Bulk upload and categorize trip photos

## 🎯 Performance Optimization

### Image Optimization

- **WebP Format**: Convert photos to WebP for better compression
- **Responsive Images**: Use appropriate sizes for different screens
- **Lazy Loading**: Images load as user scrolls

### Animation Performance

- **Hardware Acceleration**: CSS transforms use GPU acceleration
- **Reduced Motion**: Respects user's motion preferences
- **Efficient Transitions**: Optimized for smooth 60fps animations

## 📱 Responsive Design

### Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Testing

Test on various devices:
- iPhone (iOS Safari)
- Android phones (Chrome)
- iPad (Safari)
- Desktop browsers (Chrome, Firefox, Safari)

## 🔧 Troubleshooting

### Common Issues

1. **Photos not loading**: Check file paths in `/public/gallery/`
2. **Email not sending**: Verify environment variables and Gmail settings
3. **Animations laggy**: Check for hardware acceleration support
4. **Mobile layout issues**: Test responsive breakpoints

### Developer Tools

- **React DevTools**: Debug component state
- **Browser DevTools**: Check console for errors
- **Network Tab**: Monitor image loading performance
- **Lighthouse**: Audit performance and accessibility

## 🌈 Customization Guidelines

### Color Palette

The website uses warm, family-friendly colors:

- **Primary**: Orange tones (#ec7c3e)
- **Secondary**: Warm beiges and creams
- **Accents**: Soft blues, pinks, greens for family members
- **Backgrounds**: Light gradients and subtle textures

### Typography

- **Headings**: Bold, clear fonts with text-glow effects
- **Body Text**: Readable font with proper line spacing
- **Captions**: Smaller, muted text for descriptions

### Brand Voice

- **Warm & Personal**: Friendly, family-oriented tone
- **Celebratory**: Highlighting achievements and milestones
- **Inclusive**: Welcoming to visitors and extended family
- **Authentic**: Genuine stories and real moments

## 📞 Support

### Getting Help

- **Documentation**: This README covers most scenarios
- **Code Comments**: Detailed comments throughout codebase
- **Component Structure**: Follow existing patterns for consistency

### Making Changes

1. **Test Locally**: Always test changes in development
2. **Mobile Testing**: Verify responsive behavior
3. **Animation Testing**: Check all hover effects work
4. **Cross-Browser**: Test in multiple browsers

### Best Practices

- **Consistent Naming**: Follow existing naming conventions
- **Component Reuse**: Use existing UI components when possible
- **Photo Quality**: Maintain high-quality family photos
- **Performance**: Optimize images before uploading

---

## 🎉 Conclusion

This family website is designed to grow with the Raina family, capturing precious moments and celebrating milestones. The auto-styling features ensure all new content maintains visual consistency, while the comprehensive animation system creates an engaging, joyful experience for all visitors.

**Remember**: This website is more than code—it's a digital home for family memories. Every photo, every timeline entry, every celebration page tells the story of love, growth, and togetherness.

Happy family website management! 👨‍👩‍👧‍👦✨

---

*Built with ❤️ for the Raina Family*
