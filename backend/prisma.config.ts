import 'dotenv/config';
import { defineConfig } from '@prisma/config';

const connectionString = process.env.DATABASE_URL;
if (!connectionString) throw new Error('DATABASE_URL is not defined');

export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: {
    url: connectionString,
  },
  migrations: {
    seed: 'ts-node --project tsconfig.json src/prisma/seed.ts',
  },
});
