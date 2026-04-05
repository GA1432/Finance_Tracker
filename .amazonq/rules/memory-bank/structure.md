# Finance Tracker - Project Structure

## Directory Layout

```
Finance_Tracker/
├── backend/                        # NestJS REST API
│   ├── prisma/
│   │   ├── schema.prisma           # Database schema (Expense model)
│   │   └── migrations/             # Prisma migration history
│   ├── src/
│   │   ├── generated/prisma/       # Auto-generated Prisma client (CJS)
│   │   ├── prisma/
│   │   │   ├── prisma.module.ts    # Global Prisma module
│   │   │   ├── prisma.service.ts   # PrismaClient wrapper service
│   │   │   └── seed.ts             # Database seed script
│   │   ├── expense/
│   │   │   ├── expense.controller.ts  # POST /expenses, GET /expenses, DELETE /expenses/:id
│   │   │   ├── expense.service.ts     # Business logic + Prisma queries
│   │   │   └── expense.module.ts      # Feature module
│   │   ├── user/
│   │   │   ├── dto/                # Data Transfer Objects
│   │   │   ├── entities/           # User entity definitions
│   │   │   ├── user.controller.ts
│   │   │   ├── user.service.ts
│   │   │   ├── user.module.ts
│   │   │   ├── user.controller.spec.ts
│   │   │   └── user.service.spec.ts
│   │   ├── app.module.ts           # Root module (imports all feature modules)
│   │   ├── app.controller.ts
│   │   ├── app.service.ts
│   │   └── main.ts                 # Bootstrap entry point
│   ├── prisma.config.ts            # Prisma config (pg adapter)
│   ├── .env                        # DATABASE_URL and other secrets
│   └── package.json
│
└── frontend/                       # Next.js 16 App Router UI
    ├── src/
    │   ├── app/
    │   │   ├── (auth)/
    │   │   │   ├── signin/page.tsx  # Sign-in page
    │   │   │   └── signup/page.tsx  # Sign-up page
    │   │   ├── layout.tsx           # Root layout (fonts, metadata)
    │   │   ├── page.tsx             # Home/dashboard page
    │   │   └── globals.css          # Global Tailwind CSS
    │   ├── components/              # Shared UI components (shadcn/ui)
    │   └── lib/
    │       └── utils.ts             # cn() utility (clsx + tailwind-merge)
    ├── components.json              # shadcn/ui configuration
    ├── next.config.ts
    └── package.json
```

## Core Components & Relationships

- **AppModule** imports `ConfigModule`, `PrismaModule`, `ExpenseModule`, `UserModule`
- **PrismaModule** is a global module providing `PrismaService` to all feature modules
- **ExpenseModule** depends on `PrismaService` for all DB operations
- **UserModule** has its own controller/service with DTOs and entities
- **Frontend** communicates with the backend REST API; auth routes are grouped under the `(auth)` route group

## Architectural Patterns

- **NestJS modular architecture**: each domain (expense, user) is a self-contained feature module
- **Repository-style services**: services own all Prisma queries; controllers are thin
- **Next.js App Router**: file-based routing with route groups for auth separation
- **Prisma ORM**: schema-first with generated typed client output to `src/generated/prisma`
- **PostgreSQL** via `@prisma/adapter-pg` (native pg driver adapter)
