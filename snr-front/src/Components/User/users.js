import React from 'react';
import { List, Datagrid, TextField, EmailField, NumberField } from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" label="ID"/>
            <EmailField source="email" />
            <TextField source="firstname" />
            <TextField source="roles" />
            <TextField source="createdAt" />
            <TextField source="artistType" />
        </Datagrid>
    </List>
);