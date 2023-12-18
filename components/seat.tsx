"use client";

import { cn } from "@/utils/tailwind";
import { useTickets } from "contexts/tickets";

const Seat = (seat) => {
  const { seat_number, id, seat_type, bus_id, ticketId: seatTicketId } = seat;
  const { seat: selectedSeat, setSeat, setTicket, ticket } = useTickets();
  const handleSeatSelect = (e) => {
    e.preventDefault();
    if (seatTicketId) return;
    setTicket(null);
    setSeat(seat);
  };

  return (
    <div
      className={cn(
        "flex h-full w-full cursor-pointer items-center justify-center p-1",
        seatTicketId && seatTicketId == ticket?.id
          ? "cursor-not-allowed border border-bl-one/50 bg-bl-one/20"
          : seatTicketId
          ? "cursor-not-allowed bg-cy-one/30 opacity-20"
          : selectedSeat?.id == id
          ? "border border-bl-one/50 bg-bl-one/20"
          : "",
      )}
      onClick={handleSeatSelect}
    >
      {seat_number}
    </div>
  );
};

export default Seat;
