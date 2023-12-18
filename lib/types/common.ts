type UserType = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  created_at?: string;
};

type TicketType = {
  id: string;
  user_id: string;
  seat_id: string;
  bus_id: string;
  created_at?: string;
};

type SeatType = {
  id: string;
  bus_id: string;
  seat_number: string;
  seat_type: string;
};

type BusType = {
  id: string;
};

export type { UserType, TicketType, SeatType, BusType };
