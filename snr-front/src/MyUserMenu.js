import { AppBar, UserMenu, MenuItemLink } from 'react-admin';
import SettingsIcon from '@material-ui/icons/Settings';

const MyUserMenu = props => (
    <UserMenu {...props}>
        <MenuItemLink
            to="/configuration"
            primaryText="Configuration"
            leftIcon={<SettingsIcon />}
        />
    </UserMenu>
);

const MyAppBar = props => <AppBar {...props} userMenu={<MyUserMenu />} />;

const MyLayout = props => <Layout {...props} appBar={MyAppBar} />;