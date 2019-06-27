import React from 'react';
import { Show, SimpleShowLayout, TextField, EmailField, EditButton } from 'react-admin';

export const EventsShow = (props) => (
    <Show { ...props } style={{marginTop: 50 + "px"}}>
        <SimpleShowLayout>
            <EmailField source="title" />
            <TextField source="description" />
            <TextField source="createAt" />
            <TextField source="dateEvent" />
            <TextField source="linkGoogle" />
            <TextField source="price" />
            <TextField source="idUser" />
            <TextField source="bills" />
            <EditButton />
        </SimpleShowLayout>
    </Show>
);