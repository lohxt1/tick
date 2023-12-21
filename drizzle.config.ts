// @ts-nocheck
import type { Config } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config();

export default {
  driver: "turso",
  schema: "lib/db/schema.ts",
  dbCredentials: {
    url: process.env.DATABASE_URL,
    authToken: process.env.DATABASE_AUTH_TOKEN,
  },
} satisfies Config;
