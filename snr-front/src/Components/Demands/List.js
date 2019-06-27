import React from 'react';
import { List, Datagrid, TextField, NumberField } from 'react-admin';

export const DemandsList = props => (
    <List {...props} style={{marginTop: 50 + "px"}}>
        <Datagrid rowClick="edit">
            <NumberField source="id" label="ID"/>
            <TextField source="numref" />
            <TextField source="datedemand" />
            <TextField source="message" />
            <TextField source="idadress" />
            <TextField source="linkgg" />
            <TextField source="status" />
            <TextField source="datedemanded" />
            <TextField source="create_at" />
        </Datagrid>
    </List>
);