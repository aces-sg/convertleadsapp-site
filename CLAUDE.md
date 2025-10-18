# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application using the App Router, built with TypeScript and Tailwind CSS v4. It's based on the `ts-nextjs-tailwind-starter` template by Theodorus Clarence, configured with comprehensive development tooling and best practices.

## Package Manager

**IMPORTANT**: This project uses **yarn** (evidenced by `yarn.lock`). The README mentions pnpm, but you should use yarn for this project:

```bash
yarn install
yarn dev
yarn build
```

## Common Commands

### Development

- `yarn dev` - Start development server on http://localhost:3000
- `yarn build` - Build for production
- `yarn start` - Start production server

### Code Quality

- `yarn lint` - Run ESLint
- `yarn lint:fix` - Auto-fix ESLint issues and format code
- `yarn lint:strict` - Run ESLint with zero warnings allowed
- `yarn typecheck` - Run TypeScript type checking (no emit, no incremental)
- `yarn format` - Format code with Prettier
- `yarn format:check` - Check code formatting

### Testing

- `yarn test` - Run all tests with Jest
- `yarn test:watch` - Run tests in watch mode

## Import Aliases

The project uses TypeScript path aliases configured in `tsconfig.json`:

- `@/*` - Maps to `./src/*` for application code
- `~/*` - Maps to `./public/*` for public assets

## Architecture

### Directory Structure

```
src/
├── app/              # Next.js App Router pages and layouts
│   ├── api/          # API routes
│   ├── components/   # Demo components page
│   ├── layout.tsx    # Root layout with metadata
│   ├── page.tsx      # Home page
│   ├── error.tsx     # Error boundary
│   └── not-found.tsx # 404 page
├── components/       # Reusable React components
│   ├── buttons/      # Button variants (Button, IconButton, TextButton)
│   ├── links/        # Link variants (ArrowLink, ButtonLink, IconLink, etc.)
│   ├── NextImage.tsx # Optimized image component
│   └── Skeleton.tsx  # Loading skeleton
├── lib/              # Utility functions and helpers
│   ├── utils.ts      # cn() function for Tailwind class merging
│   ├── helper.ts     # General helpers
│   ├── logger.ts     # Logging utilities
│   ├── og.ts         # Open Graph helper
│   └── env.ts        # Environment variable validation
├── constant/         # Application constants
│   ├── config.ts     # Site configuration (title, description, url)
│   └── env.ts        # Environment variable exports
├── styles/           # Global styles and Tailwind CSS
└── __tests__/        # Test files (mirror src structure)
```

### Key Patterns

1. **Styling**: Uses Tailwind CSS with the `cn()` utility (`src/lib/utils.ts`) for conditional class merging
2. **SVG Handling**: SVGs are imported as React components via `@svgr/webpack`. Use `import Logo from '@/svg/logo.svg'`
3. **Environment Variables**: Validated using Zod in `src/lib/env.ts`
4. **Configuration**: Site metadata in `src/constant/config.ts` - update this for project-specific details

## Commit Convention

This project enforces **Conventional Commits** via commitlint and Husky hooks.

### Allowed commit types:

- `feat` - New features
- `fix` - Bug fixes
- `docs` - Documentation changes
- `chore` - Maintenance tasks
- `style` - Code style changes (formatting, etc.)
- `refactor` - Code refactoring
- `ci` - CI/CD changes
- `test` - Test changes
- `perf` - Performance improvements
- `revert` - Revert previous commits

### Format:

```
type(optional-scope): description

[optional body]
```

Example: `feat(auth): add login functionality`

## Pre-commit Hooks

Husky and lint-staged run on commit:

- ESLint with `--max-warnings=0` on `.js, .jsx, .ts, .tsx`
- Prettier formatting on all supported files
- Commits will fail if linting/formatting fails

## Testing

- **Framework**: Jest with React Testing Library
- **Configuration**: `jest.config.js` with Next.js integration
- **Setup**: `jest.setup.js` for test environment configuration
- **Aliases**: Jest configured to support `@/` and `~/` imports
- Test files in `src/__tests__/` mirror the `src/` structure

## Important Notes

1. **Tailwind v4**: This project uses Tailwind CSS v4 (configured via PostCSS)
2. **React 19 & Next.js 15**: Uses latest stable versions
3. **!STARTERCONF comments**: Search for `!STARTERCONF` comments to find template-specific items that should be customized (titles, URLs, favicons, etc.)
4. **Site Configuration**: Update `src/constant/config.ts` with project-specific metadata
