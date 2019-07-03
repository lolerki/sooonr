import React from 'react';
import { List, Datagrid, TextField, NumberField } from 'react-admin';

export const ArtistTypeList = props => (
    <List {...props} style={{marginTop: 50 + "px"}}>
        <Datagrid rowClick="edit">
            <NumberField source="id" label="ID" />
            <TextField source="name" />
            <TextField source="idUser" />
        </Datagrid>
    </List>
);