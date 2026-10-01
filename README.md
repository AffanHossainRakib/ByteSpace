# ByteSpace

A responsive online-courses website built from the **ByteSpace New Check** Figma design.

**Live:** https://byte-space-doin.vercel.app

![ByteSpace preview](https://byte-space-doin.vercel.app/opengraph-image)

## What's built

| Page            | Route              | Notes                                                                                                        |
| --------------- | ------------------ | ------------------------------------------------------------------------------------------------------------ |
| Landing page    | `/`                | Hero, partners, discover courses (filterable pills), learning paths, feature rows, creator CTA, testimonials |
| Login           | `/login`           | Live validation, password show/hide, social buttons                                                          |
| Sign up         | `/register`        | Live validation, password strength meter                                                                     |
| Course search   | `/courses`         | Search, rating / level / category filters, sort and pagination, all stored in the URL                        |
| Course details  | `/courses/[slug]`  | About / Lessons / Reviews tabs, review star filter, sticky sidebar, share button                             |
| Creator profile | `/creators/[slug]` | Profile header, follow toggle, the creator's courses with filters                                            |
| Creators        | `/creators`        | List of creators (not in Figma; gives the navbar link a page)                                                |
| 404 / errors    | any unknown route  | Branded not-found, error and global-error pages                                                              |

Every page is responsive for mobile (< 768px), tablet (768–1023px) and desktop (≥ 1024px).

## Tech stack

- **Next.js 16** (App Router, Server Components, Server Actions) + **React 19** + **TypeScript**
- **Tailwind CSS v4** with the Figma style guide as design tokens (`app/globals.css`)
- **shadcn/ui** (Radix): Button, Badge, Input, Sheet, Dropdown Menu, Toggle Group
- **React Hook Form + Zod** for forms; the same Zod schemas validate in the browser and in the server actions
- **react-icons** (Material set, matching the Figma icons) · **Sonner** toasts
- Fonts: Poppins (`next/font/google`) and Satoshi (local, self-hosted)

## Getting started

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build
pnpm lint
```

Optional: set `NEXT_PUBLIC_SITE_URL` for absolute share-image and sitemap URLs. On Vercel the production domain is picked up automatically.

## Project structure

```
app/
  (site)/               pages with the navbar + footer
    _components/        landing-page sections (hero, features, testimonials…)
    courses/            search page + [slug] course details
    creators/           creators list + [slug] profile
  (auth)/               login and register (own full-screen layout)
  not-found.tsx, error.tsx, global-error.tsx
  icon.tsx, apple-icon.tsx, opengraph-image.tsx, manifest.ts, robots.ts, sitemap.ts
components/             shared UI used by 2+ routes (navbar, footer, course card, toolbar…)
components/ui/          shadcn components
config/                 site settings and sample data (courses, creators)
lib/                    helpers: course filtering, Zod schemas, share-image template
hooks/                  shared hooks
actions/                shared server actions (newsletter)
```

Components used by a single route live in that route's private `_components` folder; anything shared by two or more routes moves to the root `components/`, `lib/`, `hooks/` or `actions/`.

## Implementation notes

- **Reusable building blocks:** one `CourseCard`, `CourseGrid`, `CourseToolbar`, `Pagination`, `ScrollRow` and `ogCard` serve the landing, search, course and creator pages. Pill styles come from the shadcn `Badge` variants.
- **URL-driven state:** filters, sort, page, course tab and review stars are search params, so every view is shareable and works with the back button.
- **Figma-accurate collages:** the hero, feature and CTA illustrations use the exact Figma coordinates inside one stage that scales per breakpoint.
- **SEO & sharing:** per-page titles and descriptions, Open Graph / Twitter cards with generated share images for every page, course and creator, plus sitemap, robots and a web manifest.
- **Accessibility:** semantic landmarks, a skip-to-content link, keyboard-friendly Radix menus and toggles, labelled icon buttons, `prefers-reduced-motion` support.

## Beyond the design

Small additions not in Figma, chosen for usability:

- Sticky navbar that turns solid on scroll, and a back-to-top button with a reading-progress ring
- Scroll-in fade animations (CSS only) and scroll arrows on horizontally scrolling pill rows
- Landing-page category pills filter the course cards in place
- Toast confirmations for the newsletter, login and sign-up forms

## Limitations

- Sample data only: there is no backend, so sign-in, sign-up, newsletter, follow and enroll do not persist anything.
- Figma details one course, so every course page shares the same description, lessons and reviews (title, price, level and image are per course).
- Links to pages without a design (cart, forgot password, footer info pages) open the 404 page.
