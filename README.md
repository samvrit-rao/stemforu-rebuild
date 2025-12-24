# STEMForU Website

A modern, responsive website for STEMForU - inspiring and empowering elementary and middle school students through STEM education.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Ready for Vercel, Netlify, or any Node.js hosting

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
stemforu_rebuild/
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── mission/             # Mission page
│   ├── blogs/               # Blog listings and articles
│   ├── news/                # Science news articles
│   ├── summer-camp/         # Summer camp programs
│   ├── resources/           # Helpful learning resources
│   ├── layout.tsx           # Root layout with Header/Footer
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/              # Reusable React components
│   ├── Header.tsx           # Navigation header
│   └── Footer.tsx           # Site footer
├── public/                  # Static assets (add images here)
└── tailwind.config.ts       # Tailwind CSS configuration
```

## Pages Overview

- **Home** (`/`) - Hero section with mission, resources, and summer camp teasers
- **About** (`/about`) - Founder biography, publications, awards, and projects
- **Mission** (`/mission`) - Organization mission and participation details
- **Blogs** (`/blogs`) - Blog article listings and individual posts
- **News** (`/news`) - Current science news articles
- **Summer Camp** (`/summer-camp`) - Details of programs from 2021-2024
- **Resources** (`/resources`) - Curated external learning resources

## Features

- Fully responsive design (mobile, tablet, desktop)
- Modern, clean UI with Tailwind CSS
- SEO-friendly with proper meta tags
- Fast page loads with Next.js optimization
- Easy to extend and customize

## Customization

### Adding Images

1. Place images in the `public/` directory
2. Reference them in your code: `/image-name.jpg`
3. Update placeholder gradients in components with actual images

### Adding New Blog Posts

1. Add entry to the `blogPosts` array in `/app/blogs/page.tsx`
2. Create a new page at `/app/blogs/[slug]/page.tsx`

### Changing Colors

Edit the color scheme in `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    // Customize these values
    500: '#0ea5e9',
    600: '#0284c7',
    // ...
  }
}
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

Build the project and deploy the `.next` folder with Node.js support.

## Future Enhancements

- Add contact form functionality
- Implement user registration for summer camps
- Add blog post CMS integration
- Include photo galleries from past events
- Add testimonials section
- Integrate social media feeds

## License

Copyright © 2025 STEMForU. All rights reserved.
