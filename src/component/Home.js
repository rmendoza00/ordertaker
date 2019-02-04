import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Assignment from '@material-ui/icons/Assignment';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Order from './Order';
import AllOrder from './AllOrder';
import Customer from './Customer';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';

import '../App.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openDrawer: false,
        }
    }
    render() {
        const { openDrawer } = this.state;
        const MainMenu = () => {
            return (
                <div>
                    <CssBaseline />
                    <AppBar position="static" title="Home">
                        <Toolbar>
                            <IconButton color="inherit" aria-label="Menu" onClick={() => this.setState({ openDrawer: true })}>
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" color="inherit">Home</Typography>
                        </Toolbar>
                    </AppBar>

                    <Grid container direction="column" justify="center" alignItems="center" className={"container"} spacing={32}>
                        <Grid item xs={12}>
                            <Link to="/order" className="textdecorationNone">
                                <Paper elevation={1} className={"paper"}>
                                    <Avatar className={"avatarRed"}>
                                        <Assignment />
                                    </Avatar>
                                    <Typography component="h1" variant="h5" className={"typographyCenter"}>
                                        New Order
                                    </Typography>
                                </Paper>
                            </Link>
                        </Grid>
                    </Grid>

                    <Grid container direction="column" justify="center" alignItems="center" className={"container"} spacing={32}>
                        <Grid item xs={12}>
                            <Link to="/allorder" className="textdecorationNone">
                                <Paper elevation={1} onClick={() => alert("Click")} className={"paper"}>
                                    <Avatar className={"avatarBlue"}>
                                        <ShoppingCartIcon />
                                    </Avatar>
                                    <Typography component="h1" variant="h5" className={"typographyCenter"}>
                                        All Orders
                                    </Typography>
                                </Paper>
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid container direction="column" justify="center" alignItems="center" className={"container"} spacing={32}>
                        <Grid item xs={12}>
                            <Link to="/customer" className="textdecorationNone">
                                <Paper elevation={1} onClick={() => alert("Click")} className={"paper"}>
                                    <Avatar className={"avatarGreen"}>
                                        <PeopleIcon />
                                    </Avatar>
                                    <Typography component="h1" variant="h5" className={"typographyCenter"}>
                                        Customer Information
                                    </Typography>
                                </Paper>
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid container direction="column" justify="center" alignItems="center" className={"container"} spacing={32}>
                        <Grid item xs={12}>
                            <Link to="/customer" className="textdecorationNone">
                                <Paper elevation={1} onClick={() => alert("Click")} className={"paper"}>
                                    <Avatar className={"avatarBlack"}>
                                        <BarChartIcon />
                                    </Avatar>
                                    <Typography component="h1" variant="h5" className={"typographyCenter"}>
                                        Reports
                                    </Typography>
                                </Paper>
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            );
        };
        const sideList = (
            <div>
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </div>
        );
        const OrderMenu = () => {
            return (
                <div>
                    <Order />
                </div>
            );
        }
        const AllOrderMenu = () => {
            return (
                <div>
                    <AllOrder />
                </div>
            );
        }
        const CustomerMenu = () => {
            return (
                <div>
                    <Customer />
                </div>
            );
        }
        return (
            <div>
                <Router>
                    <div>
                        <Route exact path={"/"} component={MainMenu} />
                        <Route exact path={"/order"} component={OrderMenu} />
                        <Route exact path={"/allorder"} component={AllOrderMenu} />
                        <Route exact path={"/customer"} component={CustomerMenu} />
                    </div>
                </Router>
                <SwipeableDrawer onOpen={() => alert("OnOpen")} open={openDrawer} onClose={() => this.setState({ openDrawer: false })}>
                    <div tabIndex={0} role="button" onClick={() => this.setState({ openDrawer: false })} onKeyDown={() => this.setState({ openDrawer: false })}>
                        {sideList}
                    </div>
                </SwipeableDrawer>
            </div>
        );
    }


}
export default Home;