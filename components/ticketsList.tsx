"use client";

import { getRelativeTime } from "@/utils/helpers";
import { deleteTicket } from "actions/deleteTicket";
import { useDashboard } from "contexts/dashboard";
import { useRouter } from "next/navigation";
import { useState } from "react";

const TicketsList = ({ tickets }) => {
  const { setSeat, setUser } = useDashboard();

  const handleEditTicket = (ticket) => (e) => {
    e.preventDefault();
    const { seat_number, seat_type, bus_id, seat_id, first_name, last_name, email, user_id } = ticket;
    const seat = {
      id: seat_id,
      seat_number,
      seat_type,
      bus_id,
    };
    const user = {
      id: user_id,
      first_name,
      last_name,
      email,
    };

    setSeat(seat);
    setUser(user);
  };

  return (
    <div className="col-span-3 mx-auto h-[calc(100%_-_6rem)] w-full overflow-x-hidden overflow-y-scroll p-8">
      {tickets?.length > 0 ? (
        <div className="h-fit w-full rounded-md border border-sh-one">
          <table className="w-full p-8 text-sm">
            <thead className="w-full rounded-md text-tx-two">
              <tr className="w-full rounded-md border-b border-sh-one">
                <th className="border-r border-sh-one p-2 text-left">First Name</th>
                <th className="border-r border-sh-one p-2 text-left">Last Name</th>
                <th className="border-r border-sh-one p-2 text-left">Email</th>
                <th className="border-r border-sh-one p-2 text-left">Seat Number</th>
                <th className="border-r border-sh-one p-2 text-left">Seat Type</th>
                <th className="border-r border-sh-one p-2 text-left">Ticket ID</th>
                <th className="border-r border-sh-one p-2 text-left">Created At</th>
                <th className="border-r border-sh-one p-2 text-left"></th>
                <th className="border-r border-sh-one p-2 text-left"></th>
              </tr>
            </thead>
            <tbody className="max-h-[800px] w-full overflow-y-scroll rounded-md">
              {tickets?.map((ticket) => (
                <tr className="w-full rounded-md border-b border-sh-one hover:bg-bg-two">
                  <td className="border-r border-sh-one p-2">{ticket?.first_name}</td>
                  <td className="border-r border-sh-one p-2">{ticket?.last_name}</td>
                  <td className="border-r border-sh-one p-2">{ticket?.email}</td>
                  <td className="border-r border-sh-one p-2">{ticket?.seat_number}</td>
                  <td className="border-r border-sh-one p-2">{ticket?.seat_type}</td>
                  <td className="border-r border-sh-one p-2">{ticket?.ticket_id}</td>
                  <td className="border-r border-sh-one p-2">{getRelativeTime(ticket?.created_at)}</td>
                  <td className="cursor-pointer border-r border-sh-one p-2 text-xs text-ye-one" onClick={handleEditTicket(ticket)}>
                    Edit
                  </td>
                  <td className="border-r border-sh-one p-2">
                    <DeleteTicket ticket={ticket} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex h-full w-full items-center justify-center text-xl text-tx-two">wow, so empty! Try creating a reservation.</div>
      )}
    </div>
  );
};

export default TicketsList;

const DeleteTicket = ({ ticket }) => {
  const [isLoading, toggleLoading] = useState(false);
  const router = useRouter();

  const handleDeleteTicket = async (e) => {
    e.preventDefault();
    toggleLoading(true);
    const { ticket_id } = ticket;
    await deleteTicket({ ticket_id });
    router.refresh();
    toggleLoading(false);
  };

  return (
    <div className="flex w-full cursor-pointer flex-row text-xs text-re-one" onClick={handleDeleteTicket}>
      {isLoading ? <div className="h-4 w-4 animate-spin text-xs">*</div> : "Delete"}
    </div>
  );
};
