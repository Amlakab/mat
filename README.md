# MAT Engineering and Trading PLC — Official Corporate Portal

Modern, responsive, bilingual corporate web platform for **MAT Engineering and Trading PLC**, built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

---

## 🏢 Company Profile
- **Company Name:** MAT Engineering and Trading PLC
- **General Manager:** Amare Tesfa
- **Phone Number:** 0911 994 405 (`tel:+251911994405`)
- **Location:** Ethiopia (Headquartered in Addis Ababa with nationwide project delivery)
- **Copyright:** © 2026 MAT Engineering and Trading PLC. All rights reserved.

---

## 🏗️ Core Business Divisions

1. **Construction Material Supplier**
   - High-tensile structural steel rebar (Grade 60)
   - Certified Portland Pozzolana Cement (PPC & OPC)
   - Heavy-duty hollow concrete blocks (HCB)
   - Galvanized & pre-painted roofing sheets
   - Plumbing, electrical, and architectural finishing supplies

2. **Home & Office Furniture**
   - Modern living room sectional sofas & lounge seating
   - Handcrafted dining suites & bedroom packages
   - Modular wall wardrobes & residential storage
   - Executive managerial desks with cable integration
   - High-back ergonomic breathable mesh chairs
   - Boardroom conference tables (10–14 person) with pop-up media sockets
   - Cold-rolled steel filing and storage cabinets

3. **General Contractor**
   - Commercial, institutional & residential building construction
   - Structural execution, site management & engineering coordination
   - Space renovation, remodeling, and modern interior fit-outs

---

## 🎨 Design System & HRMS Frontend Alignment

- **Consistent UI Architecture:** Aligned with `hrms-frontend` design tokens, color palette, dark mode variables, and font stack.
- **Color Palette:**
  - **Primary:** Deep Blue / Navy (`#1E3A8A` / `#2563EB`)
  - **Accent:** Construction Amber / Orange (`#EA580C` / `#D97706`)
  - **Surfaces:** Clean white (`#FFFFFF`) / Dark mode deep navy (`#112240`, `#0A192F`)
- **Theme Support:** Instant Dark / Light mode toggle with local storage persistence and system preference detection.
- **Language Support:** Full English (`en`) and Amharic (`am`) bilingual localization with instant one-click toggle.
- **Iconography:** Lucide React icons.
- **Typography:** Inter paired with Noto Sans Ethiopic for authentic Ethiopian script rendering.

---

## 🚀 Quick Start Guide

### 1. Prerequisites
- Node.js 18+ (tested with Node 20 & 24)
- npm or yarn

### 2. Development Server
```bash
cd /home/amlakie/Desktop/Projects/HRMS/MAT
npm run dev
# or
npx next dev -p 3005
```
Access the application at `http://localhost:3005`.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 📂 Project Architecture

```
MAT/
├── app/
│   ├── globals.css         # Responsive styling, CSS variables & theme tokens
│   ├── layout.tsx          # Root layout with ThemeProvider, LanguageProvider & SEO metadata
│   ├── not-found.tsx       # Corporate 404 page with bilingual recovery links
│   └── page.tsx            # Main landing page assembling all sections & modals
├── components/
│   ├── AboutSection.tsx    # Grounded corporate story & 4 verified pillars
│   ├── ContactSection.tsx  # GM information, working contact form & map placeholder
│   ├── CTASection.tsx      # High-impact CTA with direct tel link & quote trigger
│   ├── Footer.tsx          # Complete footer with corporate credentials & copyright
│   ├── Hero.tsx            # Hero with dual CTAs, badge & 3 division cards
│   ├── Navbar.tsx          # Sticky header, desktop links, mobile drawer, theme & language switches
│   ├── ProductsSection.tsx # Filterable catalog with search, specs & quote triggers
│   ├── ProjectsSection.tsx # Demonstrative project showcases with category filters
│   ├── QuoteModal.tsx      # Interactive quotation modal with department pre-fill
│   ├── ServicesSection.tsx # 4 detailed departments with categorized scope tags
│   └── WhyChooseUs.tsx     # 5 core values: Quality, Reliability, Solutions, Focus, Service
├── lib/
│   ├── catalog-data.ts     # Centralized product catalog, service scope & demo projects
│   ├── language-context.tsx# React context for English/Amharic localization
│   ├── theme-context.tsx   # React context for Light/Dark mode switching
│   └── translations.ts     # Complete bilingual translation dictionary
├── next.config.js          # Next.js configuration with remote image optimizations
├── tailwind.config.js      # Tailwind theme configuration matching HRMS frontend
└── tsconfig.json           # TypeScript configuration
```

---

## 🛠️ How the Company Can Later Add Real Inventory & Projects

1. **Adding Real Products:**
   Open `lib/catalog-data.ts` and add items to the `PRODUCTS_CATALOG` array with your images, Amharic/English titles, and technical specifications.
2. **Adding Real Projects:**
   Update `DEMO_PROJECTS` in `lib/catalog-data.ts` with real photos, descriptions, and set `isDemo: false`.
3. **Updating Office Map Coordinates:**
   In `components/ContactSection.tsx`, replace the Google Maps iframe embed URL with your exact office GPS location.
4. **Connecting Backend API / CRM:**
   In `components/ContactSection.tsx` and `components/QuoteModal.tsx`, the `handleSubmit` functions can be directly connected to an API endpoint, Telegram bot, or email service.
# mat
