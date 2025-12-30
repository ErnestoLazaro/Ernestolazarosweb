# Developer Quick Start Guide

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or pnpm package manager
- Basic knowledge of React and TypeScript

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── components/          # React components
│   │   │   ├── Header.tsx       # Navigation
│   │   │   ├── HeroSection.tsx  # Hero with profile
│   │   │   ├── AboutSection.tsx # Biography
│   │   │   ├── PortfolioSection.tsx  # Projects
│   │   │   ├── SkillsSection.tsx     # Skills
│   │   │   ├── ContactSection.tsx    # Contact CTA
│   │   │   └── Footer.tsx            # Footer
│   │   └── App.tsx              # Main app component
│   └── styles/
│       ├── theme.css            # Design tokens
│       ├── index.css            # Global styles
│       ├── tailwind.css         # Tailwind imports
│       └── fonts.css            # Font imports
├── DESIGN_SYSTEM.md             # Design specifications
├── TECH_LEADERS_PRESENTATION.md # Technical overview
└── package.json
```

---

## 🎨 Design System

### Using Design Tokens

All design tokens are defined in `/src/styles/theme.css` as CSS custom properties:

```css
/* Colors */
var(--portfolio-navy-dark)
var(--portfolio-navy-medium)
var(--portfolio-navy-light)
var(--portfolio-blue-primary)
var(--portfolio-blue-secondary)
var(--portfolio-text-primary)
var(--portfolio-text-secondary)
var(--portfolio-text-muted)
```

### Using in Tailwind Classes
```jsx
<div className="bg-[var(--portfolio-navy-dark)] text-[var(--portfolio-text-primary)]">
  Content
</div>
```

---

## 🧩 Component Guide

### Creating New Components

1. **Create component file** in `/src/app/components/`
```tsx
// ComponentName.tsx
export function ComponentName() {
  return (
    <section className="py-20 bg-[var(--portfolio-navy-dark)]">
      {/* Component content */}
    </section>
  );
}
```

2. **Import in App.tsx**
```tsx
import { ComponentName } from './components/ComponentName';

export default function App() {
  return (
    <div>
      {/* Other components */}
      <ComponentName />
    </div>
  );
}
```

### Component Patterns

#### Section Component
```tsx
export function SectionName() {
  return (
    <section id="section-id" className="py-20 bg-[var(--portfolio-navy-medium)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
          Section Title
        </h2>
        {/* Section content */}
      </div>
    </section>
  );
}
```

#### Card Component
```tsx
<div className="p-6 rounded-xl bg-[var(--portfolio-navy-light)] border border-[var(--portfolio-blue-primary)]/20 hover:border-[var(--portfolio-blue-primary)]/50 transition-all">
  {/* Card content */}
</div>
```

#### Button Component
```tsx
<a
  href="#"
  className="px-6 py-3 bg-[var(--portfolio-blue-primary)] hover:bg-[var(--portfolio-blue-secondary)] text-white rounded-lg transition-all hover:shadow-lg hover:shadow-[var(--portfolio-blue-glow)]"
>
  Button Text
</a>
```

---

## 📱 Responsive Design

### Breakpoints
```jsx
// Mobile: base styles
className="text-base"

// Tablet: sm: (640px+)
className="text-base sm:text-lg"

// Desktop: md: (768px+), lg: (1024px+)
className="text-base md:text-lg lg:text-xl"
```

### Common Responsive Patterns

#### Grid Layouts
```jsx
// 1 column → 2 columns → 3 columns
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

#### Hide/Show Elements
```jsx
// Hidden on mobile, visible on desktop
<div className="hidden lg:block">

// Visible on mobile, hidden on desktop
<div className="block lg:hidden">
```

#### Flexbox Direction
```jsx
// Column on mobile, row on desktop
<div className="flex flex-col lg:flex-row">
```

---

## 🎭 Icons

### Using Lucide Icons

1. **Check if icon exists** (important!)
```bash
# Search for icon in lucide-react
grep "IconName" node_modules/lucide-react/dist/esm/icons/index.js
```

2. **Import and use**
```tsx
import { Menu, X, Mail, Download } from 'lucide-react';

function Component() {
  return <Menu size={24} className="text-white" />;
}
```

### Common Icons
- `Menu` - Hamburger menu
- `X` - Close icon
- `Mail` - Email
- `Download` - Download
- `ExternalLink` - External link
- `ChevronRight` - Arrow right

---

## 🖼️ Images

### Using Figma Assets
```tsx
import profileImage from 'figma:asset/[hash].png';

<img src={profileImage} alt="Description" />
```

### Using Unsplash (Development)
```tsx
<img 
  src="https://images.unsplash.com/..." 
  alt="Description"
  className="w-full h-full object-cover"
/>
```

