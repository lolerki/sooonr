import React from 'react';
import { List, Datagrid, TextField, NumberField } from 'react-admin';

export const EventsList = props => (
    <List {...props} style={{marginTop: 50 + "px"}}>
        <Datagrid rowClick="edit">

            <NumberField source="id" label="ID"/>

            <TextField source="title" />
            <TextField source="description" />
            <TextField source="createAt" />
            <TextField source="dateEvent" />
            <TextField source="linkGoogle" />
            <TextField source="price" />
            <TextField source="idUser" />
            <TextField source="bills" />
        </Datagrid>
    </List>
);