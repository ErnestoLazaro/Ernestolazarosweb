# Component Library & Usage Guide

This document provides detailed information about all reusable components and patterns in the portfolio website.

---

## 📦 Core Components

### 1. Header Component

**Location**: `/src/app/components/Header.tsx`

**Purpose**: Fixed navigation bar with responsive mobile menu

**Features**:
- Fixed positioning at top
- Desktop horizontal navigation
- Mobile hamburger menu
- Smooth scroll to sections
- Backdrop blur effect

**Props**: None (standalone component)

**Usage**:
```tsx
import { Header } from './components/Header';

<Header />
```

**Responsive Behavior**:
- **Desktop**: Horizontal menu with all links visible
- **Mobile**: Hamburger icon that opens overlay menu

**Customization**:
```tsx
// Navigation items can be modified in the component
const navItems = [
  { label: 'Sobre Mi', href: '#sobre-mi' },
  { label: 'Portafolio', href: '#portafolio' },
  // Add more items...
];
```

---

### 2. HeroSection Component

**Location**: `/src/app/components/HeroSection.tsx`

**Purpose**: Main introduction section with profile and CTAs

**Features**:
- Full viewport height
- Profile image with glow effect
- Name and title display
- Two CTA buttons
- Social media links
- Background gradient

**Props**: None (standalone component)

**Usage**:
```tsx
import { HeroSection } from './components/HeroSection';

<HeroSection />
```

**Layout Structure**:
```
┌─────────────────────────────────┐
│  Text Content    │  Profile     │
│  - Name          │  Image       │
│  - Title         │              │
│  - Description   │              │
│  - CTAs          │              │
│  - Social Links  │              │
└─────────────────────────────────┘
```

**Responsive Behavior**:
- **Desktop**: 2-column grid (text + image)
- **Mobile**: Stacked layout (text first, then image)

---

### 3. AboutSection Component

**Location**: `/src/app/components/AboutSection.tsx`

**Purpose**: Biography and professional certifications

**Features**:
- Profile image display
- Biography text
- Certification cards grid
- Hover effects on cards

**Props**: None (standalone component)

**Usage**:
```tsx
import { AboutSection } from './components/AboutSection';

<AboutSection />
```

**Certification Card Structure**:
```tsx
{
  name: 'Google UX Design',
  type: 'Certified',
  icon: '🎨',
  color: 'var(--portfolio-blue-primary)'
}
```

**Customization**:
```tsx
// Add new certifications
const certifications = [
  {
    name: 'New Certification',
    type: 'Diploma',
    icon: '📚',
    color: 'var(--portfolio-blue-primary)'
  }
];
```

---

### 4. PortfolioSection Component

**Location**: `/src/app/components/PortfolioSection.tsx`

**Purpose**: Showcase portfolio projects in a grid

**Features**:
- Responsive project grid
- Project image with hover zoom
- Project title and category
- CTA button to view case study
- Hover effects and transitions

**Props**: None (standalone component)

**Usage**:
```tsx
import { PortfolioSection } from './components/PortfolioSection';

<PortfolioSection />
```

**Project Card Structure**:
```tsx
{
  title: 'Project Name',
  category: 'Project Type',
  image: 'image-url',
  link: 'case-study-url'
}
```

**Grid Behavior**:
- **Desktop**: 3 columns
- **Tablet**: 2 columns
- **Mobile**: 1 column

**Adding New Project**:
```tsx
const projects = [
  ...existingProjects,
  {
    title: 'New Project',
    category: 'UI/UX Design',
    image: 'https://...',
    link: '#case-study'
  }
];
```

---

### 5. SkillsSection Component

**Location**: `/src/app/components/SkillsSection.tsx`

**Purpose**: Display skills organized by category

**Features**:
- Category cards
- Skill tags with hover effects
- Responsive grid layout
- Easy to update and extend

**Props**: None (standalone component)

**Usage**:
```tsx
import { SkillsSection } from './components/SkillsSection';

<SkillsSection />
```

**Category Structure**:
```tsx
{
  title: 'Design Tools',
  skills: ['Figma', 'Adobe XD', 'Sketch']
}
```

**Adding New Category**:
```tsx
const skillCategories = [
  ...existingCategories,
  {
    title: 'New Category',
    skills: ['Skill 1', 'Skill 2', 'Skill 3']
  }
];
```

---

### 6. ContactSection Component

**Location**: `/src/app/components/ContactSection.tsx`

**Purpose**: Call-to-action for contact and social links

**Features**:
- Centered CTA button
- Social media links
- Email contact
- Clean, focused design

**Props**: None (standalone component)

**Usage**:
```tsx
import { ContactSection } from './components/ContactSection';

<ContactSection />
```

