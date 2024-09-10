import { TicketUpdateManyWithoutEventsInput } from "./TicketUpdateManyWithoutEventsInput";

export type EventUpdateInput = {
  createdBy?: string | null;
  date?: Date | null;
  description?: string | null;
  name?: string | null;
  tickets?: TicketUpdateManyWithoutEventsInput;
};
