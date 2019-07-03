import React from 'react';
import { List, Datagrid, TextField, EmailField, NumberField } from 'react-admin';

export const BillList = props => (
    <List {...props} style={{marginTop: 50 + "px"}}>
        <Datagrid rowClick="edit">
            <NumberField source="id" label="ID" />
            <EmailField source="date" />
            <TextField source="idUser" />
            <TextField source="idAddress" />
            <TextField source="idEvent" />
        </Datagrid>
    </List>
);