**Customization**:
```tsx
// Update email link
<a href="mailto:your-email@example.com">
  Enviar Mensaje
</a>

// Update social links
<a href="https://linkedin.com/in/your-profile">
  LinkedIn
</a>
```

---

### 7. Footer Component

**Location**: `/src/app/components/Footer.tsx`

**Purpose**: Simple footer with copyright

**Features**:
- Minimal design
- Copyright text
- Border separator

**Props**: None (standalone component)

**Usage**:
```tsx
import { Footer } from './components/Footer';

<Footer />
```

---

## 🎨 Reusable Patterns

### Button Patterns

#### Primary Button
```tsx
<a
  href="#"
  className="px-6 py-3 bg-[var(--portfolio-blue-primary)] hover:bg-[var(--portfolio-blue-secondary)] text-white rounded-lg transition-all hover:shadow-lg hover:shadow-[var(--portfolio-blue-glow)]"
>
  Button Text
</a>
```

**Use for**: Main CTAs, important actions

#### Secondary Button
```tsx
<a
  href="#"
  className="px-6 py-3 bg-transparent border border-[var(--portfolio-text-secondary)] hover:border-white text-white rounded-lg transition-all flex items-center gap-2"
>
  <Icon size={18} />
  Button Text
</a>
```

**Use for**: Secondary actions, download links

#### Icon Button
```tsx
<button
  className="p-2 hover:bg-[var(--portfolio-navy-light)] rounded-lg transition-colors"
  aria-label="Button label"
>
  <Icon size={24} />
</button>
```

**Use for**: Mobile menu toggle, icon-only actions

---

### Card Patterns

#### Standard Card
```tsx
<div className="p-6 rounded-xl bg-[var(--portfolio-navy-light)] border border-[var(--portfolio-blue-primary)]/20 hover:border-[var(--portfolio-blue-primary)]/50 transition-all">
  {/* Card content */}
</div>
```

**Use for**: Content containers, feature cards

#### Project Card
```tsx
<div className="group relative bg-[var(--portfolio-navy-light)] rounded-xl overflow-hidden border border-[var(--portfolio-navy-light)] hover:border-[var(--portfolio-blue-primary)]/50 transition-all">
  {/* Image container */}
  <div className="aspect-[4/3] overflow-hidden">
    <img 
      src="..." 
      alt="..." 
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
    />
  </div>
  
  {/* Content */}
  <div className="p-6">
    <h3 className="text-xl font-semibold text-white mb-2">Title</h3>
    <p className="text-[var(--portfolio-text-muted)] mb-4">Description</p>
    <a href="#" className="...">CTA</a>
  </div>
</div>
```

**Use for**: Portfolio projects, case studies

#### Certification Card
```tsx
<div className="p-4 rounded-lg bg-[var(--portfolio-navy-light)] border border-[var(--portfolio-blue-primary)]/20 hover:border-[var(--portfolio-blue-primary)]/50 transition-all">
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-lg bg-[var(--portfolio-blue-primary)]/10 flex items-center justify-center text-xl">
      {icon}
    </div>
    <div>
      <h3 className="text-white font-medium">Title</h3>
      <p className="text-[var(--portfolio-text-muted)] text-sm">Subtitle</p>
    </div>
  </div>
</div>
```

**Use for**: Certifications, achievements, credentials

---

### Layout Patterns

#### Section Container
```tsx
<section 
  id="section-id" 
  className="py-20 bg-[var(--portfolio-navy-medium)]"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section content */}
  </div>
</section>
```

**Use for**: All main sections

#### Content Grid
```tsx
{/* 3-column → 2-column → 1-column */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => (
    <div key={item.id}>
      {/* Grid item */}
    </div>
  ))}
</div>
```

**Use for**: Portfolio projects, skill categories

#### Two-Column Layout
```tsx
<div className="grid lg:grid-cols-2 gap-12 items-center">
  <div>{/* Column 1 */}</div>
  <div>{/* Column 2 */}</div>
</div>
```

**Use for**: About section, hero section

---

### Typography Patterns

#### Section Heading
```tsx
<h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
  Section Title
</h2>
```

#### Card Heading
```tsx
<h3 className="text-xl font-semibold text-white mb-2">
  Card Title
</h3>
```

#### Body Text
```tsx
<p className="text-[var(--portfolio-text-secondary)] text-lg leading-relaxed">
  Body text content
</p>
```

#### Muted Text
```tsx
<p className="text-[var(--portfolio-text-muted)] text-sm">
  Caption or label
</p>
```

---

### Icon Patterns

#### Icon with Text
```tsx
<div className="flex items-center gap-2">
  <Icon size={20} />
  <span>Text</span>
</div>
```

#### Icon Button
```tsx
<button className="p-2 hover:bg-[var(--portfolio-navy-light)] rounded-lg transition-colors">
  <Icon size={24} className="text-white" />
</button>
```

