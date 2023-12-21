import EditTicketBlock from "@/components/editTicketBlock";
import TicketsList from "@/components/ticketsList";
import { DashboardContextProvider } from "contexts/dashboard";
import { _db } from "lib/db";
import { buses, seats, tickets, users } from "lib/db/schema";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const runtime = "edge";

export default async function Page() {
  const busesData = await _db.select().from(buses);

  const bus = busesData[0];
  const busId = bus?.id;

  // let _ticketsData = await _rawdb
  //   .prepare(
  //     "SELECT ticket.id AS ticket_id, * FROM ticket JOIN user ON ticket.user_id = user.id JOIN seat ON ticket.seat_id = seat.id ORDER BY seat.seat_number ASC",
  //   )
  //   .run();

  let _tickets = await _db.select().from(tickets);
  let _users = await _db.select().from(users);
  let _seats = await _db.select().from(seats);

  let ticketsData = _tickets.map((ticket) => {
    let user = _users.find((user) => ticket?.user_id == user.id);
    let seat = _seats.find((seat) => ticket?.seat_id == seat.id);
    return {
      ...ticket,
      ticket_id: ticket?.id,
      ...user,
      user_id: user?.id,
      ...seat,
      seat_id: seat?.id,
    };
  });

  return (
    <DashboardContextProvider>
      <div className="relative grid h-screen w-full grid-cols-4 gap-y-4 pt-[50px]">
        <TicketsList tickets={ticketsData} />
        <EditTicketBlock />
      </div>
    </DashboardContextProvider>
  );
}
