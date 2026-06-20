# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

STEMForU website — a Next.js 14 (App Router) site for inspiring elementary and middle school students through STEM education.

**Tech Stack:** Next.js 14 · TypeScript · Tailwind CSS · gray-matter + remark (Markdown) · Decap CMS

## Development Commands

```bash
npm install       # Install dependencies
npm run dev       # Start dev server at http://localhost:3000
npm run build     # Build for production
npm run lint      # Run ESLint
```

No test suite exists in this project.

## Architecture

### Routing & Layout
- App Router with file-based routing in `app/`
- `app/layout.tsx` wraps all pages with `Header` and `Footer`
- Page routes: `/`, `/about`, `/mission`, `/blogs`, `/news`, `/summer-camp`, `/resources`, `/admin`

### Content Management (Markdown + Decap CMS)
Blog posts and news articles are stored as Markdown files with frontmatter:

```
content/
  blogs/   ← .md files for blog posts
  news/    ← .md files for news articles
```

**Frontmatter schema** (blogs): `title`, `date` (YYYY-MM-DD), `excerpt`, `image`, `author`, `body`  
**Frontmatter schema** (news): same but `date` is optional

`lib/markdown.ts` exports three functions used by page components:
- `getAllPosts(collection)` — reads all `.md` files, returns sorted `PostMeta[]`
- `getPostBySlug(collection, slug)` — reads one file, returns `Post` with rendered HTML
- `getAllSlugs(collection)` — used by `generateStaticParams()` for static generation

Both `app/blogs/[slug]/page.tsx` and `app/news/[slug]/page.tsx` use `generateStaticParams()` for static generation at build time.

To add new content: create a `.md` file in `content/blogs/` or `content/news/`. The filename becomes the URL slug.

### Decap CMS (`/admin`)
`app/admin/page.tsx` loads Decap CMS via CDN and initializes it with manual config. The CMS writes directly to the GitHub repo (`samvrit-rao/stemforu-rebuild`, `main` branch) via the GitHub backend.

**OAuth flow** for CMS authentication:
- `app/api/auth/route.ts` — redirects to GitHub OAuth with `OAUTH_GITHUB_CLIENT_ID`
- `app/api/callback/route.ts` — exchanges code for token using `OAUTH_GITHUB_CLIENT_SECRET`, posts result back to CMS window via `postMessage`

Required environment variables:
```
OAUTH_GITHUB_CLIENT_ID=
OAUTH_GITHUB_CLIENT_SECRET=
```

The `/admin` page hides the site header/footer via DOM manipulation so Decap CMS has full control of the viewport.

### Images
- Uploaded images go to `public/images/uploads/` (configured as `media_folder` in Decap CMS)
- Reference them as `/images/uploads/filename.jpg`
- Static assets used by pages are in `public/` and `assets/`; prefer `public/` for Next.js Image optimization

### Font System
Configured in `app/layout.tsx` and `tailwind.config.ts` via CSS variables:
- `--font-inter` → `font-sans` (body)
- `--font-dm` → `font-heading` (headings, DM Sans)
- `--font-poppins` → `font-display`
- `--font-sora` → `font-logo`

### Styling
- Custom utility classes in `app/globals.css`: `.gradient-text`, `.glass-effect`, `.animate-float`, `.animate-slide-up`, `.animate-fade-in`
- Color palette: `primary-*` (cyan scale) defined in `tailwind.config.ts`; use `primary-600` for interactive elements, `teal-600` for CTAs
- All client-interactive components require `'use client'` directive
