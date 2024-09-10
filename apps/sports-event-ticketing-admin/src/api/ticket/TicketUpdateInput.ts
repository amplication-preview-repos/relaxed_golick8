import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type TicketUpdateInput = {
  event?: EventWhereUniqueInput | null;
  price?: number | null;
  ticketType?: string | null;
};
