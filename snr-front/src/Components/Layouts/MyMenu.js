import React from 'react';
import { connect } from 'react-redux';
import { MenuItemLink, getResources, Responsive } from 'react-admin';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

const styles = {
    root: { width: '0px', display: 'none'}, // Style applied to the MenuItem from material-ui
    active: { fontWeight: 'bold' }, // Style applied when the menu item is the active one
    icon: {}, // Style applied to the icon

};

const MyMenu = ({ classes, resources, onMenuClick, logout }) => (
    <div>
        {resources.map(resource => (
            <MenuItemLink
                classes={classes}
                to={`/${resource.name}`}
            />
        ))}
        <MenuItemLink classes={classes} to="/custom-route" primaryText="Miscellaneous" onClick={onMenuClick} />
        <Responsive
            small={logout}
            medium={null} // Pass null to render nothing on larger devices
        />
    </div>
);

const mapStateToProps = state => ({
    resources: getResources(state),
});

export default withRouter(connect(mapStateToProps)(withStyles(styles)(MyMenu)));