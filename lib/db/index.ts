import { D1Database } from "@cloudflare/workers-types";
import { binding } from "cf-bindings-proxy";
import { drizzle as drizzled1 } from "drizzle-orm/d1";
const getDB = () => {
  const db = process.env.NODE_ENV === "development" ? binding<D1Database>("DB") : process.env.DB;
  return db;
};

export const _rawdb = getDB() as any;

export const _db = drizzled1(_rawdb);
