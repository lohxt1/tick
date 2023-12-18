"use client";

import { useTickets } from "contexts/tickets";
import TicketStub from "./ticketStub";
import TicketForm from "./bookTicketForm";

const BookTicketBlock = () => {
  const { seat, setSeat, setTicket, ticket, setUser, user } = useTickets();

  const setData = (data) => {
    if (data?.ticketData) {
      setTicket(data?.ticketData?.[0]);
    }
    if (data?.userData) {
      setUser(data?.userData?.[0]);
    }
  };

  return (
    <div className="h-screen w-full items-center justify-center overflow-x-hidden overflow-y-scroll p-8">
      {ticket ? (
        <TicketStub user={user} ticket={ticket} seat={seat} />
      ) : seat ? (
        <TicketForm setData={setData} seat={seat} user={user} />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-xl text-tx-two">Select a seat to book a ticket!</div>
      )}
    </div>
  );
};

export default BookTicketBlock;