#### Social Icon
```tsx
<a href="#" className="text-[var(--portfolio-text-secondary)] hover:text-[var(--portfolio-blue-primary)] transition-colors">
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    {/* SVG path */}
  </svg>
</a>
```

---

### Tag Patterns

#### Skill Tag
```tsx
<span className="px-3 py-1.5 bg-[var(--portfolio-navy-dark)] text-[var(--portfolio-text-secondary)] rounded-lg text-sm border border-[var(--portfolio-navy-light)] hover:border-[var(--portfolio-blue-primary)]/30 hover:text-white transition-all">
  Tag Text
</span>
```

**Use for**: Skills, technologies, categories

---

## 🎭 Animation & Transition Patterns

### Hover Scale
```tsx
className="transition-transform hover:scale-105"
```

### Hover Glow
```tsx
className="hover:shadow-lg hover:shadow-[var(--portfolio-blue-glow)]"
```

### Color Transition
```tsx
className="transition-colors hover:text-white"
```

### Border Transition
```tsx
className="border border-[var(--portfolio-blue-primary)]/20 hover:border-[var(--portfolio-blue-primary)]/50 transition-all"
```

### Background Transition
```tsx
className="bg-[var(--portfolio-blue-primary)] hover:bg-[var(--portfolio-blue-secondary)] transition-all"
```

---

## 📱 Responsive Patterns

### Show/Hide Elements
```tsx
{/* Desktop only */}
<div className="hidden lg:block">Desktop content</div>

{/* Mobile only */}
<div className="block lg:hidden">Mobile content</div>
```

### Responsive Spacing
```tsx
{/* Mobile: 4, Desktop: 8 */}
<div className="px-4 lg:px-8">
  Content
</div>
```

### Responsive Typography
```tsx
{/* Mobile: base, Tablet: lg, Desktop: xl */}
<h1 className="text-base md:text-lg lg:text-xl">
  Heading
</h1>
```

### Responsive Grid
```tsx
{/* Mobile: 1 col, Tablet: 2 col, Desktop: 3 col */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

---

## 🎨 Color Application Guide

### Background Colors
- **Navy Dark** (`--portfolio-navy-dark`): Main background, primary containers
- **Navy Medium** (`--portfolio-navy-medium`): Alternating sections
- **Navy Light** (`--portfolio-navy-light`): Cards, elevated elements

### Accent Colors
- **Blue Primary** (`--portfolio-blue-primary`): Buttons, links, highlights
- **Blue Secondary** (`--portfolio-blue-secondary`): Hover states

### Text Colors
- **Text Primary** (`--portfolio-text-primary`): Headings, important text
- **Text Secondary** (`--portfolio-text-secondary`): Body text
- **Text Muted** (`--portfolio-text-muted`): Captions, less important text

---

## 🔧 Component Modification Guide

### Adding a New Section

1. **Create component file**:
```tsx
// NewSection.tsx
export function NewSection() {
  return (
    <section id="new-section" className="py-20 bg-[var(--portfolio-navy-dark)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
          New Section
        </h2>
        {/* Content */}
      </div>
    </section>
  );
}
```

2. **Import in App.tsx**:
```tsx
import { NewSection } from './components/NewSection';

export default function App() {
  return (
    <div>
      {/* Other sections */}
      <NewSection />
    </div>
  );
}
```

3. **Add navigation link** in Header.tsx:
```tsx
{ label: 'New Section', href: '#new-section' }
```

---

## 📚 Best Practices

### Component Organization
- One component per file
- Clear, descriptive names
- Props interface when needed
- Export at bottom of file

### Styling
- Use design tokens (CSS custom properties)
- Follow Tailwind utility patterns
- Maintain consistent spacing
- Use responsive modifiers (sm:, md:, lg:)

### Accessibility
- Add alt text to images
- Use semantic HTML
- Include ARIA labels for icons
- Ensure keyboard navigation

### Performance
- Lazy load images when possible
- Keep components small and focused
- Avoid unnecessary re-renders
- Use appropriate image sizes

---

## 🎯 Quick Reference

### Common Class Combinations

**Section**:
```
py-20 bg-[var(--portfolio-navy-medium)]
```

**Container**:
```
max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
```

**Card**:
```
p-6 rounded-xl bg-[var(--portfolio-navy-light)] border border-[var(--portfolio-blue-primary)]/20 hover:border-[var(--portfolio-blue-primary)]/50 transition-all
```

**Button**:
```
px-6 py-3 bg-[var(--portfolio-blue-primary)] hover:bg-[var(--portfolio-blue-secondary)] text-white rounded-lg transition-all
```

**Heading**:
```
text-3xl sm:text-4xl font-bold text-white mb-12
```

---

**Version**: 1.0.0
**Last Updated**: December 2024
