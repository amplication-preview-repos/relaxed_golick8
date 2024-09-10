import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type VenueWhereInput = {
  capacity?: IntNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
};
