import React from 'react';
import { Show, SimpleShowLayout, TextField, EmailField, EditButton } from 'react-admin';

export const UserShow = (props) => (
    <Show { ...props }>
        <SimpleShowLayout>
            <TextField source="id" label="ID"/>
            <EmailField source="email" label="Email" />
            <TextField source="firstname" label="Firstname"/>
            <TextField source="roles" label="Roles"/>
            <TextField source="createdAt" label="Crée le "/>
            <TextField source="artistType" label="Type d'artist"/>
            <EditButton />
        </SimpleShowLayout>
    </Show>
);