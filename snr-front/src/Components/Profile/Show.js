import React from 'react';
import { Show, SimpleShowLayout, TextField, EditButton } from 'react-admin';

export const ProfileShow = (props) => (
    <Show { ...props } style={{marginTop: 50 + "px"}}>
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
            <EditButton />

            <div class="container margtop margbot greatvibes pad white bordrad10">
                <div class="container">
                    <div class="row ">
                        <div class="col-lg-6 off-screen off-screen--from-left">

                        </div>
                    </div>

                    <div style={{width: 50 +"%", margin: "auto", textAlign: "center"}}>
                        <p>

                        </p>
                    </div>
                    <article style={{width: 50 +"%", float: "left", textAlign: "center"}}>
                        <p>Joël SYLVIUS</p>
                        <p>Homme</p>
                        <p>18/04/1991</p>
                    </article>
                    <article style={{width: 50 +"%", float: "left", textAlign: "center"}}>
                        <p>Adresse ligne 1</p>
                        <p>adresse ligne 2</p>
                        <p>Numéro de tel :</p>
                    </article>

                </div>

                    <div class="row">
                        <div class="col s12 grey lighten-2 bordrad10">
                            <p>Listes des demandes</p>
                        </div>
                        <table class="striped">
                            <thead>
                            <tr>
                                <th>Référence</th>
                                <th>Date</th>
                                <th>status</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>

                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <a href="{{ path('demands_show', {'id': demand.id}) }}"><i></i></a>
                                    <a href="{{ path('demands_edit', {'id': demand.id}) }}">edit</a>
                                </td>
                            </tr>

                            <tr>
                                <td colspan="10">no records found</td>
                            </tr>

                            </tbody>
                        </table>
                        <div class="col s6">

                        </div>
                    </div>
            </div>
        </SimpleShowLayout>
    </Show>
);