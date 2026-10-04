# Klinik Dr Sophia Y

Premium, responsive landing page built with Next.js App Router, TypeScript, Tailwind CSS and GSAP.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000. Production: `npm run build`, then `npm start`. TypeScript validation: `npm run typecheck`.

## Content and assets

- `lib/clinic.ts`: branch addresses, mobile/WhatsApp contacts, treatments and all replaceable images.
- `app/page.tsx`: semantic landing-page content.
- `app/globals.css`: responsive editorial styling.
- `components/`: reusable navigation, buttons, treatments and reduced-motion-aware GSAP.
- `RESEARCH.md`: source URLs, verification details and content limitations.

Temporary editorial photographs must be replaced with approved assets before publication. No model photograph represents Dr Sophia, and no photo depicts treatment results. Contact links open WhatsApp; appointments are arranged by the clinic. Confirm branch contacts and treatment availability with the clinic before launch. Set the final deployment URL and approved sharing image in metadata when hosting is selected.

The treatment accordion supports touch and keyboard, with one expanded row at a time. Navigation supports Escape and hides closed links from focus. Scroll animations are desktop-only and respect reduced motion. Images use Next.js optimisation and responsive sizing; Outfit is locally served.
