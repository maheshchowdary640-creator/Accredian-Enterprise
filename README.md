# NetPrism - Enterprise Observability & Performance Analytics Platform

NetPrism is a premium, high-performance enterprise SaaS landing page and API telemetry suite designed for Fortune 500 carrier operators, low-latency financial systems, and hyperscale cloud providers. It consolidates raw packet captures, container service operational graphs, and active path testing metrics into unified microsecond-resolution insights.

This project is built on Next.js (App Router), React, TypeScript, and Tailwind CSS v4, utilizing a clean component-based architecture and strict accessible interaction interfaces (WCAG AA).

---

## Tech Stack

- **Framework**: Next.js 16/15 (App Router, Turbopack)
- **UI & Components**: React 19 Functional Components
- **Type Safety**: TypeScript 5
- **Styling & Theme**: Tailwind CSS v4 (Light-theme first, high-whitespace margins, custom CSS illustrations)
- **API Routing**: Native Next.js App Router API Endpoints
- **Accessibility**: WCAG AA compliant keyboard focus indicators, focus traps, and Escape close handlers

---

## Folder Structure

The project strictly follows a clean, modular component-based layout:

```text
accredian-enterprise/
├── app/
│   ├── api/
│   │   ├── contact/
│   │   │   └── route.ts          # Contact form validated ingest handler
│   │   ├── demo-request/
│   │   │   └── route.ts          # Lead generation & email verification api
│   │   └── performance-stats/
│   │       └── route.ts          # Mock telemetry metric stream provider
│   ├── globals.css               # Tailwind CSS v4 configuration and styles
│   ├── layout.tsx                # Root layout & page metadata SEO configuration
│   └── page.tsx                  # Main integrated landing page index
├── components/
│   ├── layout/
│   │   ├── Header.tsx            # Sticky White Navbar, dropdown lists & mobile drawer
│   │   └── Footer.tsx            # Multi-column links, compliance badges & social icons
│   ├── sections/
│   │   ├── Hero.tsx              # Enterprise headline, CTAs & abstract CSS animation
│   │   ├── TrustCompanies.tsx    # Horizontal responsive partner brand logo strip
│   │   ├── SolutionsSection.tsx  # Maps 3 reusable Solution cards
│   │   ├── FeaturesSection.tsx   # Maps 6 reusable Feature cards in responsive grid
│   │   ├── StatsSection.tsx      # Metrics dashboard using StatCard primitives
│   │   ├── TestimonialsSection.tsx# maps Success stories using TestimonialCard
│   │   ├── CtaSection.tsx        # High-impact Cobalt gradient banner
│   │   ├── ContactSection.tsx    # Details map & validated contact form
│   │   └── DemoModal.tsx         # Request Demo dialog modal with keyboard focus trap
│   ├── ui/
│   │   ├── Badge.tsx             # Standard uppercase status pill tag
│   │   ├── Button.tsx            # Button primitive (renders as <a> if href supplied)
│   │   ├── Card.tsx              # Elevating glassmorphic card base element
│   │   ├── FeatureCard.tsx       # Extends Card for grid items
│   │   ├── FormInput.tsx         # Handles inputs, textareas, selects, and error labels
│   │   ├── SolutionCard.tsx      # Extends Card with dynamic icon routes & CTAs
│   │   ├── StatCard.tsx          # Extends Card for value/metric statistics
│   │   └── TestimonialCard.tsx   # Extends Card with SVG quotes and user avatars
│   └── icons.tsx                 # Zero-dependency customizable vector SVGs
├── constants/
│   └── navigation.ts             # Header links, sitemaps, and footer lists
├── data/
│   ├── content.ts                # Copylist definitions for legacy widgets
│   └── features.ts               # Core 3 Solutions and 6 Technical Features datasets
├── types/
│   └── index.ts                  # Centralized TypeScript interface repository
```

---

## Features & Component Architecture

### 1. Reusable Component Hierarchy
Our components are built around clean, atomic primitives to avoid code duplication:
- **`Button`**: Supports standard HTML button attributes but detects if a `href` string is present, rendering as an anchor `<a>` element to preserve HTML5 semantic standards (preventing nesting buttons inside anchors).
- **`Card`**: Houses light-mode border gradients and box elevation shadows on mouse hover.
- **`FormInput`**: Consolidates forms. Handles `<input>`, `<textarea>`, and `<select>` dropdown states under a single interface, displaying screen-reader errors (`aria-describedby` & `aria-invalid`) dynamically.

### 2. Accessibility & Focus Control
- **Focus Indicators**: Explicitly styled keyboard rings (`focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2`) are configured on all interactive anchors, buttons, inputs, selects, and textareas.
- **Escape Close Bindings**: Keyboard keydown hooks close the mobile sliding menu and Demo Modal when the `Escape` key is pressed.
- **Dialog Focus Trap**: Tabs are trapped inside the `DemoModal` when open, preventing keyboard focus from bleeding onto underlying page elements.

### 3. Original CSS Visual Drawing
The right column of the Hero section features a custom, pure CSS abstract illustration representing telemetry pipelines. It utilizes rotating orbital paths, floating linear gradient nodes, and overlapping glassmorphic cards with soft margins to deliver a high-end enterprise design.

---

## Installation

Clone the repository and install the dependencies:

```bash
cd accredian-enterprise
npm install
```

---

## Running Locally

To verify validation routes and interact with the responsive interface, run the local Next.js development server:

### Windows Command Prompt (or cmd.exe)
```cmd
npm run dev
```

### Windows PowerShell
If script execution policies prevent running `.ps1` extensions, execute:
```powershell
powershell -ExecutionPolicy Bypass -Command "npm run dev"
```

The application will be available at `http://localhost:3000`.

---

## Deployment

The project is optimized for deployment on Vercel or standard serverless configurations. To build the optimized production package:

```bash
npm run build
```

This compiles TypeScript, checks ESLint standards, and generates optimized static pages and serverless endpoints.

---

## Future Improvements

- **Live WebSocket Streaming**: Connect the latency monitor to an active server webhook to display live network feeds.
- **Extended Edge Diagnostics**: Integrate telemetry collections for virtual overlays.
- **Admin Observability Console**: Build out route layouts representing secure portal SRE triage dashboards.

---

## AI Usage Disclosure

This codebase was developed and refactored in collaboration with **Antigravity**, an agentic AI coding assistant designed by Google DeepMind.

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
