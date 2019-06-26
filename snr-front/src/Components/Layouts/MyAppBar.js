import React from 'react';
import { AppBar, UserMenu, MenuItemLink } from 'react-admin';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    title: {
        flex: 1,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        color: 'blue',
    },
    spacer: {
        flex: 1,
    },
};

const MyUserMenu = props => (
    <UserMenu {...props}>
        <MenuItemLink
            to="/configuration"
        />
    </UserMenu>
);



const MyAppBar = withStyles(styles)(({ classes } ) => (
    <AppBar userMenu={<MyUserMenu />}>
        <Typography
            variant="title"
            className={classes.title}
            id="react-admin-title"
        />

        <span className={classes.spacer} />
    </AppBar>
));

export default MyAppBar;