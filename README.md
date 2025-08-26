# Vite + React + TypeScript Starter (with Routing + React Query)

This branch extends the base **Vite + React + TypeScript** starter with:

- **React Router** for client-side navigation
- **React Query** for data fetching & caching
- **Strict TypeScript** configuration
- **ESLint + Prettier** with pre-commit hooks
- **Path aliases (`@/`)** for cleaner imports

## Requirements

- Node **20+**

## Quick Start

1. **Create a new repository from this template**
   - Click **Use this template** on [this repository](../../)
   - In the “Repository template” dropdown, select **with-routing-query**.

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
│  ├─ main.tsx        # Entry point: wraps Providers + Router
│  ├─ router.tsx      # React Router routes (Home, About)
│  └─ providers.tsx   # React Query provider setup
├─ features/
│  └─ examples/
│     └─ Todos.tsx    # Example data fetching component
├─ pages/
│  ├─ Home.tsx
│  └─ About.tsx
├─ styles/
│  └─ index.css
└─ vite-env.d.ts
```

## Key Libraries

- [React Router](https://reactrouter.com/) for client-side navigation
- [TanStack React Query](https://tanstack.com/query/latest) for data fetching and caching
- [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) for linting and formatting

## Next Steps

- Add new pages under `src/pages`
- Update or add routes in `src/app/router.tsx`
- Use React Query hooks (`useQuery`, `useMutation`) for API integration
