# The Atelier — Screen Documentation

> A comprehensive visual reference for every screen in The Atelier, documenting layout, components, and design-system usage to ensure consistency across the application.

---

## Table of Contents

1. [Design System Overview](#design-system-overview)
2. [Library Screen (Home)](#1-library-screen-home)
3. [Reader Screen](#2-reader-screen)
4. [Bench Screen](#3-bench-screen)
5. [Notes Screen](#4-notes-screen)
6. [Profile Screen](#5-profile-screen)
7. [Theme Screen (Settings)](#6-theme-screen-settings)
8. [Shared Components](#shared-components)

---

## Design System Overview

All styles are centralized in `src/styles.ts`. Components reference the shared `styles` and `colors` objects — no ad-hoc inline styles.

### Color Tokens

| Token          | Default (Scholar White) | Usage                                    |
|----------------|------------------------|------------------------------------------|
| `background`   | `#f5f5f0`              | Page / screen background                 |
| `surface`      | `#ffffff`              | Card backgrounds, elevated panels        |
| `surfaceLight` | `#f0efe9`              | Subtle card fills, avatar placeholder    |
| `primary`      | `#1a1a1a`              | Primary body text                        |
| `secondary`    | `#6b6b6b`              | Descriptive / supporting text            |
| `accent`       | `#5b6abf`              | Interactive highlights, links, toggles   |
| `accentLight`  | `#e8e6f0`              | Light accent card fills                  |
| `teal`         | `#6b9e9e`              | Alternate accent (images, block icons)   |
| `muted`        | `#999999`              | Disabled text, tertiary labels           |
| `border`       | `#e8e8e3`              | Dividers, input borders, card strokes    |
| `white`        | `#ffffff`              | Absolute white (FAB icon, badge text)    |
| `black`        | `#1a1a1a`              | Absolute black (headings, nav active)    |

> Themes override **all** tokens at once via `src/themes.ts`. See [Theme Screen](#6-theme-screen-settings) for the full palette catalog.

### Typography Scale

| Style               | Size | Weight | Use Case                         |
|----------------------|------|--------|----------------------------------|
| Screen heading       | 32px | 800    | ThemeScreen, NotesScreen, Bench  |
| Section title        | 22px | 700    | "Your Atelier", "Recent Library" |
| Card title           | 18px | 700    | Profile cards                    |
| Body / reader text   | 17px | 400    | Reader paragraph, Bench source   |
| Card item title      | 15–16px | 600–700 | Paper titles, notebook names  |
| Supporting text      | 13–14px | 400–500 | Descriptions, metadata         |
| Overline / label     | 11px | 700    | Section labels, badge text       |
| Nav label            | 10px | 600    | Bottom nav tab labels            |

### Spacing & Radii

| Pattern               | Value  |
|------------------------|--------|
| Screen horizontal pad  | 20px   |
| Section top margin     | 24px   |
| Card border radius     | 14–16px |
| Icon container radius  | 10–12px |
| Button border radius   | 10px   |
| Small badge radius     | 4–6px  |
| Shadow elevation       | 1–6    |

---

## 1. Library Screen (Home)

**Tab:** Library · **File:** `App.tsx` (default content)

![Library Screen](https://github.com/user-attachments/assets/0c2a78aa-2e38-4e8e-9c9d-c7a1a8ccc032)

### Layout

```
┌─────────────────────────────────┐
│  Header (logo + lang + gear)    │
├─────────────────────────────────┤
│  CategoryGrid — 2 × 2 cards    │
│  ┌──────┐  ┌──────┐            │
│  │Reading│  │Notes │            │
│  └──────┘  └──────┘            │
│  ┌──────┐  ┌──────┐            │
│  │Projects│ │New   │            │
│  └──────┘  └──────┘            │
├─────────────────────────────────┤
│  RecentLibrary — horizontal     │
│  scroll of PaperCards           │
├─────────────────────────────────┤
│  ActiveNotebooks — vertical     │
│  list of notebook rows          │
├─────────────────────────────────┤
│  BottomNav                      │
└─────────────────────────────────┘
```

### Components

| Component          | File                        | Description                                    |
|--------------------|-----------------------------|------------------------------------------------|
| `Header`           | `src/components/Header.tsx`  | Hamburger menu, "The Atelier" logo, language pill, settings gear |
| `CategoryGrid`     | `src/components/CategoryGrid.tsx` | 2×2 grid of category cards with icons       |
| `RecentLibrary`    | `src/components/RecentLibrary.tsx` | Horizontal scrollable paper cards          |
| `ActiveNotebooks`  | `src/components/ActiveNotebooks.tsx` | Vertical list with colored dots, word counts |
| `BottomNav`        | `src/components/BottomNav.tsx` | 5-tab navigation bar                        |

### Design Notes

- Category cards use `surfaceLight` and `accentLight` background fills for visual variety
- Paper cards have colored `bgColor` image areas (`#6b9e9e`, `#8b7ea0`, `#7a8e6e`)
- Notebook rows use a colored dot (`#7c6dab`) as a visual anchor
- The "View Library" link uses `accent` color with an arrow icon

---

## 2. Reader Screen

**Tab:** Reader · **File:** `src/components/ReaderScreen.tsx`

![Reader Screen](https://github.com/user-attachments/assets/bb0a96c0-7325-49f0-a1c5-3d85fdd242e1)

### Layout

```
┌─────────────────────────────────┐
│  Header (reader variant)        │
│  logo + history + share + gear  │
├─────────────────────────────────┤
│  Category badge  ·  timestamp   │
│  ┌─────────────────────────┐    │
│  │  Large Title (36px/800) │    │
│  └─────────────────────────┘    │
│  │ Blockquote (accent left  │   │
│  │ border + italic text)    │   │
│  Body paragraph with            │
│  [[wiki-link]] inline           │
│  ┌─────────────────────────┐    │
│  │  Image + caption         │   │
│  └─────────────────────────┘    │
│  H2 heading                     │
│  Body paragraph with **bold**   │
│  ┌─────────────────────────┐    │
│  │  Code block (dark bg)    │   │
│  └─────────────────────────┘    │
│  Blocks picker panel            │
├─────────────────────────────────┤
│  BottomNav                      │
└─────────────────────────────────┘
```

### Components

| Component         | Description                                                     |
|-------------------|-----------------------------------------------------------------|
| `CategoryBadge`   | Green badge (`#d4edda` bg / `#1a7a4c` text) + "Last edited" timestamp |
| `Epigraph`        | Blockquote with `accent` left border and italic serif text      |
| `BodyParagraph1`  | Body text with inline `[[wiki-link]]` styled as `accent` underline |
| `FigureImage`     | Image with `surfaceLight` background + italic caption           |
| `BodyParagraph2`  | Body text with inline `**bold**`                                |
| `CodeBlock`       | Dark (`#1e1e2e`) code panel with filename header + copy button  |
| `BlocksPanel`     | Card listing available block types (Heading, List, Image)       |

### Design Notes

- Header switches to "reader" variant: replaces language pill with History + Share icons
- Title uses the largest typography in the app (36px, weight 800, -0.8 letter-spacing)
- Code block uses a dark theme (`#1e1e2e` background, `#e0def4` text) regardless of app theme
- Wiki-links are `accent` colored with underline decoration

---

## 3. Bench Screen

**Tab:** Bench · **File:** `src/components/BenchScreen.tsx`

![Bench Screen](https://github.com/user-attachments/assets/e82cb70f-ac70-4772-b383-91943e62ac0f)

### Layout

```
┌─────────────────────────────────┐
│  Header (default variant)       │
├─────────────────────────────────┤
│  Source Panel (scrollable)      │
│  ┌─────────────────────────┐    │
│  │ Badge: SOURCE MATERIAL  │    │
│  │ Page 142 of 312         │    │
│  │ Title (32px/800)        │    │
│  │ Epigraph (italic)       │    │
│  │ Body paragraphs         │    │
│  └─────────────────────────┘    │
├─────────────────────────────────┤
│  Reflections Panel (fixed h)    │
│  ┌─────────────────────────┐    │
│  │ REFLECTIONS label        │   │
│  │ Toolbar: italic/list/link│   │
│  │ TextInput (multiline)    │   │
│  └─────────────────────────┘    │
├─────────────────────────────────┤
│  BottomNav                      │
└─────────────────────────────────┘
```

### Components

| Component          | Description                                                     |
|--------------------|-----------------------------------------------------------------|
| `SourcePanel`      | Scrollable reading area with badge, title, epigraph, body text  |
| `ReflectionsPanel` | Fixed-height (300px) note-taking area with toolbar + TextInput  |

### Design Notes

- Split-pane layout: source material above, reflections below
- Reflections panel has a `accent` left border (4px) for visual distinction
- Reflections panel has a fixed height of 300px with `elevation: 5` shadow
- Toolbar icons (Italic, List, Link) use `secondary` color
- TextInput uses `primary` color at 18px for comfortable note-taking

---

## 4. Notes Screen

**Tab:** Notes · **File:** `src/components/NotesScreen.tsx`

![Notes Screen](https://github.com/user-attachments/assets/c9036a24-4686-472f-87a5-646df07f560f)

### Layout

```
┌─────────────────────────────────┐
│  Header (default variant)       │
├─────────────────────────────────┤
│  Notes heading + "New" button   │
│  "42 notation files" subtitle   │
│                                 │
│  PINNED section label           │
│  ┌─────────────────────────┐    │
│  │ NoteCard (dot + title   │    │
│  │   + preview + meta)     │    │
│  └─────────────────────────┘    │
│  ┌─────────────────────────┐    │
│  │ NoteCard                │    │
│  └─────────────────────────┘    │
│                                 │
│  ALL NOTES label + "View All"   │
│  ┌─────────────────────────┐    │
│  │ NoteCard                │    │
│  └─────────────────────────┘    │
│  ... more cards ...             │
├─────────────────────────────────┤
│  BottomNav                      │
└─────────────────────────────────┘
```

### Components

| Component   | Description                                                     |
|-------------|-----------------------------------------------------------------|
| Header row  | "Notes" heading (32px/800) + subtitle + black "New" button      |
| `NoteCard`  | White card with accent dot, title, 2-line preview, timestamp    |

### Design Notes

- Heading follows the same 32px/800 weight pattern as Theme and Bench screens
- "New" button uses `black` background with white text (matches design system CTA pattern)
- Section labels use the standard 11px/700 uppercase overline style
- Note cards follow the same card pattern as notebook items (white bg, 14px radius, subtle shadow)
- Color dots use `accent`, `#6b9e9e`, and `#7c6dab` — the same palette as other screens

---

## 5. Profile Screen

**Tab:** Profile · **File:** `src/components/ProfileScreen.tsx`

![Profile Screen](https://github.com/user-attachments/assets/85f78e08-deeb-4d83-b070-85097a6c76bb)

### Layout

```
┌─────────────────────────────────┐
│  Header (default variant)       │
├─────────────────────────────────┤
│  Avatar (120px circle + edit)   │
│  Name (26px/700)                │
│  Title (italic)                 │
│  Badge row: Pro | Verified      │
│                                 │
│  ┌──── Account Credentials ──┐  │
│  │ Email (locked)             │  │
│  │ Password (change link)     │  │
│  └────────────────────────────┘  │
│  ┌──── Environment ──────────┐  │
│  │ Cloud Sync (toggle)        │  │
│  │ Offline Mode (toggle)      │  │
│  │ Default PDF Viewer (select)│  │
│  └────────────────────────────┘  │
│  ┌──── Data Management ──────┐  │
│  │ Storage info + buttons     │  │
│  └────────────────────────────┘  │
│  ┌──── Deactivate (red) ─────┐  │
│  │ Warning + action link      │  │
│  └────────────────────────────┘  │
├─────────────────────────────────┤
│  BottomNav                      │
└─────────────────────────────────┘
```

### Components

| Component                | Description                                                 |
|--------------------------|-------------------------------------------------------------|
| `AvatarSection`          | 120px circular avatar with edit button overlay (`accent`)   |
| `UserInfoSection`        | Name, title, badge row                                      |
| `AccountCredentialsCard` | Email (read-only with lock icon) + password with change link|
| `EnvironmentCard`        | Cloud Sync / Offline Mode toggles + PDF viewer selector     |
| `DataManagementCard`     | Storage stats + Export / Clear Cache buttons                 |
| `DeactivateAccountCard`  | Red-tinted card (`#fdf2f2`) with deactivation action        |

### Design Notes

- All profile cards share the same `profileCard` style (white bg, 16px radius, 20px horizontal margin)
- Card titles pair an icon with 18px/700 weight text
- Toggle switches use the shared `Toggle` component (same as ThemeScreen)
- Badges use outline style with `black` or `accent` border colors
- Deactivate card uses a distinct red palette (`#fdf2f2` bg, `#c53030` text)
- Primary button uses `accent` bg; outline button uses `border` stroke

---

## 6. Theme Screen (Settings)

**Tab:** Library (via gear icon) · **File:** `src/components/ThemeScreen.tsx`

![Theme Screen](https://github.com/user-attachments/assets/828fbbc3-7542-4c17-9a8a-a56e069444b9)

### Layout

```
┌─────────────────────────────────┐
│  Header (default variant)       │
├─────────────────────────────────┤
│  "Choose your atelier" heading  │
│  Subtitle (italic)              │
│                                 │
│  LIGHT MODES label              │
│  ┌──────┐  ┌──────┐            │
│  │Theme │  │Theme │  (2-col)   │
│  └──────┘  └──────┘            │
│  ... more theme cards ...       │
│                                 │
│  DARK MODES label               │
│  ┌──────┐  ┌──────┐            │
│  │Theme │  │Theme │            │
│  └──────┘  └──────┘            │
│  ... more theme cards ...       │
│                                 │
│  ┌── Interface Dynamics ──────┐ │
│  │ Auto-Focus Mode (toggle)   │ │
│  │ Typography Scaling (slider)│ │
│  │ Academic Accents (toggle)  │ │
│  └────────────────────────────┘ │
├─────────────────────────────────┤
│  BottomNav                      │
└─────────────────────────────────┘
```

### Components

| Component               | Description                                                 |
|-------------------------|-------------------------------------------------------------|
| `ThemeCard`             | Preview card showing theme colors (dots + simulated lines)  |
| `InterfaceDynamicsPanel`| Toggle switches and typography slider                       |
| `Toggle`                | Reusable on/off switch (`accent` when active)               |
| `Slider`               | Custom track + thumb slider for typography scaling           |

### Design Notes

- Theme cards show a mini preview using the theme's own colors (background, border, preview dots)
- Selected theme card has a 2px `black` border + checkmark badge
- 5 light themes + 5 dark themes available (defined in `src/themes.ts`)
- Interface Dynamics card uses the same card pattern as profile cards
- Slider supports press-to-seek interaction via `locationX` calculation
- All theme/dynamics settings persist to `localStorage` via Zustand

---

## Shared Components

### Header (`src/components/Header.tsx`)

Two variants controlled by the `variant` prop:

| Variant   | Left Side                     | Right Side                         |
|-----------|-------------------------------|------------------------------------|
| `default` | Hamburger + "The Atelier"     | Language pill (EN ▾) + Settings    |
| `reader`  | Hamburger + "The Atelier"     | History + Share + Settings         |

### BottomNav (`src/components/BottomNav.tsx`)

| Tab      | Icon            | Screen Component   |
|----------|-----------------|-------------------|
| Library  | `BookOpen`      | Default (home)    |
| Reader   | `BookMarked`    | `ReaderScreen`    |
| Bench    | `FlaskConical`  | `BenchScreen`     |
| Notes    | `StickyNote`    | `NotesScreen`     |
| Profile  | `User`          | `ProfileScreen`   |

- Active tab uses `black` color; inactive uses `muted`
- Labels are 10px, uppercase, 0.5 letter-spacing
- All icons are 22px from `lucide-react-native`

### Toggle Switch (used in ThemeScreen + ProfileScreen)

- Track: 46×26px, `border` color (inactive) or `accent` (active)
- Thumb: 22×22px white circle with subtle shadow

---

## File Map

```
App.tsx                              ← Entry point, screen routing
src/
├── components/
│   ├── Header.tsx                   ← Top bar (2 variants)
│   ├── CategoryGrid.tsx             ← 2×2 category cards
│   ├── RecentLibrary.tsx            ← Horizontal paper carousel
│   ├── ActiveNotebooks.tsx          ← Notebook list
│   ├── BottomNav.tsx                ← Tab bar
│   ├── ReaderScreen.tsx             ← Document reader
│   ├── BenchScreen.tsx              ← Split-pane study bench
│   ├── NotesScreen.tsx              ← Notes list with pinned section
│   ├── ProfileScreen.tsx            ← User profile & settings
│   └── ThemeScreen.tsx              ← Theme picker & dynamics
├── hooks/
│   └── useTheme.ts                  ← Theme selection hook
├── store/
│   └── useConfigStore.ts            ← Zustand persisted config
├── styles.ts                        ← Centralized StyleSheet & tokens
├── themes.ts                        ← 10 theme definitions
└── types.ts                         ← TypeScript interfaces
```
