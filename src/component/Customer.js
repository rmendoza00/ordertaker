import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class Customer extends Component {

    render() {
        return (
            <div>
                <AppBar position="static" title="Home">
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu" onClick={() => this.setState({ openDrawer: true })}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit">Customer Information</Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}
export default Customer;