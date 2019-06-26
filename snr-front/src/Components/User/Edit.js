import React from 'react';
import { Edit, SimpleForm, DisabledInput, TextInput, email, ArrayInput, SimpleFormIterator, DateInput, SelectInput } from 'react-admin';

export const UserEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" label="ID"/>
            <TextInput source="email" label="Email" validate={ email() } />
            <TextInput source="firstname" label="Firstname"/>
            <ArrayInput source="roles" label="Roles">
                <SimpleFormIterator>
                    <TextInput />
                </SimpleFormIterator>
            </ArrayInput>
            <SelectInput source="artistType" label="Artist Type">
        </SelectInput>
            <DateInput disabled source="createdAt" label="Date"/>
        </SimpleForm>
    </Edit>
);