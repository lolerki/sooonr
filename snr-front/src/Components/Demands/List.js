import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const DemandsList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <EmailField source="email" />
            <TextField source="phone" />
            <TextField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);