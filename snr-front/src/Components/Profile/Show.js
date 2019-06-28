import React from 'react';
import { Show, SimpleShowLayout, TextField, NumberField, FunctionField } from 'react-admin';

export const ProfileShow = (props) => (
    <Show { ...props } style={{marginTop: 10 + "px"}}>
        <SimpleShowLayout>
            <div style={{width: 50 +"%", margin: "auto", textAlign: "center"}}>
                <h1>Espace personnel</h1>
            </div>
            <div style={{width: 50 +"%", margin: "auto", textAlign: "center"}}>
                <p>Informations personnelles</p>
            </div>
            <img className=" bordrad50" src="{{ asset('build/medias/harp.jpg') }}" alt=""/>
            <TextField source="biography" label="Biography"/>
            <TextField source="about" />
            <TextField source="stage_name" />
            <TextField source="price" />
            <TextField source="id_user" />
            <NumberField source="id" />

            <a href="http://localhost:8080/"></a>

        </SimpleShowLayout>
    </Show>
);