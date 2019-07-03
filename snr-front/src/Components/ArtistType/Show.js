import React from 'react';
import { Show, SimpleShowLayout, TextField, EditButton } from 'react-admin';

export const ArtistTypeShow = (props) => (
    <Show { ...props } style={{marginTop: 50 + "px"}}>
        <SimpleShowLayout>
            <TextField source="name" />
            <TextField source="idUser" />
            <EditButton />
        </SimpleShowLayout>
    </Show>
);