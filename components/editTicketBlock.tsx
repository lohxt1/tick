"use client";

import { useDashboard } from "contexts/dashboard";
import EditTicketForm from "./editTicketForm";

const EditTicketBlock = () => {
  const { seat, user, setUser } = useDashboard();

  const setData = (data) => {
    if (data?.userData) {
      setUser(data?.userData?.[0]);
    }
  };

  return (
    <div className="h-screen w-full items-center justify-center overflow-x-hidden overflow-y-scroll p-8">
      {seat ? (
        <EditTicketForm setData={setData} seat={seat} user={user} key={`${user?.first_name}-${user?.last_name}-${user?.email}-${seat?.id}`} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default EditTicketBlock;
