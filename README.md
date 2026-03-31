# moritz harfen

Website for harp builder Moritz Dortmund — [moritz-harfen.de](https://www.moritz-harfen.de).

Static site built with [Astro](https://astro.build) 6, [Tailwind CSS](https://tailwindcss.com) 3, and [Splide](https://splidejs.com) for image sliders. Bilingual (German / English). No JavaScript framework — zero runtime JS except for the image slider and mobile nav toggle.

## Requirements

- Node 22+
- pnpm

## Quick start

```shell
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # output → dist/
pnpm preview    # preview the dist/ build locally
```

## Deploy

Build outputs a fully static site to `dist/`. Copy the contents to any web server:

```shell
pnpm build
rsync -avz dist/ user@server:/var/www/moritz-harfen/
```

No server-side runtime required — plain HTML, CSS, and assets.

## Project structure

```
.
├── public/
│   ├── favicon.svg
│   ├── favicon-32x32.png
│   └── fonts/               # Poppins woff/woff2 files
├── src/
│   ├── components/
│   │   ├── button/          # ButtonLink
│   │   ├── imageslider/     # ImageSlider (Splide)
│   │   ├── leaderDisclaimer/
│   │   ├── navbar/          # Logo, NavLink, NavLinkDropdown, LanguageSelector
│   │   ├── Content.astro
│   │   ├── Footer.astro
│   │   ├── Legal.astro
│   │   └── Navbar.astro
│   ├── i18n/
│   │   ├── de.json          # German translations
│   │   ├── en.json          # English translations
│   │   └── utils.ts
│   ├── images/              # Source images (processed by Astro)
│   ├── layouts/
│   │   ├── BaseLayout.astro # HTML shell, meta, favicon
│   │   └── Layout.astro     # Page layout (LanguageSelector + Navbar + Footer)
│   ├── pages/               # German routes (/, /harfen, /kontakt, …)
│   │   └── en/              # English routes (/en/, /en/harfen, …)
│   └── styles/
│       └── global.css       # Poppins @font-face declarations
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Pages

| Route             | Description         |
| ----------------- | ------------------- |
| `/`               | Home                |
| `/harfen`         | Harp overview       |
| `/harfen/fiona`   | Fiona model         |
| `/harfen/wyda`    | Wyda model          |
| `/harfen/isabeau` | Isabeau model       |
| `/leihharfen`     | Harp rental         |
| `/zubehoer`       | Accessories         |
| `/werkstatt`      | Workshop            |
| `/kontakt`        | Contact / Impressum |

All routes are mirrored under `/en/` for the English version.

## i18n

Translations live in `src/i18n/de.json` and `src/i18n/en.json`. The `useTranslations(lang)` helper in `src/i18n/utils.ts` resolves dot-notation keys (e.g. `t("navigation.harfen")`).

The language switcher in the header links between the German and English versions of the current page. On 404 pages it links to the respective 404 page.

## Linting & formatting

```shell
pnpm lint       # ESLint
pnpm prettify   # Prettier check
pnpm test       # stylelint + prettier + eslint
```
