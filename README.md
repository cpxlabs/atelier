<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# The Atelier

A research workspace app for managing academic papers, notebooks, and projects — built with **React Native**, **Expo**, and **TypeScript**.

<div align="center">
<img width="360" alt="App Screenshot" src="https://github.com/user-attachments/assets/add40c85-c060-4410-b974-3f6e08a5d8a2" />
</div>

## Features

- **Your Atelier** — Quick-access category grid for Reading, Notes, Projects, and custom spaces
- **Recent Library** — Horizontally scrollable cards for recently read papers (PDF, PHD, etc.) with metadata badges
- **Active Notebooks** — A live list of notebooks with word counts and last-modified timestamps
- **Bottom Navigation** — Tab bar with Library, Reader, Bench, Notes, and a floating "+" action button

## Architecture

```
App.tsx                          ← Entry point, composes layout
src/
├── components/
│   ├── Header.tsx               ← Top bar: hamburger, title, language, settings
│   ├── CategoryGrid.tsx         ← 2×2 "Your Atelier" category cards
│   ├── RecentLibrary.tsx        ← Horizontal paper card carousel
│   ├── ActiveNotebooks.tsx      ← Notebook list items
│   └── BottomNav.tsx            ← Tab bar with FAB
├── styles.ts                    ← Centralized StyleSheet & color tokens
└── types.ts                     ← TypeScript interfaces
```

| Layer | Technology |
|-------|-----------|
| Framework | React Native 0.76 + Expo 55 |
| Language | TypeScript 5.8 |
| Icons | lucide-react-native |
| Web target | Metro bundler → `expo export --platform web` |
| Deployment | Vercel (static) |

## Run Locally

**Prerequisites:** Node.js ≥ 18

```bash
# 1. Install dependencies
npm install

# 2. (Optional) Set the GEMINI_API_KEY in .env.local for AI features
cp .env.example .env.local

# 3. Start the development server
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Expo dev server on port 3000 |
| `npm run build` | Export static web build to `dist/` |
| `npm run lint` | Type-check with TypeScript (no emit) |
| `npm run clean` | Remove `dist/` and `.expo/` caches |

## License

MIT — see [LICENSE](./LICENSE) for details.
