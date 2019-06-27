import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import parseHydraDocumentation from '@api-platform/api-doc-parser/lib/hydra/parseHydraDocumentation';
import { hydraClient, fetchHydra as baseFetchHydra  } from '@api-platform/admin';
import { Redirect, Route } from 'react-router-dom';
import MyLayout from './Components/Layouts/MyLayout';
import { createMuiTheme } from '@material-ui/core/styles';
import { UserShow } from './Components/User/Show';
import { UserEdit } from './Components/User/Edit';
import { UserCreate } from './Components/User/Create';
import { UserList } from './Components/User/users';
import { AddressShow } from './Components/Address/Show';
import { AddressEdit } from './Components/Address/Edit';
import { AddressCreate } from './Components/Address/Create';
import { AddressList } from './Components/Address/List';
import { DemandsShow } from './Components/Demands/Show';
import { DemandsEdit } from './Components/Demands/Edit';
import { DemandsCreate } from './Components/Demands/Create';
import { DemandsList } from './Components/Demands/List';
import { EventsShow } from './Components/Events/Show';
import { EventsEdit } from './Components/Events/Edit';
import { EventsCreate } from './Components/Events/Create';
import { EventsList } from './Components/Events/List';
import { ProfileShow } from './Components/Profile/Show';
import { ProfileEdit } from './Components/Profile/Edit';
import { ProfileCreate } from './Components/Profile/Create';
import { ProfileList } from './Components/Profile/List';
import { BillShow } from './Components/Bill/Show';
import { BillEdit } from './Components/Bill/Edit';
import { BillCreate } from './Components/Bill/Create';
import { BillList } from './Components/Bill/List';
import { ArtistTypeShow } from './Components/ArtistType/Show';
import { ArtistTypeEdit } from './Components/ArtistType/Edit';
import { ArtistTypeCreate } from './Components/ArtistType/Create';
import { ArtistTypeList } from './Components/ArtistType/List';

const theme = createMuiTheme({
    palette: {
        type: 'light'
    },
});

const entrypoint = 'http://localhost:8080/api';
const fetchHeaders = {'Authorization': `Bearer ${window.localStorage.getItem('token')}`};
const fetchHydra = (url, options = {}) => baseFetchHydra(url, {
    ...options,
    headers: new Headers(fetchHeaders),
});
const dataProvider = api => hydraClient(api, fetchHydra);
const apiDocumentationParser = entrypoint => parseHydraDocumentation(entrypoint, { headers: new Headers(fetchHeaders) })
    .then(
        ({ api }) => ({api}),
        (result) => {
            switch (result.status) {
                case 401:
                    return Promise.resolve({
                        api: result.api,
                        customRoutes: [{
                            props: {
                                path: '/',
                                render: () => <Redirect to={`/login`}/>,
                            },
                        }],
                    });

                default:
                    return Promise.reject(result);
            }
        },
    );

export default class extends Component {
    state = { api: null };

    componentDidMount() {
        apiDocumentationParser(entrypoint).then(({ api }) => {
            this.setState({ api });
        }).catch((e) => {
            console.log(e);
        });
    }

    render() {
        if (null === this.state.api) return <div>Loading...</div>;
        return (
            <Admin api={ this.state.api }
                   apiDocumentationParser={ apiDocumentationParser }
                   dataProvider= { dataProvider(this.state.api) }
                   theme={ theme }
                   appLayout={ MyLayout }
            >
                <Route exact path="/privacy-policy" component={() => <Redirect to={{ pathname: 'http://localhost:8080' }} />} />

                <Resource name="users" list={ UserList } create={ UserCreate } show={ UserShow } edit={ UserEdit } title="Users"/>
                <Resource name="addresses" list={ AddressList } create={ AddressCreate } show={ AddressShow } edit={ AddressEdit } title="SOOONR"/>
                <Resource name="demands" list={ DemandsList } create={ DemandsCreate } show={ DemandsShow } edit={ DemandsEdit } title="Demands"/>
                <Resource name="events" list={ EventsList } create={ EventsCreate } show={ EventsShow } edit={ EventsEdit } title="Events"/>
                <Resource name="profiles" list={ ProfileList } create={ ProfileCreate } show={ ProfileShow } edit={ ProfileEdit } title="Profile"/>
                <Resource name="bills" list={ BillList } create={ BillCreate } show={ BillShow } edit={ BillEdit } title="Bill"/>
                <Resource name="artist_types" list={ ArtistTypeList } create={ ArtistTypeCreate } show={ ArtistTypeShow } edit={ ArtistTypeEdit } title="ArtistType"/>
            </Admin>
        )
    }
}