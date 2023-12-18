import { _db } from "lib/db";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const runtime = "edge";

export default async function Page() {
  redirect("/reservations");
  return <></>;
}
