# Agent Blueprint: National Parks Explorer

## Overview
This document serves as a guide for future AI agents working on the National Parks Explorer project. It outlines the architectural decisions, coding standards, and workflows to ensure consistency and quality.

## Project DNA
- **Mission**: To be the world's #1 platform for planning and exploring national parks, with a niche focus on bird photography and wildlife.
- **Aesthetic**: Premium, immersive, nature-inspired. Avoid generic "Bootstrap" or "Tailwind" looks unless heavily customized. Use CSS variables for theming.
- **Tech Stack**: Next.js (App Router), TypeScript, Vanilla CSS (Modules).

## Directory Structure
```
/app            # Next.js App Router pages
  /parks        # Park detail routes
  /search       # Search functionality
  /api          # (Future) Backend API routes
/components     # Reusable UI components
  /ui           # Basic UI elements (Buttons, Cards)
  /features     # Feature-specific components (WildlifeList, ParkHero)
/lib            # Utilities and Data Access
  data.ts       # Mock data (replace with DB calls in future)
  types.ts      # TypeScript definitions
/styles         # Global and module CSS
```

## Coding Standards
1. **TypeScript Strictness**: No `any`. Define interfaces for all data models.
2. **Component Design**:
   - Use Functional Components.
   - Props should be typed explicitly.
   - Keep components small and focused.
3. **Styling**:
   - Use CSS Modules (`*.module.css`) for component-level styling.
   - Use `globals.css` for variables (`--primary-color`, `--spacing-md`).
   - Ensure responsiveness (Mobile First).
4. **Data Fetching**:
   - In the MVP, use `lib/data.ts`.
   - Future: Replace `lib/data.ts` functions with database queries (Prisma/Postgres recommended).

## Future Expansion Guide
### Adding a New Feature
1. **Define the Model**: Update `lib/types.ts`.
2. **Mock the Data**: Add entries to `lib/data.ts`.
3. **Create Components**: Build UI in `/components`.
4. **Create Route**: Add page in `/app`.

### Transitioning to Real Backend
1. Setup a database (e.g., Supabase/Postgres).
2. Replace `lib/data.ts` with an ORM client (e.g., Prisma).
3. Update `app` pages to fetch from the DB (Server Components).

## Key Features to Maintain
- **Bird Photography Focus**: Always prioritize wildlife data structure (species, rarity, best time to see).
- **Accommodation**: Keep accommodation linked to specific parks.

## Agent Workflow
- **Read Context**: Always read `implementation_plan.md` and `task.md` first.
- **Update Docs**: If you change the architecture, update this blueprint.
- **Verify**: Run `npm run build` before finishing any task.
