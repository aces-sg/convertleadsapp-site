# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BIM & CAD consultancy services platform (Bimeco) built with Gatsby 5, React 18, TypeScript, and AWS Amplify. The site is content-driven using YAML files and generates pages dynamically at build time.

**Tech Stack:** Gatsby (SSG), React 18, TypeScript, AWS Amplify (auth/API/storage), Tailwind CSS, GraphQL

**Node Version:** >=18
**Package Manager:** Yarn (required)

## Development Commands

```bash
yarn dev              # Start dev server (localhost:8000)
yarn build            # Production build
yarn serve            # Serve production build locally
yarn clean            # Clear Gatsby cache (use when data changes)
yarn test             # Run Cypress E2E tests
yarn format           # Format code with Prettier
```

## Architecture Overview

### Gatsby Rendering & Layouts

- **SSG (Static Site Generation):** All pages pre-rendered at build time
- **Layout System:** Pages import layouts directly (no global layout wrapper)
  - `Layout.js` - Default (Header + Footer)
  - `AuthLayout.js` - Auth pages (minimal chrome)
  - `ApplyLayout.tsx` - Application forms
  - `BlankLayout.tsx` - Minimal wrapper
- **CRITICAL:** `gatsby-browser.js` and `gatsby-ssr.js` must stay in sync (wrapRootElement/wrapPageElement)

### Dynamic Page Generation

Pages are generated at build time from YAML files in `gatsby-node.js`:

1. **BTO Pages:** `/interior/bto/{shortcode}` from `estates.yaml` → `btoTemplate.tsx`
2. **Software Pages:** `/software/{yamlId}` from `software.yaml` → `softwareTemplate.tsx`
3. **Service Pages:** `/services/{slug}` from `services.yaml` → `serviceTemplate.tsx`
4. **Portfolio Pages:** `/portfolio/{profileSlug}` from `portfolio.yaml` → `portfolioTemplate.tsx`
5. **Career Pages:** `/career/{jobId}` from `careers.yaml` → `careerTemplate.tsx`

**Important:** Run `yarn clean` after modifying YAML content files to regenerate pages.

### State Management

Global state uses Context API with reducer pattern (`GlobalContextProvider`):

- User authentication state
- Modal visibility (layer, contactLayer)
- Business data (opportunities)
- Admin panel state
- Syncs to localStorage

Access via:

```javascript
import {
  GlobalStateContext,
  GlobalDispatchContext,
} from "context/GlobalContextProvider";
```

### Path Aliases

Configured in both `gatsby-node.js` (webpack) and `tsconfig.json`:

```javascript
components/* → src/components/*
assets/*     → src/assets/*
~context     → src/context
~layouts     → src/layouts
```

### AWS Amplify Integration