### Image Optimization Best Practices
- Use appropriate sizes
- Add `alt` text for accessibility
- Lazy load images below fold
- Use object-fit for responsive images

---

## 🎨 Styling Guidelines

### Color Usage
```jsx
// Background colors
bg-[var(--portfolio-navy-dark)]       // Main background
bg-[var(--portfolio-navy-medium)]     // Section background
bg-[var(--portfolio-navy-light)]      // Card background

// Text colors
text-[var(--portfolio-text-primary)]   // Headings
text-[var(--portfolio-text-secondary)] // Body text
text-[var(--portfolio-text-muted)]     // Captions

// Accent colors
bg-[var(--portfolio-blue-primary)]     // Buttons, links
hover:bg-[var(--portfolio-blue-secondary)] // Hover states
```

### Spacing
```jsx
// Padding
p-4  // 16px
p-6  // 24px
py-20 // 80px vertical (sections)

// Margin
mb-4  // 16px bottom margin
mb-12 // 48px bottom margin

// Gap
gap-4  // 16px gap
gap-6  // 24px gap
```

### Borders & Radius
```jsx
// Borders
border border-[var(--portfolio-navy-light)]
border-2 border-[var(--portfolio-blue-primary)]

// Border radius
rounded-lg    // 8px
rounded-xl    // 12px
rounded-2xl   // 16px
```

### Transitions
```jsx
transition-all              // All properties
transition-colors           // Colors only
transition-transform        // Transform only
hover:scale-105            // Scale on hover
```

---

## 🔧 Common Tasks

### Adding a New Project to Portfolio

1. Open `/src/app/components/PortfolioSection.tsx`
2. Add project to `projects` array:
```tsx
{
  title: 'Project Name',
  category: 'Project Type',
  image: 'image-url',
  link: '#'
}
```

### Adding a New Skill Category

1. Open `/src/app/components/SkillsSection.tsx`
2. Add category to `skillCategories` array:
```tsx
{
  title: 'Category Name',
  skills: ['Skill 1', 'Skill 2', 'Skill 3']
}
```

### Adding a New Navigation Link

1. Open `/src/app/components/Header.tsx`
2. Add link to `navItems` array:
```tsx
{ label: 'New Section', href: '#section-id' }
```
3. Make sure the section has matching `id`:
```tsx
<section id="section-id">
```

### Updating Colors

1. Open `/src/styles/theme.css`
2. Modify CSS custom properties in `:root`:
```css
--portfolio-blue-primary: #3B82F6; /* Change to your color */
```

---

## 🐛 Troubleshooting

### Common Issues

#### Icon Import Error
```
Error: 'IconName' is not exported by 'lucide-react'
```
**Solution**: Verify icon exists in lucide-react or use a different icon.

#### Image Not Loading
```
Error loading figma:asset
```
**Solution**: Check image hash is correct and image file exists.

#### Styles Not Applying
**Solution**: 
1. Check CSS custom property name
2. Verify Tailwind class syntax
3. Clear browser cache
4. Restart dev server

#### Mobile Menu Not Opening
**Solution**: Check state management in Header component.

---

## ✅ Code Quality Checklist

Before committing code:

- [ ] Components are properly typed
- [ ] All images have alt text
- [ ] Responsive breakpoints tested
- [ ] Hover states working
- [ ] Links and buttons functional
- [ ] No console errors
- [ ] Code follows existing patterns
- [ ] Comments added for complex logic

---

## 📚 Resources

### Documentation
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)
- [Vite Documentation](https://vitejs.dev)

### Internal Docs
- `DESIGN_SYSTEM.md` - Complete design specifications
- `TECH_LEADERS_PRESENTATION.md` - Technical overview

---

## 🤝 Contributing

### Workflow
1. Create feature branch
2. Make changes
3. Test thoroughly
4. Submit for review
5. Merge to main

### Commit Messages
```
feat: Add new portfolio project
fix: Resolve mobile menu issue
style: Update button hover states
docs: Update README
```

---

## 💡 Tips & Tricks

### VS Code Extensions
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- ESLint
- Prettier

### Keyboard Shortcuts
- `Ctrl/Cmd + Click` on component to jump to definition
- `F12` to go to type definition
- `Alt + Click` to add multiple cursors

### Development
- Use React DevTools for debugging
- Check Lighthouse for performance
- Test on actual devices, not just browser DevTools
- Use network throttling to test slow connections

---

## 📞 Support

For questions or issues:
1. Check this guide first
2. Review `DESIGN_SYSTEM.md`
3. Search existing issues
4. Contact development team

---

**Happy Coding! 🚀**
