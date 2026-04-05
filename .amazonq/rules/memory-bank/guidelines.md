# Finance Tracker - Development Guidelines

## Code Quality Standards

### TypeScript
- Strict TypeScript throughout — no `any` unless unavoidable
- Use `import type` for type-only imports (e.g., `import type { Metadata } from "next"`)
- Prefer explicit return types on async service methods (e.g., `Promise<Expense>`, `Promise<Expense[]>`)
- Use `Readonly<{}>` for component prop types that should not be mutated

### Formatting
- Backend uses Prettier (configured via `backend/.prettierrc`) + ESLint
- Frontend uses ESLint with `eslint-config-next`
- Run `npm run format` (backend) before committing
- Indentation: 2 spaces (Prettier default)

---

## Backend Patterns (NestJS)

### Module Structure
Every domain follows the same three-file pattern:
```
feature/
├── feature.controller.ts   # HTTP layer only — no business logic
├── feature.service.ts       # All business logic and Prisma queries
└── feature.module.ts        # Wires controller + service + imports
```

### Controller Convention
- Decorate with `@Controller('resource-name')` (plural, kebab-case)
- Inject service via constructor with `private readonly`
- Use `ParseIntPipe` for numeric route params
- Keep handlers thin — delegate everything to the service

```typescript
@Controller('expenses')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Post()
  async create(@Body() createExpenseDto: Prisma.ExpenseCreateInput) {
    return this.expenseService.createExpense(createExpenseDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.expenseService.deleteExpense(id);
  }
}
```

### Service Convention
- Decorate with `@Injectable()`
- Inject `PrismaService` via constructor: `constructor(private prisma: PrismaService) {}`
- Use Prisma-generated types for input (e.g., `Prisma.ExpenseCreateInput`) and entity types for output
- Add inline comments for non-obvious query options (e.g., `orderBy: { date: 'desc' } // Newest first`)

```typescript
@Injectable()
export class ExpenseService {
  constructor(private prisma: PrismaService) {}

  async createExpense(data: Prisma.ExpenseCreateInput): Promise<Expense> {
    return this.prisma.expense.create({ data });
  }

  async getAllExpenses(): Promise<Expense[]> {
    return this.prisma.expense.findMany({ orderBy: { date: 'desc' } });
  }
}
```

### PrismaService Pattern
- Extends `PrismaClient` and implements `OnModuleInit` / `OnModuleDestroy`
- Validates `DATABASE_URL` at construction time — throws if missing
- Uses `@prisma/adapter-pg` (PrismaPg) for the native pg driver
- Explicitly calls `$connect()` on init and `$disconnect()` on destroy

```typescript
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) throw new Error('DATABASE_URL is not defined');
    super({ adapter: new PrismaPg({ connectionString }) });
  }
  async onModuleInit() { await this.$connect(); }
  async onModuleDestroy() { await this.$disconnect(); }
}
```

### Root Module
- `AppModule` imports `ConfigModule.forRoot()` first, then `PrismaModule`, then feature modules
- `PrismaModule` should be declared `@Global()` so `PrismaService` is available everywhere without re-importing

### Entry Point (main.ts)
- Import `dotenv/config` at the very top before any other imports
- Bootstrap with `NestFactory.create(AppModule)` and `app.listen(3000)`

```typescript
import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
```

### Prisma Schema Conventions
- Use `@@map("table_name")` to set plural lowercase table names
- Comment each field with its purpose inline
- Use `Decimal` for monetary amounts (never `Float`)
- Include both `date` (when event happened) and `createdAt`/`updatedAt` audit fields
- Optional fields use `?` suffix (e.g., `description String?`)

---

## Frontend Patterns (Next.js App Router)

### Layout & Metadata
- Export `metadata` constant typed as `Metadata` from `next` at the top of layout files
- Root layout sets `lang="en"` and `className="h-full"` on both `<html>` and `<body>` for full-height layouts
- No custom font imports currently — add via `next/font` if needed

```typescript
export const metadata: Metadata = {
  title: "The Sovereign Ledger | Financial Management",
  description: "...",
  keywords: ["finance", "budget", ...],
};
```

### Route Organization
- Use route groups `(auth)` to namespace auth pages without affecting URL paths
- Auth pages live at `(auth)/signin/page.tsx` and `(auth)/signup/page.tsx`
- Keep `page.tsx` components as default exports with PascalCase function names

### Component Conventions
- Page components are simple default-exported functions (not arrow functions at top level)
- Keep pages minimal until features are built out — avoid premature abstraction

### Styling
- Use Tailwind CSS v4 utility classes exclusively — no inline styles or CSS modules
- Use the `cn()` utility from `src/lib/utils.ts` for conditional/merged class names:

```typescript
import { cn } from "@/lib/utils";
// Usage:
<div className={cn("base-class", isActive && "active-class", className)} />
```

- The `cn` function combines `clsx` + `tailwind-merge` to safely merge conflicting Tailwind classes

### shadcn/ui Components
- Components are configured via `components.json` at the frontend root
- Add new shadcn components with: `npx shadcn@latest add <component>`
- Components install into `src/components/ui/`
- Use `class-variance-authority` (cva) for variant-based component styling

### next.config.ts
- Keep config minimal — only add options when needed
- Comment out experimental options rather than deleting them (preserves intent)

---

## Naming Conventions

| Context | Convention | Example |
|---|---|---|
| NestJS controllers | PascalCase + `Controller` suffix | `ExpenseController` |
| NestJS services | PascalCase + `Service` suffix | `ExpenseService` |
| NestJS modules | PascalCase + `Module` suffix | `ExpenseModule` |
| REST endpoints | plural kebab-case | `/expenses` |
| Prisma models | PascalCase singular | `Expense` |
| DB table names | plural snake_case via `@@map` | `expenses` |
| React components | PascalCase | `RootLayout` |
| Utility functions | camelCase | `cn()` |
| Frontend env vars | `NEXT_PUBLIC_` prefix for client-side | `NEXT_PUBLIC_API_URL` |

---

## Prisma Workflow

```bash
# After modifying schema.prisma:
npx prisma migrate dev --name describe_change

# Regenerate client after schema changes:
npx prisma generate

# Seed the database:
npx prisma db seed

# Inspect DB via Prisma Studio:
npx prisma studio
```

- Generated client lives in `src/generated/prisma` (not the default location) — always import from there:
  ```typescript
  import { Expense, Prisma } from '../generated/prisma/client';
  ```

---

## Testing (Backend)

- Test files are co-located: `feature.controller.spec.ts`, `feature.service.spec.ts`
- Use `@nestjs/testing` `Test.createTestingModule()` for unit tests
- Use `supertest` for HTTP-level integration tests
- Run `npm run test:cov` to check coverage before PRs