- **Authentication:** Cognito (user/partner login)
- **API:** GraphQL API via Amplify
- **Storage:** S3 for file uploads
- **Config:** `src/aws-exports.js` (auto-generated, don't edit manually)
- **Models:** DataStore models in `src/models/`

### Styling Architecture

**Three styling systems coexist (prefer Tailwind for new work):**

1. **Tailwind CSS** - Primary (utility classes)
   - Custom brand color: `#FBDA05` (yellow primary)
   - Preflight disabled (to avoid Grommet conflicts)
   - Config: `tailwind.config.js`
2. **Styled Components** - Legacy components
3. **SCSS** - Minimal usage

### Content Architecture

Services and products defined in YAML, queried via GraphQL:

- `src/content/services.yaml` - Service definitions (32KB)
- `src/content/software.yaml` - Software products
- `src/content/estates.yaml` - BTO estates data
- `src/content/portfolio.yaml` - Team member portfolios (**validated at build time**)
- `src/content/tools.yaml` - Tools/calculators
- `src/content/careers.yaml` - Job postings

Rich content structure includes: benefits, processes, FAQs, CTAs, portfolios.

**⚠️ Portfolio entries are validated:** See "Updating Portfolio Data" section for validation rules.

### SEO Strategy

- `<SEO />` component in page `<Head>` export
- Extensive JSON-LD structured data schemas (LocalBusiness, Services, Website)
- Meta tags for OG and Twitter cards
- Auto-generated sitemap via `gatsby-plugin-sitemap`

## Important Patterns

### Page Structure

```tsx
const PageName = () => {
  return (
    <Layout pathname={location.pathname}>{/* page content */}</Layout>
  );
};

export default PageName;

export const Head = ({ location }) => (
  <SEO
    title="Page Title"
    description="..."
    pathname={location.pathname}
  />
);
```

### GraphQL Queries

```javascript
// Page queries
export const query = graphql`
  query ServiceQuery($slug: String!) {
    servicesYaml(slug: { eq: $slug }) {
      title
      description
    }
  }
`;

// Static queries
const data = useStaticQuery(graphql`
  query HeaderQuery {
    allServicesYaml {
      nodes {
        title
        slug
      }
    }
  }
`);
```

### Modal Pattern

Modals managed via global context:

```javascript
dispatch({
  type: "TOGGLE_CONTACT",
  payload: { show: true, message: "..." },
});
```

Modal components rendered in `gatsby-browser.js` wrapPageElement.

### Authentication

```javascript
import { isBrowser } from "hooks/auth";
import { Auth } from "aws-amplify";

// Check if user is authenticated
const user = await Auth.currentAuthenticatedUser();
```

## Build Process

1. YAML files transformed to GraphQL nodes
2. Dynamic pages generated from templates
3. GraphQL queries resolved
4. Images optimized (Sharp, WebP)
5. Webpack bundles JS/TS/CSS
6. Tailwind compiles utility classes
7. Pages pre-rendered to static HTML
8. Output: `/public` directory

**Deployment:** AWS Amplify Hosting, branch: `test`, domain: www.bim.com.sg

## Code Conventions

- **Mixed JS/TS codebase:** New files should use TypeScript (`.tsx`)
- **Component naming:** PascalCase, default exports
- **Prettier:** 70 char line width (enforced)
- **Imports:** Use path aliases (`components/Layout` not `../components/Layout`)

## Common Workflows

### Adding a New Service

1. Edit `src/content/services.yaml`
2. Add images to `src/assets/images/`
3. Run `yarn clean && yarn dev`
4. Page auto-generated at `/services/{slug}`

### Creating a New Page

1. Create `src/pages/pagename.tsx`
2. Import and use Layout component
3. Export `Head` with SEO component
4. Auto-routed at `/pagename`

### Modifying Global State

1. Add action type to `src/context/reducer.tsx`
2. Update interface in `src/context/interfaces.tsx`
3. Dispatch: `dispatch({ type: "ACTION", payload: {...} })`

### Updating Portfolio Data

**CRITICAL:** Portfolio entries have strict runtime validation that will **FAIL the build** if invalid values are used.

#### Portfolio Validation System

The portfolio system enforces valid values through a single source of truth:

**📄 `src/constants/portfolio.js`** - Defines all valid values for:
- `VALID_SOFTWARE_TOOLS` - Software/tools (28 items)
- `VALID_DISCIPLINES` - Discipline badges (6 items)
- `VALID_CATEGORIES` - Project categories (4 items: road, rail, airport, plant)

#### When Editing `src/content/portfolio.yaml`

**BEFORE updating portfolio entries:**
1. **Check** `src/constants/portfolio.js` for valid values
2. **Skills field** must contain ONLY comma-separated software from `VALID_SOFTWARE_TOOLS`
3. **Badges field** must use values from `VALID_DISCIPLINES`
4. **Categories field** must use values from `VALID_CATEGORIES`

**Example of valid entry:**
```yaml
- id: 601
  projectTitle: Sample Project
  role: BIM Coordinator
  skills: Revit, AutoCAD, Navisworks  # ✅ All in VALID_SOFTWARE_TOOLS
  badges:
    - Structure  # ✅ In VALID_DISCIPLINES
  categories:
    - rail  # ✅ In VALID_CATEGORIES
```

**Example of INVALID entry (will fail build):**
```yaml
skills: Revit, Project Management, BIM Coordination  # ❌ Last 2 not in constants
badges:
  - Engineering  # ❌ Not in VALID_DISCIPLINES
```

#### Validation Behavior

- **Runtime:** Validates during `gatsby-node.js` `onCreateNode` hook
- **Build failure:** Shows clear error with profile, project ID, invalid values, and list of valid options
- **TypeScript:** Types auto-generated from constants using `(typeof ARRAY)[number]` pattern
- **Files affected:**
  - `src/constants/portfolio.js` - Single source of truth
  - `src/types/portfolio.ts` - TypeScript types (auto-generated from constants)
  - `gatsby-node.js` - Validation logic

**To add new valid values:** Update `src/constants/portfolio.js` only (types update automatically)

## Critical Notes

- **SSR disabled in dev:** `DEV_SSR: false` in gatsby-config
- **Trailing slashes:** Never (configured in gatsby-config)
- **Environment vars:** Not committed, set in Amplify Console
- **Gatsby cache:** Run `yarn clean` if data changes aren't reflected
- **Browser checks:** Use `isBrowser` before accessing window/localStorage
- **Image optimization:** Use `GatsbyImage` component for images

## Project Structure (Key Directories)

```
src/
├── components/        # 50+ reusable UI components
├── pages/            # Route-based pages
├── templates/        # Dynamic page templates
├── content/          # YAML data files
├── constants/        # Validation constants (portfolio.js - single source of truth)
├── context/          # Global state management
├── hooks/            # Custom React hooks
├── seo/              # SEO schemas and utilities
├── types/            # TypeScript type definitions
├── graphql/          # GraphQL queries/mutations
├── models/           # Amplify DataStore models
└── assets/
    ├── images/
    │   ├── logos/     # Partner & certification logos (Bentley, Autodesk, bizSAFE)
    │   ├── profiles/  # Team member profile photos
    │   └── footer/    # Footer images
    ├── svgs/          # SVG assets
    └── stylesheets/   # Global styles
```

## Asset Organization

### Logos (`src/assets/images/logos/`)
Partner and certification logos for use across the site:
- `bentley-partner-bimeco.png` - Bentley Systems Gold Partner
- `bizsafe-bimeco.png` - bizSAFE Level 3 certification
- `stas-registry.png` - Security Trustmark for Adoption Scheme registry
- `iso-9001-bimeco.png` - ISO 9001:2015 quality management certification

Import with: `import logo from "assets/images/logos/bentley-partner-bimeco.png"`

### Profile Images (`src/assets/images/profiles/`)
Team member headshots for About page and team sections. Use descriptive filenames like `firstname-lastname.jpg`.

Import with: `import photo from "assets/images/profiles/ivan.jpg"`
