import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TicketListRelationFilter } from "../ticket/TicketListRelationFilter";

export type EventWhereInput = {
  createdBy?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  tickets?: TicketListRelationFilter;
};
