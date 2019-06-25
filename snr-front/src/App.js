import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import parseHydraDocumentation from '@api-platform/api-doc-parser/lib/hydra/parseHydraDocumentation';
import { hydraClient, fetchHydra as baseFetchHydra  } from '@api-platform/admin';
import { Redirect } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { UserShow } from './Components/User/Show';
import { UserEdit } from './Components/User/Edit';
import { UserCreate } from './Components/User/Create';
import { UserList } from './Components/User/users';

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
                   /* appLayout={ Layout } */

            >
                <Resource name="users" list={ UserList } create={ UserCreate } show={ UserShow } edit={ UserEdit } title="Users"/>
            </Admin>
        )
    }
}