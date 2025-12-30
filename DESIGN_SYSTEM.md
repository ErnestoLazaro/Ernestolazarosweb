# Portfolio Design System & Guidelines

## Overview
This design system provides a comprehensive framework for the portfolio website of Ernesto Lázaro Guerrero, UI/UX Designer. It ensures consistency, scalability, and maintainability across desktop and mobile platforms.

---

## Color Palette

### Primary Colors
```css
--portfolio-navy-dark: #0A0E27      /* Main background */
--portfolio-navy-medium: #141B3D    /* Section backgrounds */
--portfolio-navy-light: #1E2749     /* Card backgrounds */
--portfolio-blue-primary: #3B82F6   /* Primary actions, links */
--portfolio-blue-secondary: #2563EB /* Hover states */
```

### Text Colors
```css
--portfolio-text-primary: #FFFFFF    /* Headings, important text */
--portfolio-text-secondary: #94A3B8  /* Body text, descriptions */
--portfolio-text-muted: #64748B      /* Less important text */
```

### Effects
```css
--portfolio-blue-glow: rgba(59, 130, 246, 0.3) /* Glow effects */
```

### Color Usage Guidelines
- **Navy Dark**: Use for main background and primary containers
- **Navy Medium**: Use for alternating sections to create visual hierarchy
- **Navy Light**: Use for cards, elevated elements, and interactive components
- **Blue Primary**: Use for CTAs, links, and important interactive elements
- **Blue Secondary**: Use for hover states and active states
- **Text Primary**: Use for headings and primary content
- **Text Secondary**: Use for body text and descriptions
- **Text Muted**: Use for captions, labels, and less important information

---

## Typography

### Font Hierarchy
```
H1: 3.75rem (60px) - Page titles, Hero headings
H2: 2.25rem (36px) - Section headings
H3: 1.5rem (24px) - Card titles, subsection headings
H4: 1rem (16px) - Small headings, labels
Body: 1rem (16px) - Regular body text
Small: 0.875rem (14px) - Captions, labels
```

### Responsive Typography
**Desktop (1024px+)**
- H1: 3.75rem (60px)
- H2: 2.25rem (36px)
- H3: 1.5rem (24px)
- Body: 1.125rem (18px)

**Tablet (768px - 1023px)**
- H1: 3rem (48px)
- H2: 2rem (32px)
- H3: 1.25rem (20px)
- Body: 1rem (16px)

**Mobile (< 768px)**
- H1: 2.5rem (40px)
- H2: 1.75rem (28px)
- H3: 1.125rem (18px)
- Body: 1rem (16px)

### Font Weights
- Normal: 400
- Medium: 500
- Semibold: 600
- Bold: 700

---

## Spacing System

### Base Unit: 4px
```
xs: 0.25rem (4px)
sm: 0.5rem (8px)
md: 1rem (16px)
lg: 1.5rem (24px)
xl: 2rem (32px)
2xl: 3rem (48px)
3xl: 4rem (64px)
4xl: 6rem (96px)
```

### Component Spacing
- **Sections**: 5rem (80px) vertical padding
- **Cards**: 1.5rem (24px) padding
- **Buttons**: 0.75rem (12px) vertical, 1.5rem (24px) horizontal
- **Grid Gap**: 1.5rem (24px)

---

## Layout Grid

### Desktop (1280px max-width)
- **Columns**: 12 columns
- **Gutter**: 24px
- **Margin**: Auto (centered)

### Tablet (768px - 1023px)
- **Columns**: 8 columns
- **Gutter**: 20px
- **Margin**: 32px

### Mobile (< 768px)
- **Columns**: 4 columns
- **Gutter**: 16px
- **Margin**: 16px

---

## Components

### 1. Header/Navigation
**Desktop:**
- Fixed position at top
- Height: 64px
- Logo on left, navigation links on right
- Transparent background with backdrop blur

**Mobile:**
- Hamburger menu button
- Full-screen overlay navigation when opened
- Sticky positioning

**States:**
- Default: Semi-transparent with blur
- Scrolled: Increased opacity
- Mobile Open: Full overlay

### 2. Hero Section
**Layout:**
- Grid: 2 columns on desktop (text + image)
- Stack on mobile (text first, then image)
- Min-height: 100vh
- Background gradient with decorative glow

**Elements:**
- Name (H1)
- Title (H2) in blue
- Description (Body text)
- 2 CTA buttons (Primary + Secondary)
- Social links

### 3. About Section
**Layout:**
- Grid: 2 columns (image + content)
- Profile image: 256px × 256px
- Certification cards in grid

**Cards:**
- Background: Navy Light
- Border: Blue with 20% opacity
- Hover: Border opacity increases to 50%
- Icon + Text layout

### 4. Portfolio Cards
**Layout:**
- Grid: 3 columns on desktop, 2 on tablet, 1 on mobile
- Aspect ratio: 4:3
- Rounded corners: 12px

**Elements:**
- Project image with hover scale effect
- Title (H3)
- Category label
- "Ver Caso" CTA button

**States:**
- Default: Neutral border
- Hover: Blue border, image scale 105%, gradient overlay

