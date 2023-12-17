"use client";

import { cn } from "@/utils/tailwind";
import { useTickets } from "contexts/tickets";

const Seat = (seat) => {
  const { seat_number, id, seat_type } = seat;
  const { seat: selectedSeat, setSeat } = useTickets();
  const handleSeatSelect = (e) => {
    e.preventDefault();
    console.log("seat", id, seat_number);
    setSeat(seat);
  };

  return (
    <div
      className={cn("flex h-full w-full cursor-pointer items-center justify-center", selectedSeat?.id == id ? "bg-bl-one/50" : "")}
      onClick={handleSeatSelect}
    >
      {seat_number}
    </div>
  );
};

export default Seat;
