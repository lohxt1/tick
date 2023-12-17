"use client";

import { useTickets } from "contexts/tickets";

const BookTicket = () => {
  const { seat } = useTickets();
  const { seat_number, id, seat_type } = seat || {};
  return (
    <div className="h-screen w-full items-center justify-center">
      {id ? (
        <div className="flex h-full w-full flex-col justify-start gap-y-4"></div>
      ) : (
        <div className="flex h-full w-full items-center justify-center">Select a Seat</div>
      )}
    </div>
  );
};

export default BookTicket;
