# Visual Style Guide

A comprehensive visual reference for the Ernesto Lázaro Guerrero portfolio design system.

---

## 🎨 Brand Colors

### Primary Palette

#### Navy Dark
```
HEX: #0A0E27
RGB: 10, 14, 39
CSS: var(--portfolio-navy-dark)
Usage: Main background, primary containers
```

#### Navy Medium
```
HEX: #141B3D
RGB: 20, 27, 61
CSS: var(--portfolio-navy-medium)
Usage: Section backgrounds, alternating sections
```

#### Navy Light
```
HEX: #1E2749
RGB: 30, 39, 73
CSS: var(--portfolio-navy-light)
Usage: Cards, elevated elements, borders
```

### Accent Colors

#### Blue Primary
```
HEX: #3B82F6
RGB: 59, 130, 246
CSS: var(--portfolio-blue-primary)
Usage: CTAs, links, highlights, active states
```

#### Blue Secondary
```
HEX: #2563EB
RGB: 37, 99, 235
CSS: var(--portfolio-blue-secondary)
Usage: Hover states, focus states
```

### Text Colors

#### Text Primary
```
HEX: #FFFFFF
RGB: 255, 255, 255
CSS: var(--portfolio-text-primary)
Usage: Headings, important content
```

#### Text Secondary
```
HEX: #94A3B8
RGB: 148, 163, 184
CSS: var(--portfolio-text-secondary)
Usage: Body text, descriptions
```

#### Text Muted
```
HEX: #64748B
RGB: 100, 116, 139
CSS: var(--portfolio-text-muted)
Usage: Captions, labels, less important text
```

---

## 📝 Typography

### Font Family
```
Primary: System Font Stack
- -apple-system
- BlinkMacSystemFont
- "Segoe UI"
- Roboto
- "Helvetica Neue"
- Arial
- sans-serif
```

### Type Scale

#### Desktop (1024px+)
```
H1 (Hero Heading)
Size: 60px (3.75rem)
Weight: 700 (Bold)
Line Height: 1.2
Usage: Page title, hero name

H2 (Section Heading)
Size: 36px (2.25rem)
Weight: 700 (Bold)
Line Height: 1.3
Usage: Section titles

H3 (Card Heading)
Size: 24px (1.5rem)
Weight: 600 (Semibold)
Line Height: 1.4
Usage: Card titles, subsections

Body Large
Size: 18px (1.125rem)
Weight: 400 (Regular)
Line Height: 1.6
Usage: Important body text

Body Regular
Size: 16px (1rem)
Weight: 400 (Regular)
Line Height: 1.5
Usage: Standard body text

Small Text
Size: 14px (0.875rem)
Weight: 400 (Regular)
Line Height: 1.5
Usage: Captions, labels
```

#### Mobile (< 768px)
```
H1: 40px (2.5rem)
H2: 28px (1.75rem)
H3: 18px (1.125rem)
Body: 16px (1rem)
Small: 14px (0.875rem)
```

### Font Weights
```
Regular: 400
Medium: 500
Semibold: 600
Bold: 700
```

---

## 📐 Spacing System

### Base Unit: 4px

```
xs:   4px  (0.25rem)  - Minimal spacing
sm:   8px  (0.5rem)   - Tight spacing
md:   16px (1rem)     - Standard spacing
lg:   24px (1.5rem)   - Comfortable spacing
xl:   32px (2rem)     - Generous spacing
2xl:  48px (3rem)     - Section spacing
3xl:  64px (4rem)     - Large section spacing
4xl:  96px (6rem)     - Extra large spacing
```

### Component Spacing

#### Sections
```
Vertical Padding: 80px (5rem)
Max Width: 1280px (80rem)
Container Padding: 16px mobile → 24px tablet → 32px desktop
```

#### Cards
```
Padding: 24px (1.5rem)
Gap: 24px (1.5rem)
Border Radius: 12px (0.75rem)
```

#### Buttons
```
Padding: 12px 24px (vertical horizontal)
Gap: 8px (icon + text)
Border Radius: 8px (0.5rem)
Min Height: 44px (tap target)
```

#### Grid Gaps
```
Mobile: 16px (1rem)
Tablet: 20px (1.25rem)
Desktop: 24px (1.5rem)
```

---

## 🔲 Layout Grid

### Desktop (1024px+)
```
Columns: 12
Gutter: 24px
Max Width: 1280px
Margin: Auto (centered)
```

### Tablet (768px - 1023px)
```
Columns: 8
Gutter: 20px
Max Width: 100%
Margin: 32px
```

### Mobile (< 768px)
```
Columns: 4
Gutter: 16px
Max Width: 100%
Margin: 16px
```

---

## 🎯 Buttons

