import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const EventsList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <EmailField source="email" />
            <TextField source="phone" />
            <TextField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);