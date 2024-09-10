import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TicketWhereInput = {
  event?: EventWhereUniqueInput;
  id?: StringFilter;
  price?: FloatNullableFilter;
  ticketType?: StringNullableFilter;
};
