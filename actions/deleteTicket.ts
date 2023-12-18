"use server";

import { _db } from "@/lib/db";
import { tickets } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function deleteTicket({ ticket_id }) {
  if (!ticket_id) {
    return { status: 400, message: "invalid data" };
  }

  try {
    const data = await _db.delete(tickets).where(eq(tickets.id, ticket_id)).returning();

    return {
      data,
    };
  } catch (error) {
    return {
      error: error.message,
    };
  }
}
