import { cn } from "@/utils/tailwind";
import BookTicket from "components/bookTicket";
import Seat from "components/seat";
import SeatLayout from "components/seatLayout";
import { TicketsContextProvider } from "contexts/tickets";
import { eq } from "drizzle-orm";
import { _db } from "lib/db";
import { buses, seats } from "lib/db/schema";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const runtime = "edge";

export default async function Page() {
  const busesData = await _db.select().from(buses);

  const bus = busesData[0];
  const busId = bus?.id;

  const seatsData = await _db.select().from(seats).where(eq(seats.bus_id, busId));

  const upperSeats = seatsData.filter((seat) => seat?.seat_type == "up");
  const lowerSeats = seatsData.filter((seat) => seat?.seat_type == "low");

  return (
    <TicketsContextProvider>
      <div className="relative grid h-screen w-full grid-cols-4 gap-y-4 px-3 py-4 sm:px-6 sm:py-6">
        <SeatLayout upperSeats={upperSeats} lowerSeats={lowerSeats} />
        <BookTicket />
      </div>
    </TicketsContextProvider>
  );
}
