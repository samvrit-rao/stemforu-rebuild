# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the STEMForU website - a modern, responsive Next.js application built to inspire and empower elementary and middle school students, especially those from underrepresented communities, through STEM education.

**Tech Stack:**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Google Fonts (Inter, DM Sans, Poppins, Sora)

## Development Commands

```bash
# Development
npm install          # Install dependencies
npm run dev         # Start development server on http://localhost:3000

# Production
npm run build       # Build for production
npm start           # Start production server

# Code Quality
npm run lint        # Run ESLint
```

## Architecture

### Routing & Layout
- Uses Next.js App Router with file-based routing in `app/` directory
- Root layout (`app/layout.tsx`) includes Header and Footer on all pages
- All pages are wrapped in a consistent layout with sticky header and global styles

### Font System
The application uses a custom font configuration defined in `app/layout.tsx`:
- `--font-inter`: Default sans-serif (body text)
- `--font-dm`: DM Sans for headings (`font-heading`)
- `--font-poppins`: Display font (`font-display`)
- `--font-sora`: Logo font (`font-logo`)

These are configured in `tailwind.config.ts` and applied via CSS variables.

### Styling Approach
- Tailwind CSS with custom color palette based on cyan/primary colors
- Custom utility classes in `app/globals.css`:
  - `.gradient-text`: Animated gradient text effect
  - `.glass-effect`: Glassmorphism backdrop blur
  - `.animate-float`, `.animate-slide-up`, `.animate-fade-in`: Custom animations
- Custom scrollbar styling with gradient
- Mobile-first responsive design

### Components Structure

**Header** (`components/Header.tsx`):
- Client component (`'use client'`) with interactive state
- Sticky navigation with glassmorphism effect
- Desktop: horizontal nav with dropdown menu for Content (Blogs/News/Resources)
- Mobile: hamburger menu with full-width links
- Uses teal-600 as accent color for CTAs

**Footer** (`components/Footer.tsx`):
- Contains site links and social information
- Consistent across all pages

**BackgroundSlideshow** (`components/BackgroundSlideshow.tsx`):
- Used for visual backgrounds on certain pages

### Content Management

**Blog Posts** are managed in `app/blogs/page.tsx`:
- Array of blog post objects with metadata (id, title, date, excerpt, slug, image)
- Individual blog posts are in `app/blogs/[slug]/page.tsx`
- To add new blog: add entry to array and create corresponding page file

**News Articles** follow same pattern in `app/news/page.tsx`

**Summer Camp** page (`app/summer-camp/page.tsx`) shows programs from 2021-2024

**Assets**: Static images are in `assets/` directory but should be placed in `public/` for Next.js Image optimization

### Page Routes
- `/` - Homepage with hero, mission, resources preview
- `/about` - Founder biography, awards, publications
- `/mission` - Organization mission and participation
- `/blogs` - Blog listing and individual posts
- `/news` - Science news articles
- `/summer-camp` - Summer camp programs
- `/resources` - External learning resources

## Styling Conventions

### Color Palette
- Primary: cyan/blue scale (50-900) defined in `tailwind.config.ts`
- Accent: teal-600 for CTAs and branding
- Use `primary-600` for main interactive elements
- Use `primary-50` for hover backgrounds

### Typography Classes
- Headings: Use `font-heading` (DM Sans)
- Logo/brand: Use `font-logo` (Sora)
- Display text: Use `font-display` (Poppins)
- Body: Default `font-sans` (Inter)

### Responsive Design
- Mobile-first approach
- Breakpoints: `md:` (768px+) for desktop layouts
- Mobile menu toggles at `md` breakpoint

## Important Notes

- All components using interactivity (useState, event handlers) must include `'use client'` directive
- Images should be placed in `public/` directory and referenced with `/image-name.jpg`
- The site uses Next.js Image component for optimization
- Navigation color scheme: teal accent for branding, primary (cyan) for content links
- Header has a glass effect with backdrop blur and sticky positioning
