import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type TicketCreateInput = {
  event?: EventWhereUniqueInput | null;
  price?: number | null;
  ticketType?: string | null;
};
