import React from 'react';
import { List, Datagrid, TextField, EmailField, NumberField } from 'react-admin';

export const AddressList = props => (
    <List {...props} style={{marginTop: 50 + "px"}}>
        <Datagrid rowClick="edit">
            <NumberField source="id" label="ID"/>
            <EmailField source="street" />
            <TextField source="street_line2" />
            <TextField source="city" />
            <TextField source="zip_code" />
            <TextField source="country" />
            <TextField source="id_user" />
            <TextField source="bills" />
        </Datagrid>
    </List>
);