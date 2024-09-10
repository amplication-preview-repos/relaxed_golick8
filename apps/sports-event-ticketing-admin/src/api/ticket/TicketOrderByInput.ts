import { SortOrder } from "../../util/SortOrder";

export type TicketOrderByInput = {
  createdAt?: SortOrder;
  eventId?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  ticketType?: SortOrder;
  updatedAt?: SortOrder;
};
