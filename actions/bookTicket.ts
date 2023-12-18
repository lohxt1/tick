"use server";

import { _db } from "@/lib/db";
import { tickets, users } from "@/lib/db/schema";
import { BookTicketSchema, bookTicketSchema } from "@/lib/validations/bookTicket";
import { InferInsertModel } from "drizzle-orm";
import { nanoid } from "nanoid";

type InsertTicket = InferInsertModel<typeof tickets>;
type InsertUser = InferInsertModel<typeof users>;

export async function bookTicket(formData: BookTicketSchema) {
  const { first_name, last_name, email, seat_id, bus_id } = formData;

  const validateCreateApp = bookTicketSchema.safeParse({ first_name, last_name, email, seat_id, bus_id });

  if (!validateCreateApp.success) {
    return { status: 400, message: "invalid data" };
  }

  const userId = `u_${nanoid()}`;
  const ticketId = `t_${nanoid()}`;

  const newUser: InsertUser = {
    id: userId,
    first_name,
    last_name,
    email,
    created_at: new Date().toISOString(),
  };

  const newTicket: InsertTicket = {
    id: ticketId,
    user_id: userId,
    seat_id,
    bus_id,
    created_at: new Date().toISOString(),
  };

  try {
    const userData = await _db.insert(users).values(newUser).returning();
    const ticketData = await _db.insert(tickets).values(newTicket).returning();

    return {
      userData,
      ticketData,
    };
  } catch (error) {
    return {
      error: error.message,
    };
  }
}
