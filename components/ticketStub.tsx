"use client";

const TicketStub = ({ seat, ticket, user }) => {
  const { id: selectedSeatId, seat_number: selectedSeatNumber, seat_type: selectedSeatType, bus_id: selectedBusId } = seat || {};
  const { id: ticketId, seat_id: ticketSeatId, created_at: ticketCreatedAt } = ticket || {};
  const { id: userId, first_name: userFirstName, last_name: userLastName, email: userEmail } = user || {};

  return (
    <div className="flex h-full w-full flex-col justify-start gap-y-4">
      <div className="flex flex-col">
        <div className="text-xl text-tx-one">Ticket Booked 🎉</div>
      </div>
      <div className="flex flex-col">
        <div className="text-xs text-tx-three">Seat Number</div>
        <div className="text-xl capitalize text-tx-one">{selectedSeatNumber}</div>
      </div>
      <div className="flex flex-col">
        <div className="text-xs text-tx-three">First Name</div>
        <div className="text-xl capitalize text-tx-one">{userFirstName}</div>
      </div>
      <div className="flex flex-col">
        <div className="text-xs text-tx-three">Last Name</div>
        <div className="text-xl capitalize text-tx-one">{userLastName}</div>
      </div>
      <div className="flex flex-col">
        <div className="text-xs text-tx-three">Email</div>
        <div className="text-xl capitalize text-tx-one">{userEmail}</div>
      </div>
      <div className="flex flex-col">
        <div className="text-xs text-tx-three">Ticket ID</div>
        <div className="text-xl text-tx-one">{ticketId}</div>
      </div>
      <div className="flex flex-col">
        <div className="text-xs text-tx-three">Created At</div>
        <div className="text-xl text-tx-one">{ticketCreatedAt}</div>
      </div>
      <div className="mt-12 flex w-full flex-col">
        <div className="text-md text-tx-two">Select a seat to book another one!</div>
      </div>
    </div>
  );
};

export default TicketStub;
