import { relations, sql } from "drizzle-orm";
import { integer, sqliteTable, primaryKey, text, index, AnySQLiteColumn, blob } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("user", {
  id: text("id").notNull().primaryKey(),
  first_name: text("first_name"),
  last_name: text("last_name"),
  email: text("email"),
  created_at: text("created_at"),
});

export const tickets = sqliteTable("ticket", {
  id: text("id").notNull().primaryKey(),
  user_id: text("user_id"),
  seat_id: text("seat_id"),
  bus_id: text("bus_id"),
  created_at: text("created_at"),
});

export const seats = sqliteTable("seat", {
  id: text("id").notNull().primaryKey(),
  bus_id: text("bus_id"),
  seat_number: text("seat_number"),
  seat_type: text("seat_type"),
});

export const buses = sqliteTable("bus", {
  id: text("id").notNull().primaryKey(),
  seats: text("seats"),
});
