"use client";

import { SeatType, UserType } from "@/lib/types/common";
import React, { useContext } from "react";

const { useState } = require("react");

type DashboardContextType = {
  seat: SeatType | null;
  setSeat: (val: SeatType | null) => void;
  user: UserType | null;
  setUser: (val: UserType | null) => void;
};

const DashboardContext = React.createContext<DashboardContextType>({
  seat: null,
  user: null,
  setSeat: () => {},
  setUser: () => {},
});

const DashboardContextProvider = ({ children }) => {
  const [seat, setSeat] = useState(null);
  const [user, setUser] = useState(null);

  const value = {
    seat,
    setSeat,
    user,
    setUser,
  } as DashboardContextType;

  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
};

const useDashboard = () => {
  const context = useContext(DashboardContext);

  if (context == undefined) {
    console.error("should be called inside a context provider");
  }

  return context as DashboardContextType;
};

export { DashboardContextProvider, useDashboard };
