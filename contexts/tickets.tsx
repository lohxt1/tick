"use client";

import React, { useContext } from "react";

const { useState } = require("react");

const TicketsContext = React.createContext(null);

const TicketsContextProvider = ({ children }) => {
  const [seat, setSeat] = useState(null);

  const value = {
    seat,
    setSeat,
  };

  return <TicketsContext.Provider value={value}>{children}</TicketsContext.Provider>;
};

const useTickets = () => {
  const context = useContext(TicketsContext);

  if (context == undefined) {
    console.error("should be called inside a context provider");
  }

  return context;
};

export { TicketsContextProvider, useTickets };
