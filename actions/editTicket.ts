"use server";

import { _db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { EditTicketSchema, editTicketSchema } from "@/lib/validations/editTicket";
import { eq } from "drizzle-orm";

export async function editTicket(formData: EditTicketSchema) {
  const { first_name, last_name, email, user_id } = formData;

  const validateCreateApp = editTicketSchema.safeParse({ first_name, last_name, email, user_id });

  if (!validateCreateApp.success) {
    return { status: 400, message: "invalid data" };
  }

  try {
    const userData = await _db
      .update(users)
      .set({ first_name: first_name, last_name: last_name, email: email })
      .where(eq(users.id, user_id))
      .returning();

    return {
      userData,
    };
  } catch (error) {
    return {
      error: error.message,
    };
  }
}
