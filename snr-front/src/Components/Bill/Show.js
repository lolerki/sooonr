import React from 'react';
import { Show, SimpleShowLayout, TextField, EmailField, EditButton } from 'react-admin';

export const BillShow = (props) => (
    <Show { ...props } style={{marginTop: 50 + "px"}}>
        <SimpleShowLayout>
            <EmailField source="date" />
            <TextField source="idUser" />
            <TextField source="idAddress" />
            <TextField source="idEvent" />
            <EditButton />
        </SimpleShowLayout>
    </Show>
);