import React from 'react';
import { Filter, List, Datagrid, TextField, ReferenceField, EditButton, TextInput, ReferenceInput, SelectInput } from 'react-admin';


const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const PostList = props => (
    <List filters={<PostFilter />} {...props}>

    </List>
);
