"use client";

import { users } from "@/lib/db/schema";
import { SeatType, TicketType, UserType } from "@/lib/types/common";
import React, { useContext } from "react";

const { useState } = require("react");

type TicketsContextType = {
  seat: SeatType | null;
  setSeat: (val: SeatType | null) => void;
  ticket: TicketType | null;
  setTicket: (val: TicketType | null) => void;
  user: UserType | null;
  setUser: (val: UserType | null) => void;
};

const TicketsContext = React.createContext<TicketsContextType>({
  seat: null,
  user: null,
  ticket: null,
  setSeat: () => {},
  setUser: () => {},
  setTicket: () => {},
});

const TicketsContextProvider = ({ children }) => {
  const [seat, setSeat] = useState(null);
  const [ticket, setTicket] = useState(null);
  const [user, setUser] = useState(null);

  const value = {
    seat,
    setSeat,
    ticket,
    setTicket,
    user,
    setUser,
  } as TicketsContextType;

  return <TicketsContext.Provider value={value}>{children}</TicketsContext.Provider>;
};

const useTickets = () => {
  const context = useContext(TicketsContext);

  if (context == undefined) {
    console.error("should be called inside a context provider");
  }

  return context as TicketsContextType;
};

export { TicketsContextProvider, useTickets };
