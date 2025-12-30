# Portfolio Website - Ernesto Lázaro Guerrero

A modern, responsive portfolio website for UI/UX Designer Ernesto Lázaro Guerrero, built with React, TypeScript, and Tailwind CSS.

![Portfolio Preview](https://images.unsplash.com/photo-1633250391894-397930e3f5f2?w=800)

## ✨ Features

- 🎨 **Modern Design System** - Comprehensive design tokens and guidelines
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile
- ⚡ **High Performance** - Fast loading times and smooth animations
- ♿ **Accessible** - WCAG 2.1 AA compliant
- 🎭 **Interactive** - Smooth hover effects and transitions
- 🧩 **Component-Based** - Modular and maintainable architecture

## 🚀 Quick Start

### Prerequisites
- Node.js 16 or higher
- npm or pnpm package manager

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── components/     # React components
│   │   └── App.tsx        # Main application
│   └── styles/            # CSS and design tokens
├── DESIGN_SYSTEM.md       # Complete design specifications
├── TECH_LEADERS_PRESENTATION.md  # Technical documentation
├── DEVELOPER_GUIDE.md     # Developer quick reference
└── package.json
```

## 🎨 Design System

This project includes a comprehensive design system with:

- **Color Palette**: Navy and blue accent colors
- **Typography**: Responsive font scaling
- **Spacing System**: Consistent spacing tokens
- **Component Library**: Reusable UI components
- **Responsive Grid**: Mobile-first layout system

See [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) for complete specifications.

## 💻 Technology Stack

- **React 18.3.1** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS 4.1.12** - Styling
- **Vite 6.3.5** - Build tool
- **Lucide React** - Icon library
- **Motion** - Animation library

## 📱 Sections

1. **Hero** - Introduction with profile photo and CTAs
2. **About** - Biography and certifications
3. **Portfolio** - Project showcase with case study links
4. **Skills** - Categorized skill tags
5. **Contact** - Call-to-action and social links

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints: 768px (tablet), 1024px (desktop)
- Fluid typography and spacing
- Adaptive navigation (hamburger menu on mobile)

### Performance
- Optimized bundle size
- Lazy loading for images
- CSS purging with Tailwind
- Fast Vite development server

### Accessibility
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Sufficient color contrast (WCAG AA)
- Responsive tap targets (44px minimum)

## 🛠️ Development

### Component Development

Components are located in `/src/app/components/`:
- `Header.tsx` - Navigation with mobile menu
- `HeroSection.tsx` - Hero with profile and CTAs
- `AboutSection.tsx` - Biography section
- `PortfolioSection.tsx` - Project showcase
- `SkillsSection.tsx` - Skills and expertise
- `ContactSection.tsx` - Contact CTA
- `Footer.tsx` - Site footer

### Styling Guidelines

Use design tokens from `theme.css`:
```jsx
<div className="bg-[var(--portfolio-navy-dark)] text-[var(--portfolio-text-primary)]">
  Content
</div>
```

See [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md) for detailed development instructions.

## 📖 Documentation

- **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** - Complete design specifications and guidelines
- **[TECH_LEADERS_PRESENTATION.md](./TECH_LEADERS_PRESENTATION.md)** - Technical architecture and implementation details
- **[DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md)** - Quick reference for developers

## 🔮 Future Enhancements

- [ ] CMS integration for easy content updates
- [ ] Blog section for case studies and articles
- [ ] Contact form with backend integration
- [ ] Dark mode toggle
- [ ] Multi-language support (English/Spanish)
- [ ] Scroll-triggered animations
- [ ] Analytics integration
- [ ] Automated testing suite

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 👤 Author

**Ernesto Lázaro Guerrero**
- Role: UI/UX Designer
- LinkedIn: [LinkedIn Profile](#)
- Behance: [Behance Portfolio](#)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons by [Lucide](https://lucide.dev)
- Built with [React](https://react.dev) and [Tailwind CSS](https://tailwindcss.com)

---

**Version**: 1.0.0 (MVP)
**Status**: Production Ready
**Last Updated**: December 2024
