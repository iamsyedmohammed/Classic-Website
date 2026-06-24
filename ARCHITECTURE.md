# ARCHITECTURE.md

# Classic Biryani Kabab & Curry

## Tech Stack

Framework:
Next.js 15 App Router

Language:
TypeScript

Styling:
Tailwind CSS v4

UI:
Shadcn/ui

Animations:
Framer Motion

Icons:
Lucide React

Forms:
React Hook Form + Zod

Images:
next/image

Package Manager:
pnpm

---

# Folder Structure

app/
components/
sections/
content/
hooks/
lib/
types/
constants/
schemas/
public/

---

# App Structure

app/

layout.tsx

page.tsx

about/page.tsx

menu/page.tsx

catering/page.tsx

gallery/page.tsx

reviews/page.tsx

blog/page.tsx

contact/page.tsx

---

# Component Hierarchy

page.tsx

Navbar

HeroSection

SignatureDishesSection

AboutPreviewSection

WhyChooseUsSection

CateringPreviewSection

TestimonialsSection

GallerySection

ContactSection

Footer

---

# Content Management

No CMS.

Store content inside:

content/

Example:

home.ts

menu.ts

gallery.ts

testimonials.ts

faq.ts

---

# Forms

Contact Form

Catering Inquiry Form

Validation:

React Hook Form + Zod

---

# State Management

Prefer Server Components.

Client Components only when needed.

Avoid unnecessary state.

Use:

useState

useTransition

useForm

---

# SEO

Metadata API

JSON-LD

Open Graph

Twitter Cards

Sitemap

Robots.txt

---

# Performance

Image Lazy Loading

Code Splitting

WebP Images

Dynamic Imports

Server Components

---

# Analytics

Google Analytics 4

Google Tag Manager

Microsoft Clarity

Track:

Phone Clicks

Order Online Clicks

Direction Clicks

Form Submissions

---

# Accessibility

Semantic HTML

Keyboard Navigation

Visible Focus States

Alt Tags

WCAG AA
