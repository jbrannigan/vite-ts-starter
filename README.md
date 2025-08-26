# Vite + React + TypeScript Starter (Minimal)

This branch provides a **minimal Vite + React + TypeScript** setup with:

- **Strict TypeScript** configuration
- **ESLint + Prettier** with pre-commit hooks
- **Path aliases (`@/`)** for cleaner imports

## Requirements

- Node **20+**

## Quick Start

1. **Create a new repository from this template**
   - Click **Use this template** on [this repository](../../)
   - Use the default **master** branch for a minimal setup.

2. **Clone and install dependencies**
   ```bash
   git clone https://github.com/YOUR-USERNAME/YOUR-NEW-APP.git
   cd YOUR-NEW-APP
   npm install
   npm run dev
   ```

## Project Structure

```
src/
├─ app/
│  └─ main.tsx        # Entry point
├─ assets/
│  └─ react.svg       # Example asset
├─ styles/
│  └─ index.css       # Global styles
└─ vite-env.d.ts      # Vite/TS type declarations
```

## Key Features

- [Vite](https://vitejs.dev/) for fast development and builds
- [React](https://react.dev/) with modern JSX transform
- [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) pre-configured
- [TypeScript](https://www.typescriptlang.org/) with strict settings

## Next Steps

- Start adding your own components under `src/`
- Add pages, features, or libraries as needed
- Switch to the `with-routing-query` branch if you need routing and data fetching out of the box
