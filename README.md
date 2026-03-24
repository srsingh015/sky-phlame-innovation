# SKY PHLAME INNOVATION Website

Marketing website for SKY PHLAME INNOVATION built with Next.js App Router, TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production checks

```bash
npm run lint
npm run build
```

## Edit here

- Phone number, email, WhatsApp number, default WhatsApp message, services list, client list, service areas, and shared copy:
  - `lib/site-content.ts`
- WhatsApp link building, call/mail helpers, and LocalBusiness schema:
  - `lib/site.ts`
- Page metadata helpers:
  - `lib/seo.ts`
- Colors, buttons, spacing feel, and typography tokens:
  - `app/globals.css`
- Drop-in logo, OG image, and future photos/logos:
  - `public/assets/`

## Site URL

Set the production site URL by changing `siteConfig.siteUrl` in `lib/site-content.ts` or by providing `NEXT_PUBLIC_SITE_URL` at build time.

## Notes

- The quote form does not submit to a backend. It opens WhatsApp with the encoded enquiry details.
- The services and copy are based on the provided company profile PDF, with grammar lightly polished for the website.
- Placeholder assets are already wired so real logos and photos can replace them later without changing the page structure.
