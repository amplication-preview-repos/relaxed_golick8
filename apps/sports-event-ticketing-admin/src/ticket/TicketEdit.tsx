import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { EventTitle } from "../event/EventTitle";

export const TicketEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="event.id" reference="Event" label="event">
          <SelectInput optionText={EventTitle} />
        </ReferenceInput>
        <NumberInput label="price" source="price" />
        <TextInput label="ticketType" source="ticketType" />
      </SimpleForm>
    </Edit>
  );
};