### Primary Button
```
Background: var(--portfolio-blue-primary)
Text: #FFFFFF
Padding: 12px 24px
Border Radius: 8px
Font Weight: 500

Hover:
Background: var(--portfolio-blue-secondary)
Shadow: 0 8px 24px var(--portfolio-blue-glow)

Active:
Background: #1D4ED8 (darker blue)
```

### Secondary Button
```
Background: transparent
Text: #FFFFFF
Border: 1px solid var(--portfolio-text-secondary)
Padding: 12px 24px
Border Radius: 8px
Font Weight: 500

Hover:
Border Color: #FFFFFF
```

### Icon Button
```
Background: transparent
Padding: 8px
Border Radius: 8px

Hover:
Background: var(--portfolio-navy-light)
```

---

## 🃏 Cards

### Standard Card
```
Background: var(--portfolio-navy-light)
Padding: 24px
Border: 1px solid var(--portfolio-blue-primary) at 20% opacity
Border Radius: 12px

Hover:
Border Opacity: 50%
Transform: none
```

### Project Card
```
Background: var(--portfolio-navy-light)
Border: 1px solid var(--portfolio-navy-light)
Border Radius: 12px
Overflow: hidden

Image:
Aspect Ratio: 4:3
Object Fit: cover

Content Padding: 24px

Hover:
Border: 1px solid var(--portfolio-blue-primary) at 50% opacity
Image Scale: 105%
```

### Certification Card
```
Background: var(--portfolio-navy-light)
Padding: 16px
Border: 1px solid var(--portfolio-blue-primary) at 20% opacity
Border Radius: 8px

Layout: Horizontal (icon + text)
Gap: 12px

Hover:
Border Opacity: 50%
```

---

## 🎨 Shadows & Effects

### Shadows
```
Small:
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12)

Medium:
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1)

Large:
box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15)

Glow (Blue):
box-shadow: 0 8px 24px rgba(59, 130, 246, 0.3)
```

### Blur Effects
```
Backdrop Blur:
backdrop-filter: blur(12px)

Background Blur (decorative):
filter: blur(150px)
```

### Gradients
```
Background Gradient:
background: linear-gradient(
  to bottom right,
  var(--portfolio-navy-dark),
  var(--portfolio-navy-medium),
  var(--portfolio-navy-dark)
)

Hover Gradient (subtle):
background: linear-gradient(
  to top,
  rgba(59, 130, 246, 0.1),
  transparent
)
```

---

## 🎭 Animations & Transitions

### Standard Transitions
```
Duration: 300ms
Easing: ease (default)

Usage:
transition: all 0.3s ease;
```

### Specific Transitions
```
Colors:
transition: color 0.3s ease, background-color 0.3s ease;

Transform:
transition: transform 0.3s ease;

Border:
transition: border-color 0.3s ease;
```

### Hover Effects

#### Scale
```
Default: scale(1)
Hover: scale(1.05)
Duration: 300ms
```

#### Opacity
```
Default: opacity(1)
Hover: opacity(0.8)
Duration: 200ms
```

#### Glow
```
Default: box-shadow: none
Hover: box-shadow: 0 8px 24px rgba(59, 130, 246, 0.3)
Duration: 300ms
```

---

## 🖼️ Images

### Formats
```
Profile Photos: PNG with transparency
Screenshots: JPG or PNG
Icons: SVG
Background Elements: PNG with transparency
```

### Sizing Guidelines
```
Profile Image (Hero):
Max Width: 512px
Aspect Ratio: Variable (portrait)
Border Radius: 16px

Profile Image (About):
Size: 256px × 256px
Aspect Ratio: 1:1 (square)
Border Radius: 16px

Project Cards:
Aspect Ratio: 4:3
Object Fit: cover
Width: 100% of container

Icons:
Small: 16px
Medium: 20px
Large: 24px
Extra Large: 32px
```

### Image States
```
Default: scale(1), opacity(1)
Hover: scale(1.05)
Loading: opacity(0.6)
```

---

## 🎨 Borders & Radius

### Border Widths
```
Thin: 1px (standard)
Medium: 2px (emphasis)
```

### Border Styles
```
Default: solid
Color: Varies by component
Opacity: Often 20% → 50% on hover
```

### Border Radius
```
Small: 4px (tags)
Medium: 8px (buttons)
Large: 12px (cards)
Extra Large: 16px (images)
Full: 9999px (circular)
```

---

## 📱 Responsive Breakpoints

### Breakpoint Values
```
Mobile: 0 - 767px
Tablet: 768px - 1023px
Desktop: 1024px - 1279px
Large Desktop: 1280px+
```

### Media Queries
```css
/* Tablet and up */
@media (min-width: 768px) { ... }

/* Desktop and up */
@media (min-width: 1024px) { ... }

/* Large desktop */
@media (min-width: 1280px) { ... }
```

