import React from 'react';
import { Show, SimpleShowLayout, TextField, EmailField, EditButton, NumberField } from 'react-admin';

export const AddressShow = (props) => (
    <Show { ...props } style={{marginTop: 50 + "px"}}>
        <SimpleShowLayout>
            <NumberField source="id" label="ID"/>
            <EmailField source="street" />
            <TextField source="street_line2" />
            <TextField source="city" />
            <TextField source="zip_code" />
            <TextField source="country" />
            <TextField source="id_user" />
            <TextField source="bills" />
            <EditButton />
        </SimpleShowLayout>
    </Show>
);