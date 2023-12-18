import * as z from "zod";
import { FieldValues } from "react-hook-form";

export const editTicketSchema = z.object({
  first_name: z.string().min(3).max(32),
  last_name: z.string().min(3).max(32),
  email: z.string().email().min(3).max(32),
  user_id: z.string().min(3).max(32),
});

export type EditTicketSchema = z.infer<typeof editTicketSchema> | FieldValues;
