import * as z from "zod";
import { FieldValues } from "react-hook-form";

export const bookTicketSchema = z.object({
  first_name: z.string().min(3).max(32),
  last_name: z.string().min(3).max(32),
  email: z.string().email().min(3).max(32),
  seat_id: z.string().min(3).max(32),
  bus_id: z.string().min(3).max(32),
});

export type BookTicketSchema = z.infer<typeof bookTicketSchema> | FieldValues;
