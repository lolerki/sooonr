import React from 'react';
import { List, Datagrid, TextField, NumberField } from 'react-admin';

export const ProfileList = props => (
    <List {...props} style={{marginTop: 50 + "px"}}>
        <Datagrid rowClick="edit">
            <TextField source="biography" label="Biography"/>
            <TextField source="about" />
            <TextField source="stage_name" />
            <TextField source="price" />
            <TextField source="id_user" />
        </Datagrid>
    </List>
);