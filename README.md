# Rauw Collectief Website

Een moderne Next.js website voor Rauw Collectief - handgemaakte meubels en tafels.

## 🚀 Features

- **Homepage** met typewriter effect en pixelated afbeeldingen
- **Over Ons** pagina met teamleden en bedrijfsinformatie
- **Ontwerp Tafel** pagina met interactieve tafelconfigurator
- **Tafels** pagina met productoverzicht
- **FAQ** pagina met veelgestelde vragen
- **Contact** pagina met formulier en openingstijden
- Responsive navbar met mega-menu
- Smooth page transitions
- Custom componenten (TypewriterTitle, PixelImage, ScrollText, VerkoopBlock)

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Fonts:** Custom fonts (SupremeLL)
- **Animaties:** Framer Motion

## 📦 Getting Started

Installeer dependencies:

```bash
npm install
```

Start de development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

## 📁 Project Structuur

```
src/
├── app/
│   ├── contact/          # Contact pagina
│   ├── faq/              # FAQ pagina
│   ├── over-ons/         # Over Ons pagina
│   ├── ontwerp-tafel/    # Ontwerp Tafel configurator
│   ├── tafels/           # Tafels pagina
│   └── page.tsx          # Homepage
├── components/
│   ├── ui/               # Basis UI componenten
│   ├── Navbar.tsx        # Hoofdnavigatie
│   ├── Footer.tsx        # Footer component
│   ├── SideMenu.tsx      # Sidebar menu
│   └── ...               # Andere custom componenten
└── lib/
    └── utils.ts          # Utility functies
```

## 🎨 Belangrijke Componenten

- **Navbar** - Sticky navigatiebalk met dropdown mega-menu
- **TypewriterTitle** - Animated typewriter effect
- **PixelImage** - Afbeeldingen met pixelated hover effect en grayscale animatie
- **VerkoopBlock** - Interactieve blokken met backdrop blur en glasmorfisme
- **ScrollText** - Grote scrollende tekst animatie
- **PageTransition** - Smooth page transitions tussen routes

## 🔗 Navigatie Links

Belangrijke navigatie routes:
- **Over ons** → `/over-ons` (Navbar → Leren → Over ons)
- **Ontwerp Tafel** → `/ontwerp-tafel` (Navbar → Tafel ontwerpen)
- **Contact** → `/contact`
- **FAQ** → `/faq`

## 📝 Recent Updates

- ✅ Ontwerp Tafel pagina toegevoegd met interactieve configurator
- ✅ VerkoopBlock component met glasmorfisme styling
- ✅ Navigatie naar /ontwerp-tafel in alle navbar componenten
- ✅ Pixel animaties toegevoegd aan productblokken
- ✅ Over ons pagina toegevoegd met teamleden
- ✅ Navigation verbeteringen in alle navbar componenten

## 🚢 Deployment

Deploy eenvoudig op [Vercel](https://vercel.com):

```bash
vercel --prod
```

Of gebruik de Vercel GitHub integratie voor automatische deployments.

## 📄 License

© 2025 Rauw Collectief. All rights reserved.
