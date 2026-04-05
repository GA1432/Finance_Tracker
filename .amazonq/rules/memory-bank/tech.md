# Finance Tracker - Technology Stack

## Languages
- **TypeScript 5.x** — used across both backend and frontend
- **CSS** — Tailwind CSS v4 via PostCSS

## Backend
| Technology | Version | Role |
|---|---|---|
| NestJS | ^11.0.1 | REST API framework |
| Prisma ORM | ^7.6.0 | Database access + migrations |
| @prisma/adapter-pg | ^7.6.0 | Native PostgreSQL driver adapter |
| pg | ^8.20.0 | PostgreSQL client |
| @nestjs/config | ^4.0.3 | Environment variable management |
| rxjs | ^7.8.1 | NestJS reactive primitives |
| dotenv | ^17.4.0 | .env loading for seed/config |

## Frontend
| Technology | Version | Role |
|---|---|---|
| Next.js | 16.2.2 | React framework (App Router) |
| React | 19.2.4 | UI library |
| Tailwind CSS | ^4 | Utility-first styling |
| shadcn/ui | ^4.1.2 | Component library (radix-ui based) |
| radix-ui | ^1.4.3 | Headless UI primitives |
| lucide-react | ^1.7.0 | Icon set |
| @hugeicons/react | ^1.1.6 | Extended icon set |
| clsx | ^2.1.1 | Conditional class names |
| tailwind-merge | ^3.5.0 | Merge Tailwind classes safely |
| class-variance-authority | ^0.7.1 | Component variant management |
| tw-animate-css | ^1.4.0 | Tailwind animation utilities |

## Database
- **PostgreSQL** — relational database
- Schema managed via Prisma migrations
- Generated client output: `backend/src/generated/prisma` (CJS module format)

## Testing (Backend)
- **Jest** ^30 with `ts-jest`
- **Supertest** ^7 for HTTP integration tests
- Test files: `*.spec.ts` co-located with source

## Development Commands

### Backend
```bash
cd backend
npm run start:dev      # Watch mode development server
npm run build          # Compile to dist/
npm run start:prod     # Run compiled production build
npm run test           # Run unit tests
npm run test:cov       # Run tests with coverage
npm run lint           # ESLint with auto-fix
npm run format         # Prettier format
npx prisma migrate dev # Run migrations
npx prisma db seed     # Seed database
```

### Frontend
```bash
cd frontend
npm run dev            # Next.js dev server
npm run build          # Production build
npm run start          # Start production server
npm run lint           # ESLint
```

## Configuration Files
- `backend/.env` — `DATABASE_URL` for Prisma
- `frontend/.env.local` — frontend environment variables
- `backend/prisma.config.ts` — Prisma config with pg adapter
- `backend/.prettierrc` — Prettier formatting rules
- `frontend/components.json` — shadcn/ui component configuration
- `backend/tsconfig.json` + `tsconfig.build.json` — TypeScript config
- `frontend/tsconfig.json` — TypeScript config with Next.js paths
