# Pokémon Explorer

A responsive Pokémon Explorer built with **Next.js** and the **PokéAPI**. Browse all 151 original Kanto Pokémon, search by name, and open any Pokémon to see its image, types, abilities, and base stats.

## ✨ Key Features

- Homepage listing all 151 Pokémon with live search-by-name
- Dynamic detail page per Pokémon showing image, types, abilities, height, weight, and base stats
- Light/dark mode toggle with preference saved across visits
- Server-side data fetching from PokéAPI with caching for fast loads
- Fully responsive layout (mobile, tablet, desktop)

## 🚀 Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [PokéAPI](https://pokeapi.co/) as the data source

## 📂 Project Structure

```
├── app/
│   ├── page.tsx              # Homepage — fetches Pokémon list
│   ├── layout.tsx            # Root layout, metadata, theme init
│   ├── icon.svg               # App icon / favicon
│   └── pokemon/[name]/
│       └── page.tsx           # Pokémon detail page (dynamic route)
├── components/
│   └── pokemon-explorer.tsx   # Main homepage UI (hero, starters, collection grid, search)
├── public/                    # Static assets
└── package.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/Amankr2706/Pokemon-Explorer
   cd Pokemon-Explorer
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Run the development server

   ```bash
   npm run dev
   ```

4. Open at (http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Data Source

All Pokémon data (list, images, types, abilities, stats) is fetched live from the [PokéAPI](https://pokeapi.co/), a free public REST API — no API key required.

## Notes

- Built as an assignment demonstrating Next.js data fetching, dynamic routing, and responsive UI design.
