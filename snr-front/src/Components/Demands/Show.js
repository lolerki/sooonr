import React from 'react';
import { Show, SimpleShowLayout, TextField, EditButton } from 'react-admin';

export const DemandsShow = (props) => (
    <Show { ...props } style={{marginTop: 50 + "px"}}>
        <SimpleShowLayout>
            <TextField source="numref" />
            <TextField source="datedemand" />
            <TextField source="message" />
            <TextField source="idadress" />
            <TextField source="linkgg" />
            <TextField source="status" />
            <TextField source="datedemanded" />
            <TextField source="create_at" />
            <EditButton />
        </SimpleShowLayout>
    </Show>
);