import { TicketCreateNestedManyWithoutEventsInput } from "./TicketCreateNestedManyWithoutEventsInput";

export type EventCreateInput = {
  createdBy?: string | null;
  date?: Date | null;
  description?: string | null;
  name?: string | null;
  tickets?: TicketCreateNestedManyWithoutEventsInput;
};