### 5. Skills Section
**Layout:**
- Grid: 2 columns on desktop/tablet, 1 on mobile
- Category cards with skill tags

**Skill Tags:**
- Background: Navy Dark
- Text: Secondary color
- Border: Navy Light
- Hover: Blue border, white text

### 6. Contact Section
**Layout:**
- Centered content
- Max-width: 768px
- CTA button centered
- Social links below

**CTA Button:**
- Icon + Text
- Background: Blue Primary
- Hover: Blue Secondary with glow shadow

### 7. Footer
**Layout:**
- Centered copyright text
- Border top
- Padding: 32px vertical

---

## Buttons

### Primary Button
```css
Background: var(--portfolio-blue-primary)
Text: white
Padding: 12px 24px
Border-radius: 8px
Hover: var(--portfolio-blue-secondary) + shadow
```

### Secondary Button
```css
Background: transparent
Border: 1px solid var(--portfolio-text-secondary)
Text: white
Padding: 12px 24px
Border-radius: 8px
Hover: border-color white
```

### Button States
- **Default**: Base styling
- **Hover**: Color change + shadow/glow effect
- **Active**: Slightly darker
- **Disabled**: 50% opacity, no pointer events

---

## Breakpoints

```css
Mobile: 0 - 767px
Tablet: 768px - 1023px
Desktop: 1024px+
Large Desktop: 1280px+
```

### Responsive Behavior
- **Mobile First**: Start with mobile styles
- **Progressive Enhancement**: Add complexity at larger breakpoints
- **Grid Adaptations**:
  - 3 columns → 2 columns → 1 column
  - Side-by-side → stacked
- **Navigation**: Menu → Hamburger
- **Spacing**: Reduce padding/margins on mobile

---

## Accessibility

### Color Contrast
- All text meets WCAG AA standards (4.5:1 minimum)
- Primary buttons have sufficient contrast
- Focus states visible for keyboard navigation

### Interactive Elements
- Minimum tap target: 44px × 44px
- Focus indicators on all interactive elements
- Keyboard navigation support
- ARIA labels where appropriate

### Motion
- Smooth transitions: 200-300ms
- Respect `prefers-reduced-motion`
- Meaningful animations only

---

## Effects & Animations

### Hover Transitions
```css
transition: all 0.3s ease
```

### Glow Effect
```css
box-shadow: 0 0 24px var(--portfolio-blue-glow)
```

### Backdrop Blur
```css
backdrop-filter: blur(12px)
```

### Image Hover
```css
transform: scale(1.05)
transition: transform 0.3s ease
```

---

## Icons

### Icon Library
- Lucide React (primary icon set)
- Custom SVG icons for social media

### Icon Sizes
- Small: 16px
- Medium: 20px
- Large: 24px
- Extra Large: 32px

### Icon Usage
- Always pair with text for clarity
- Use consistent sizing within components
- Ensure sufficient padding/spacing

---

## Images

### Formats
- Profile photos: PNG with transparency
- Project screenshots: JPG/PNG
- Background images: WebP with fallback

### Optimization
- Max width: 1920px
- Compress for web
- Use appropriate aspect ratios
- Lazy loading for portfolio images

### Image Sizing
- Profile (Hero): Max 512px width
- Profile (About): 256px × 256px
- Portfolio cards: Aspect ratio 4:3
- Responsive srcset when possible

---

## Best Practices

### Performance
1. Minimize bundle size
2. Optimize images
3. Use CSS variables for consistency
4. Leverage browser caching
5. Lazy load images below fold

### Maintainability
1. Use CSS custom properties (variables)
2. Follow component-based architecture
3. Keep components small and focused
4. Document complex logic
5. Use semantic HTML

### Responsive Design
1. Mobile-first approach
2. Test on real devices
3. Consider touch vs mouse interactions
4. Ensure readable text sizes
5. Adequate spacing for touch targets

### Consistency
1. Use design tokens from theme.css
2. Follow naming conventions
3. Maintain visual hierarchy
4. Keep spacing consistent
5. Reuse components when possible

---

## Component Inventory

### Core Components
1. **Header** - Navigation and branding
2. **HeroSection** - Introduction and CTA
3. **AboutSection** - Bio and certifications
4. **PortfolioSection** - Project showcase
5. **SkillsSection** - Skill categories and tags
6. **ContactSection** - CTA and social links
7. **Footer** - Copyright information

### Reusable Elements
- Buttons (Primary, Secondary)
- Cards (Project, Certification, Skill)
- Social Icons
- Navigation Links

---

## File Structure

```
/src
  /app
    /components
      Header.tsx
      HeroSection.tsx
      AboutSection.tsx
      PortfolioSection.tsx
      SkillsSection.tsx
      ContactSection.tsx
      Footer.tsx
    App.tsx
  /styles
    theme.css         # Design tokens
    index.css
    tailwind.css
```

---

## Version History

**v1.0.0** - December 2024
- Initial design system
- Desktop and mobile responsive layouts
- Complete component library
- Accessibility standards implemented

---

## Contact & Support

For questions about this design system, please contact:
**Ernesto Lázaro Guerrero**
UI/UX Designer
