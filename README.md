# Lawn Flow Website

Premium static website for **Lawn Flow** — landscaping, irrigation, and lawn care.

## Stack

- Next.js (App Router) + React
- Tailwind CSS v4
- TypeScript
- Static export for Firebase Hosting

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build (Firebase)

```bash
npm run build
```

Output is written to `out/`. Deploy with:

```bash
firebase deploy --only hosting
```

Or use `npm run deploy` after Firebase CLI login and project setup.

Update `.firebaserc` with your Firebase project ID, and set `site.url` in `src/lib/site.ts` to your live domain.

## Contact & location

Update `src/lib/site.ts` before launch with your live domain (`site.url`).

Phone, email, and Broward-only location are already set. SEO is scoped to **Broward County / Broward Area** (no street address published).

## Code style

No line-terminating semicolons (enforced via ESLint `semi: never`).
# Lawn_Flow_Site
