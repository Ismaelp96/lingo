import { loadEnvConfig } from '@next/env';
import type { Config } from 'drizzle-kit';
import { cwd } from 'node:process';

loadEnvConfig(cwd());

export default {
  schema: './db/schema.ts',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL as string,
  },
} satisfies Config;
