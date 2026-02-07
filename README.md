# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Analytics & Campaign Tracking

GA4 is wired via `VITE_GA_MEASUREMENT_ID` (see `.env.example`).

**Tracked events**
1. `page_view` (each route change)
2. `donate_click` (header + donation CTA)
3. `subscribe_click`
4. `newsletter_signup_click`
5. `petition_submit`
6. `campaign_cta_click`

**Campaign fields sent with events (when active)**
1. `campaign_id`
2. `campaign_name`
3. `utm_source`
4. `utm_medium`
5. `utm_campaign`

Mark conversions in GA4 by using these event names as conversion events.

## CMS Login (Decap + GitHub)

1. Visit `/admin` on the deployed site (example: `https://scenicsantaritas-production.up.railway.app/admin`).
2. Log in with a GitHub account that has write access to `JedIV/scenicsantaritas`.
3. GitHub OAuth is configured in `public/admin/config.yml`.

If you need to rotate the GitHub OAuth App:
1. Update the GitHub OAuth App callback URL to `/admin`.
2. Replace `client_id` in `public/admin/config.yml`.
