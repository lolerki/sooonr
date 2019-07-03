import { Layout, Sidebar } from 'react-admin';
import React  from 'react';
import MyMenuAppBar from './MyMenuAppBar';
import MyMenu from './MyMenu';


const MySidebar = props =>
    <Sidebar {...props} size={0} />;

const MyLayout = (props) =>
    <Layout {...props}
            appBar={MyMenuAppBar}
            menu={MyMenu}
            sidebar={MySidebar}
    />;

export default MyLayout;