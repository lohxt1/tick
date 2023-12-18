import SeatLayout from "components/seatLayout";
import { TicketsContextProvider } from "contexts/tickets";
import { eq } from "drizzle-orm";
import { _db } from "lib/db";
import { buses, seats, tickets } from "lib/db/schema";
import BookTicketBlock from "@/components/bookTicketBlock";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const runtime = "edge";

export default async function Page() {
  const busesData = await _db.select().from(buses);

  const bus = busesData[0];
  const busId = bus?.id;

  const _seatsData = await _db.select().from(seats).where(eq(seats.bus_id, busId));
  const ticketsData = await _db.select().from(tickets).where(eq(tickets.bus_id, busId));

  const seatsData = _seatsData.map((seat) => ({
    ...seat,
    ticketId: ticketsData.find((ticket) => ticket?.seat_id == seat?.id)?.id,
  }));

  const upperSeats = seatsData.filter((seat) => seat?.seat_type == "up");
  const lowerSeats = seatsData.filter((seat) => seat?.seat_type == "low");

  return (
    <TicketsContextProvider>
      <div className="relative grid h-screen w-full grid-cols-4 gap-y-4 pt-[50px]">
        <SeatLayout upperSeats={upperSeats} lowerSeats={lowerSeats} />
        <BookTicketBlock />
      </div>
    </TicketsContextProvider>
  );
}
