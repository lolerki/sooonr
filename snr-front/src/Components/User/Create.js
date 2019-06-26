import React from 'react';
import { Create, SimpleForm, TextInput, email, required, ArrayInput, SimpleFormIterator, SelectInput, DateInput } from 'react-admin';

export const UserCreate = (props) => (
    <Create { ...props }>
        <SimpleForm>
            <TextInput source="email" label="Email" validate={ email() } />
            <TextInput source="firstname" label="Firstname"/>
            <TextInput source="plainPassword" label="Password" validate={ required() } />
            <ArrayInput source="roles" label="Roles">
                <SimpleFormIterator>
                    <TextInput />
                </SimpleFormIterator>
            </ArrayInput>
            <SelectInput source="artistType" label="Artist Type">
            </SelectInput>
            <DateInput disabled source="createdAt" label="Date"/>
        </SimpleForm>
    </Create>
);