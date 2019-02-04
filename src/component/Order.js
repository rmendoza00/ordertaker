import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';

// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import Checkbox from '@material-ui/core/Checkbox';

// import MUIDataTable from "mui-datatables";


import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import KeyboardBack from '@material-ui/icons/KeyboardBackspace';
import Remove from '@material-ui/icons/Remove';
import CssBaseline from '@material-ui/core/CssBaseline';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Snackbar from '@material-ui/core/Snackbar';
import Clear from '@material-ui/icons/Clear';

import * as _ from 'lodash';

import '../App.css';

const orderItems = [
    {
        Key: "BC001",
        Title: "Baked Chicken",
        Quantity: 2,
        Price: 150.00,
        TotalPrice: 300.00,
        Avatar: "B"
    },
    {
        Key: "BC002",
        Title: "Beef Burgundy",
        Quantity: 2,
        Price: 150.00,
        TotalPrice: 300.00,
        Avatar: "B"
    },
    {
        Key: "BC003",
        Title: "Chicken Cordon",
        Quantity: 2,
        Price: 150.00,
        TotalPrice: 300.00,
        Avatar: "C"
    },
    {
        Key: "BC004",
        Title: "Chicken Fricase",
        Quantity: 2,
        Price: 150.00,
        TotalPrice: 300.00,
        Avatar: "R"
    },
    {
        Key: "BC005",
        Title: "Shrimp and Chorizo Paella",
        Quantity: 2,
        Price: 150.00,
        TotalPrice: 300.00,
        Avatar: "R"
    },
    {
        Key: "BC006",
        Title: "Shrimp and Chorizo Paella",
        Quantity: 2,
        Price: 150.00,
        TotalPrice: 300.00,
        Avatar: "R"
    },
];
const mainDishes = [
    {
        Id: "MD001",
        img: "https://media.istockphoto.com/photos/breakfast-with-bacon-eggs-pancakes-and-toast-picture-id533645537?k=6&m=533645537&s=612x612&w=0&h=iccHuYLLyNyO_Ok84RKBB-pHEc-sPiS6zC_IMlch-QA=",
        Title: "Baked Chicken",
        SubTitle: "150.00",

    },
    {
        Id: "MD002",
        img: "https://crackerbarrel.com/-/media/CrackerBarrel/Menu/Dinner/Wholesome-Fixins/Southern_Grilled_Caesar_Salad-H_780x390.jpg?h=390&w=780&la=en&hash=D2B8D4DA924FBECD22C1CCD638DCF28EB897BADB",
        Title: "Beef Burgundy",
        SubTitle: "250.00",

    },
    {
        Id: "MD003",
        img: "https://www.cbc.ca/food/content/images/recipes/EgyptianChickenDinner.jpg",
        Title: "Chicken Cordon",
        SubTitle: "300.00",

    },
    {
        Id: "MD004",
        img: "https://hips.hearstapps.com/toc.h-cdn.co/assets/cm/14/38/541b43cb3eeb5_-_tcx-b-new-years-cocktails-0112-xln-lg.jpg?crop=1.00xw:0.772xh;0,0.191xh&resize=480:*",
        Title: "Chicken Fricase",
        SubTitle: "450.00",

    },

];
const hotBeverages = [
    {
        Id: "HB001",
        img: "https://media.istockphoto.com/photos/breakfast-with-bacon-eggs-pancakes-and-toast-picture-id533645537?k=6&m=533645537&s=612x612&w=0&h=iccHuYLLyNyO_Ok84RKBB-pHEc-sPiS6zC_IMlch-QA=",
        Title: "Espresso",
        SubTitle: "150.00",

    },
    {
        Id: "HB002",
        img: "https://crackerbarrel.com/-/media/CrackerBarrel/Menu/Dinner/Wholesome-Fixins/Southern_Grilled_Caesar_Salad-H_780x390.jpg?h=390&w=780&la=en&hash=D2B8D4DA924FBECD22C1CCD638DCF28EB897BADB",
        Title: "Japan Classic Tea",
        SubTitle: "250.00",

    },
    {
        Id: "HB003",
        img: "https://www.cbc.ca/food/content/images/recipes/EgyptianChickenDinner.jpg",
        Title: "Earl Grey Tea",
        SubTitle: "300.00",

    },
];
const coldBeverages = [
    {
        Id: "CB001",
        img: "https://media.istockphoto.com/photos/breakfast-with-bacon-eggs-pancakes-and-toast-picture-id533645537?k=6&m=533645537&s=612x612&w=0&h=iccHuYLLyNyO_Ok84RKBB-pHEc-sPiS6zC_IMlch-QA=",
        Title: "Four Seasons",
        SubTitle: "150.00",

    },
    {
        Id: "CB002",
        img: "https://crackerbarrel.com/-/media/CrackerBarrel/Menu/Dinner/Wholesome-Fixins/Southern_Grilled_Caesar_Salad-H_780x390.jpg?h=390&w=780&la=en&hash=D2B8D4DA924FBECD22C1CCD638DCF28EB897BADB",
        Title: "Iced Mocha",
        SubTitle: "250.00",

    },
];
const desserts = [
    {
        Id: "DS001",
        img: "https://media.istockphoto.com/photos/breakfast-with-bacon-eggs-pancakes-and-toast-picture-id533645537?k=6&m=533645537&s=612x612&w=0&h=iccHuYLLyNyO_Ok84RKBB-pHEc-sPiS6zC_IMlch-QA=",
        Title: "Baked Chicken",
        SubTitle: "150.00",

    },
    {
        Id: "DS002",
        img: "https://crackerbarrel.com/-/media/CrackerBarrel/Menu/Dinner/Wholesome-Fixins/Southern_Grilled_Caesar_Salad-H_780x390.jpg?h=390&w=780&la=en&hash=D2B8D4DA924FBECD22C1CCD638DCF28EB897BADB",
        Title: "Beef Burgundy",
        SubTitle: "250.00",

    },
];
const pastry = [
    {
        Id: "PS001",
        img: "https://media.istockphoto.com/photos/breakfast-with-bacon-eggs-pancakes-and-toast-picture-id533645537?k=6&m=533645537&s=612x612&w=0&h=iccHuYLLyNyO_Ok84RKBB-pHEc-sPiS6zC_IMlch-QA=",
        Title: "Baked Chicken",
        SubTitle: "150.00",

    },
    {
        Id: "PS002",
        img: "https://crackerbarrel.com/-/media/CrackerBarrel/Menu/Dinner/Wholesome-Fixins/Southern_Grilled_Caesar_Salad-H_780x390.jpg?h=390&w=780&la=en&hash=D2B8D4DA924FBECD22C1CCD638DCF28EB897BADB",
        Title: "Beef Burgundy",
        SubTitle: "250.00",

    },
];
const crepe = [
    {
        Id: "CS001",
        img: "https://media.istockphoto.com/photos/breakfast-with-bacon-eggs-pancakes-and-toast-picture-id533645537?k=6&m=533645537&s=612x612&w=0&h=iccHuYLLyNyO_Ok84RKBB-pHEc-sPiS6zC_IMlch-QA=",
        Title: "Baked Chicken",
        SubTitle: "150.00",

    },
    {
        Id: "CS002",
        img: "https://crackerbarrel.com/-/media/CrackerBarrel/Menu/Dinner/Wholesome-Fixins/Southern_Grilled_Caesar_Salad-H_780x390.jpg?h=390&w=780&la=en&hash=D2B8D4DA924FBECD22C1CCD638DCF28EB897BADB",
        Title: "Beef Burgundy",
        SubTitle: "250.00",

    },
];
class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderItems: [],
            openDrawer: false,
            openSnackBar: false,
            snackBarMessage: 'Added an item on the order list',
            expanded: 'maindishes',
            mainDishes: mainDishes,
            hotBeverages: hotBeverages,
            coldBeverages: coldBeverages,
            desserts: desserts,
            pastry: pastry,
            crepe: crepe,
            totalOrderItem: 0,
            totalPriceOrder: 0.00
        }
    }

    render() {
        const { openDrawer,
            expanded,
            orderItems,
            mainDishes,
            hotBeverages,
            coldBeverages,
            desserts,
            pastry,
            crepe,
            openSnackBar,
            snackBarMessage,
            totalOrderItem,
            totalPriceOrder
        } = this.state;
        const menuList = (
            <div className="expandedMenu">
                <ExpansionPanel expanded={expanded === 'maindishes'} onChange={this.handleChange('maindishes')}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className="expandedMenuSummary">
                        <Typography>Main Dishes</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className="expandedMenuDetails">
                        <GridList cellHeight={180} >
                            {mainDishes.map((item, index) => {
                                return (
                                    <GridListTile key={index}>
                                        <img src={item.img} alt={item.Title} />
                                        <GridListTileBar
                                            title={item.Title}
                                            subtitle={<span>{item.SubTitle}</span>}
                                            actionIcon={<IconButton onClick={() => this.addOrder(item)}>
                                                <AddIcon variant="contained" color="secondary" />
                                            </IconButton>
                                            }
                                        />
                                    </GridListTile>
                                );
                            })}
                        </GridList>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={expanded === 'hotbeverages'} onChange={this.handleChange('hotbeverages')}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className="expandedMenuSummary">
                        <Typography>Hot Beverages</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className="expandedMenuDetails">
                        <GridList cellHeight={180} >
                            {hotBeverages.map((item, index) => {
                                return (
                                    <GridListTile key={index}>
                                        <img src={item.img} alt={item.Title} />
                                        <GridListTileBar
                                            title={item.Title}
                                            subtitle={<span>{item.SubTitle}</span>}
                                            actionIcon={<IconButton onClick={() => this.addOrder(item)}>
                                                <AddIcon variant="contained" color="secondary" />
                                            </IconButton>
                                            }
                                        />
                                    </GridListTile>
                                );
                            })}
                        </GridList>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={expanded === 'coldbeverages'} onChange={this.handleChange('coldbeverages')}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className="expandedMenuSummary">
                        <Typography>Cold Beverages</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className="expandedMenuDetails">
                        <GridList cellHeight={180} >
                            {coldBeverages.map((item, index) => {
                                return (
                                    <GridListTile key={index}>
                                        <img src={item.img} alt={item.Title} />
                                        <GridListTileBar
                                            title={item.Title}
                                            subtitle={<span>{item.SubTitle}</span>}
                                            actionIcon={<IconButton onClick={() => this.addOrder(item)}>
                                                <AddIcon variant="contained" color="secondary" />
                                            </IconButton>
                                            }
                                        />
                                    </GridListTile>
                                );
                            })}
                        </GridList>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={expanded === 'crepe'} onChange={this.handleChange('crepe')}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className="expandedMenuSummary">
                        <Typography>Crepe</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className="expandedMenuDetails">
                        <GridList cellHeight={180} >
                            {crepe.map((item, index) => {
                                return (
                                    <GridListTile key={index}>
                                        <img src={item.img} alt={item.Title} />
                                        <GridListTileBar
                                            title={item.Title}
                                            subtitle={<span>{item.SubTitle}</span>}
                                            actionIcon={<IconButton onClick={() => this.addOrder(item)}>
                                                <AddIcon variant="contained" color="secondary" />
                                            </IconButton>
                                            }
                                        />
                                    </GridListTile>
                                );
                            })}
                        </GridList>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={expanded === 'desserts'} onChange={this.handleChange('desserts')}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className="expandedMenuSummary">
                        <Typography>Desserts</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className="expandedMenuDetails">
                        <GridList cellHeight={180} >
                            {desserts.map((item, index) => {
                                return (
                                    <GridListTile key={index}>
                                        <img src={item.img} alt={item.Title} />
                                        <GridListTileBar
                                            title={item.Title}
                                            subtitle={<span>{item.SubTitle}</span>}
                                            actionIcon={<IconButton onClick={() => this.addOrder(item)}>
                                                <AddIcon variant="contained" color="secondary" />
                                            </IconButton>
                                            }
                                        />
                                    </GridListTile>
                                );
                            })}
                        </GridList>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={expanded === 'pastry'} onChange={this.handleChange('pastry')}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className="expandedMenuSummary">
                        <Typography>Pastry</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className="expandedMenuDetails">
                        <GridList cellHeight={180} >
                            {pastry.map((item, index) => {
                                return (
                                    <GridListTile key={index}>
                                        <img src={item.img} alt={item.Title} />
                                        <GridListTileBar
                                            title={item.Title}
                                            subtitle={<span>{item.SubTitle}</span>}
                                            actionIcon={<IconButton onClick={() => this.addOrder(item)}>
                                                <AddIcon variant="contained" color="secondary" />
                                            </IconButton>
                                            }
                                        />
                                    </GridListTile>
                                );
                            })}
                        </GridList>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        );
        const orderList = (
            <div>
                <Typography align="center" variant="subtitle1" className="totalPrice">Total Price: P {this.ccyFormat(totalPriceOrder)} </Typography>
                <Divider />
                <Paper elevation={1} className="paperMenu" >
                    {orderItems.map((item, index) => {
                        return (
                            <Card className="card" key={index}>
                                <CardHeader
                                    avatar={
                                        <Avatar aria-label="Recipe" >{item.Avatar}</Avatar>
                                    }
                                    title={item.Title}
                                    subheader={item.Price}
                                    className="menuHeader"
                                />
                                <CardActionArea>
                                    <CardContent className="cardContent">
                                        <Typography component="p" className="drawerQty">Qty : {item.Quantity}</Typography>
                                        <Typography component="p" className="drawerTotalPrice">Total Price: {item.TotalPrice}</Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className="cardActions">
                                    <Fab size="small" color="secondary" aria-label="Add" onClick={() => this.cancelItemOrder(item)} className="drawerCardActionsButton">
                                        <Clear />
                                    </Fab>
                                    {
                                        item.Quantity > 1 ?
                                            <Fab size="small" color="primary" aria-label="Add" onClick={() => this.removeOrder(item)} className="drawerCardActionsButton"><Remove /> </Fab> :
                                            <Fab disabled size="small" color="primary" aria-label="Add" className="drawerCardActionsButton"><Remove /> </Fab>
                                    }
                                    <Fab size="small" color="primary" aria-label="Add" onClick={() => this.addOrderDrawer(item)} className="drawerCardActionsButton">
                                        < AddIcon />
                                    </Fab>

                                    {/* <Button color="primary">Primary</Button>
                                    <Button color="secondary">Secondary</Button> */}

                                </CardActions>
                            </Card>
                        )

                    })}
                </Paper>
                <AppBar position="fixed" color="primary" className="bottomAppBar">
                    <Toolbar className="bottomToolbar">
                        <Button variant="contained" href="#contained-buttons" >Push to Kitchen</Button>
                        <Fab variant="extended" size="small" color="secondary" aria-label="Add" onClick={() => this.setState({ openDrawer: false })}>
                            <KeyboardBack />
                        </Fab>
                    </Toolbar>
                </AppBar>


            </div>
        );
        return (
            <div>
                <CssBaseline />
                <AppBar position="static" title="Home" className="appBar">
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu" onClick={() => this.setState({ openDrawer: true })}>
                            <Badge badgeContent={totalOrderItem} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                        <Typography variant="h6" color="inherit">Order Taker</Typography>
                    </Toolbar>
                </AppBar>

                {menuList}

                <AppBar position="fixed" color="primary" className="bottomAppBar">
                    <Toolbar className="bottomToolbar">
                        <Fab color="secondary" aria-label="Add" className="bottomFabButton">
                            <AddIcon />
                        </Fab>
                    </Toolbar>
                </AppBar>
                <SwipeableDrawer onOpen={() => alert("OnOpen")} open={openDrawer} onClose={() => this.setState({ openDrawer: false })}>
                    <div tabIndex={0} role="button">
                        {orderList}
                    </div>
                </SwipeableDrawer>
                <Snackbar
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    open={openSnackBar}
                    onClose={() => this.setState({ openSnackBar: false })}
                    ContentProps={{ 'aria-describedby': 'message-id', }}
                    message={<span id="message-id">{snackBarMessage}</span>}
                />

            </div>
        );
    }
    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };
    async addOrder(item) {
        this.setState({ openSnackBar: true, snackBarMessage: "Added " + item.Title + " to the order list." })
        let orderItems = this.state.orderItems;
        console.log("this.state.orderItems", this.state.orderItems);

        let findItem = _.find(orderItems, (n) => {
            return n.Key === item.Id;
        })
        console.log("findItem", findItem);
        let addItem;
        if (findItem) {
            const TPrice = Number(findItem.Price) * (findItem.Quantity + 1);
            addItem = {
                Key: item.Id,
                Title: item.Title,
                Quantity: findItem.Quantity + 1,
                Price: item.SubTitle,
                TotalPrice: TPrice,
                Avatar: findItem.Avatar
            }
            console.log("addItem", addItem);
            orderItems = await _.filter(orderItems, (n) => {
                return n.Key !== item.Id;
            });
            console.log("orderItems", orderItems);
            orderItems.push(addItem);
        } else {
            addItem =
                {
                    Key: item.Id,
                    Title: item.Title,
                    Quantity: 1,
                    Price: item.SubTitle,
                    TotalPrice: Number(item.SubTitle),
                    Avatar: String(item.Title).charAt(0)
                }
            orderItems.push(addItem);
        }

        this.setState({
            orderItems: orderItems,
            totalOrderItem: orderItems.length,
            totalPriceOrder: this.subtotal(orderItems)
        });
        console.log("totalPriceOrder", this.state.totalPriceOrder);
    }

    addOrderDrawer(item) {
        this.setState({ openSnackBar: true, snackBarMessage: "Added " + item.Title + " to the order list." })
        let orderItems = this.state.orderItems;
        console.log("item", item);
        console.log("this.state.orderItems", this.state.orderItems);

        let findItem = _.find(orderItems, (n) => {
            return n.Key === item.Key;
        })
        console.log("findItem", findItem);
        let orderItem;
        if (findItem) {
            const TPrice = Number(findItem.Price) * (findItem.Quantity + 1);
            orderItem = {
                Key: item.Key,
                Title: item.Title,
                Quantity: item.Quantity + 1,
                Price: item.Price,
                TotalPrice: TPrice,
                Avatar: item.Avatar
            }
            // console.log("addItem", addItem);
            // orderItems = await _.filter(orderItems, (n) => {
            //     return n.Key !== item.Key;
            // });
            // console.log("orderItems", orderItems);
            // orderItems.push(addItem);

            var index = _.indexOf(orderItems, findItem);
            orderItems.splice(index, 1, orderItem);            
        } else {
            orderItem =
                {
                    Key: item.Id,
                    Title: item.Title,
                    Quantity: 1,
                    Price: item.SubTitle,
                    TotalPrice: Number(item.SubTitle),
                    Avatar: String(item.Title).charAt(0)
                }
            orderItems.push(orderItem);
        }

        this.setState({
            orderItems: orderItems,
            totalOrderItem: orderItems.length,
            totalPriceOrder: this.subtotal(orderItems)
        });
        console.log("totalPriceOrder", this.state.totalPriceOrder);
    }
    removeOrder(item) {
        this.setState({ openSnackBar: true, snackBarMessage: "Removed one order for " + item.Title + "." });
        let orderItems = this.state.orderItems;
        console.log("item", item);
        let findItem = _.find(orderItems, (n) => {
            return n.Key === item.Key;
        });
        console.log("findItem", findItem);
        if (findItem) {
            let replaceItem;
            const TPrice = Number(findItem.Price) * (findItem.Quantity - 1);
            replaceItem = {
                Key: item.Key,
                Title: item.Title,
                Quantity: findItem.Quantity - 1,
                Price: item.Price,
                TotalPrice: TPrice,
                Avatar: findItem.Avatar
            }
            var index = _.indexOf(orderItems, findItem);
            orderItems.splice(index, 1, replaceItem);
            console.log("orderItems", orderItems);
            this.setState({
                orderItems: orderItems,
                totalOrderItem: orderItems.length,
                totalPriceOrder: this.subtotal(orderItems)
            });
            console.log("totalPriceOrder", this.state.totalPriceOrder);
        }
    }
    cancelItemOrder(item) {
        const items = this.state.orderItems;
        const updatedOrders = _.remove(items, (n) => {
            return n.Key !== item.Key
        })
        console.log(updatedOrders);
        this.setState({
            orderItems: updatedOrders,
            totalOrderItem: updatedOrders.length,
            totalPriceOrder: this.subtotal(updatedOrders)
        });
    }
    ccyFormat(num) {
        return `${num.toFixed(2)}`;
    }
    subtotal(items) {
        console.log(items);
        return items.map(({ TotalPrice }) => TotalPrice).reduce((sum, i) => Number(sum) + Number(i), 0);
    }

}
export default Order;