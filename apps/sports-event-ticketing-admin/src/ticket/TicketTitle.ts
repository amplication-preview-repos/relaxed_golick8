import { Ticket as TTicket } from "../api/ticket/Ticket";

export const TICKET_TITLE_FIELD = "ticketType";

export const TicketTitle = (record: TTicket): string => {
  return record.ticketType?.toString() || String(record.id);
};
