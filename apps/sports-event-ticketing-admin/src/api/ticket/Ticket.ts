import { Event } from "../event/Event";

export type Ticket = {
  createdAt: Date;
  event?: Event | null;
  id: string;
  price: number | null;
  ticketType: string | null;
  updatedAt: Date;
};
