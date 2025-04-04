# Royal Wines & Drinks - Webshop Redesign

Dit project is een herontwerp van de website voor **Royal Wines & Drinks**, gebouwd met **Vue 3**, **TypeScript** en **Vite**. De website is gericht op horecaondernemers in Noord-Nederland en biedt productoverzicht, filters, zoeken en detailpagina's voor wijnen, overige dranken en kerstpakketten.

## Tech Stack

- **Vue 3** + **TypeScript**
- **Vite** (development tooling)
- **Vue Router**
- **Pinia** (optioneel voor state management)
- **SCSS / CSS**
- Dummy data (kan worden gekoppeld aan een backend)

## Functionaliteiten

- Responsive design (desktop & mobiel)
- Digitale toegankelijkheid (semantische HTML)
- Productoverzicht met filters & sortering
- Dynamische productdetailpagina’s
- Zoekfunctionaliteit op titel
- Kerstpakketten met eigen weergave en flipcard/overlay
- Aanbiedingenpagina met staffelkorting
- Herbruikbare componenten zoals `ProductCard`, `ProductsHeader`, `FilterSidebar`

## Aanbevolen IDE Setup

- [Visual Studio Code](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (i.p.v. Vetur)

## Installatie

```bash
npm install
```

# Starten in development (met hot-reload):

```bash
npm run dev
```

# Build voor productie:
```bash
npm run build
```

## Directory structuur (belangrijkste mappen):
```bash
src/
│
├── assets/              # Afbeeldingen en stijlen
├── components/          # Herbruikbare UI-componenten
├── data/                # Dummy productdata (wijn, overig, kerst)
├── views/               # Pagina-componenten (Home, Wijn, Overig, etc.)
├── router/              # Vue Router config
├── App.vue              # Root component
└── main.ts              # Entry point
```

## Belangrijk:
- De routing naar ProductDetailView.vue werkt op basis van de `title` van het product.
- Alle productdata staat tijdelijk in `dummyProducts.ts`.
- Flipkaart- en overlayfunctionaliteit zijn geoptimaliseerd voor kerstpakketten.