### Tailwind Modifiers
```
sm: 640px   (small devices)
md: 768px   (medium devices)
lg: 1024px  (large devices)
xl: 1280px  (extra large devices)
2xl: 1536px (2x extra large devices)
```

---

## 🎯 Icons

### Icon Library
**Lucide React** - Primary icon set

### Icon Sizing
```
Small: 16px (navigation)
Medium: 20px (buttons with text)
Large: 24px (standalone icons)
Extra Large: 32px (hero elements)
```

### Icon Colors
```
Default: var(--portfolio-text-secondary)
Hover: var(--portfolio-blue-primary) or #FFFFFF
Active: var(--portfolio-blue-primary)
```

### Icon Usage
```
Always pair with text for clarity
Use consistent sizing within sections
Ensure 2px spacing from adjacent text
Provide ARIA labels for accessibility
```

---

## ♿ Accessibility

### Color Contrast
```
Minimum Ratio: 4.5:1 (WCAG AA)
Large Text: 3:1
Graphics: 3:1

Examples:
✅ White on Blue Primary: 6.2:1
✅ Text Secondary on Navy Dark: 7.8:1
✅ White on Navy Light: 14.5:1
```

### Focus States
```
Outline: 2px solid var(--portfolio-blue-primary)
Offset: 2px
Border Radius: Matches element
```

### Touch Targets
```
Minimum Size: 44px × 44px
Recommended: 48px × 48px
Spacing: 8px between targets
```

### Motion
```
Respect prefers-reduced-motion:
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 📋 Component States

### Interactive States

#### Links
```
Default: var(--portfolio-text-secondary)
Hover: #FFFFFF
Active: var(--portfolio-blue-primary)
Visited: No special styling
Focus: Blue outline
```

#### Buttons
```
Default: Fully opaque
Hover: Color shift + shadow
Active: Slightly darker
Disabled: 50% opacity, no pointer events
Focus: Blue outline
```

#### Cards
```
Default: Border at 20% opacity
Hover: Border at 50% opacity
Active: No special state
Focus: Blue outline
```

---

## 🎨 Visual Hierarchy

### Establishing Hierarchy

#### Level 1 (Most Important)
```
H1 headings in white
Primary CTAs in blue
Hero profile image
```

#### Level 2 (Important)
```
H2 section headings
Project images
Certification cards
```

#### Level 3 (Supporting)
```
Body text in secondary color
Card descriptions
Skill tags
```

#### Level 4 (Least Important)
```
Captions in muted color
Metadata
Footer text
```

---

## 🎯 Do's and Don'ts

### Color Do's ✅
- Use design tokens (CSS variables)
- Maintain contrast ratios
- Use blue for interactive elements
- Keep backgrounds in navy palette

### Color Don'ts ❌
- Don't use colors outside the palette
- Don't use low-contrast combinations
- Don't use blue for non-interactive elements
- Don't mix multiple accent colors

### Typography Do's ✅
- Use type scale consistently
- Maintain line height for readability
- Use font weights purposefully
- Scale down on mobile

### Typography Don'ts ❌
- Don't use too many font sizes
- Don't set line-height below 1.2
- Don't use all caps excessively
- Don't use font sizes below 14px

### Spacing Do's ✅
- Use 4px base unit
- Maintain consistent gaps
- Increase spacing on larger screens
- Follow component spacing guidelines

### Spacing Don'ts ❌
- Don't use arbitrary values
- Don't cram content together
- Don't overuse large spacing
- Don't break from the scale

---

## 📚 Quick Reference

### Most Used Classes

#### Container
```
max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
```

#### Section
```
py-20 bg-[var(--portfolio-navy-medium)]
```

#### Card
```
p-6 rounded-xl bg-[var(--portfolio-navy-light)] border border-[var(--portfolio-blue-primary)]/20
```

#### Button
```
px-6 py-3 bg-[var(--portfolio-blue-primary)] text-white rounded-lg transition-all
```

#### Heading
```
text-3xl sm:text-4xl font-bold text-white
```

#### Body Text
```
text-[var(--portfolio-text-secondary)] text-lg leading-relaxed
```

---

## 🎨 Brand Guidelines

### Logo Usage
```
Primary: "ELG" in white
Font Weight: 600 (Semibold)
Letter Spacing: -0.02em (tight)
Size: 20px (1.25rem)
```

### Brand Voice
```
Professional yet approachable
Focus on user-centered design
Emphasis on functionality
Modern and innovative
```

### Tone
```
Confident but not arrogant
Clear and concise
Helpful and informative
Passionate about design
```

---

**Version**: 1.0.0
**Last Updated**: December 2024
**Status**: Production Ready
