import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import LockIcon from '@material-ui/icons/LockOutlined';
import Button from '@material-ui/core/Button';

// import { ADODB } from 'node-adodb';

import Home from './component/Home';
import './App.css';

const styles = {
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    padding: 10
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      IsLoggedIn: false,
    }
  }

  componentDidMount() {
    // alert("componentDidMount");
    // const ADODB = require('node-adodb');
    // const connection = ADODB.open('Provider=Microsoft.ACE.OLEDB.12.0;Data Source=C:\Users\richard.mendoza\Downloads\OrderTaker_db\OrderTaker.mdb;');
   
  }

  render() {
    const { IsLoggedIn } = this.state;
    if (IsLoggedIn) {
      return (
        <main className={styles.main}>
          <Home />
        </main>
      );
    }
    return (
      <main className={styles.main}>
        <CssBaseline />
        <AppBar position="static" title="LogIn">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Log In
          </Typography>
          </Toolbar>
        </AppBar>
        <Grid container direction="column" justify="center" alignItems="center" className={"container"}>
          <Grid item xs={12} md={4}>
            <Avatar className={"avatarRed"}>
              <LockIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
          </Grid>
        </Grid>
        <Grid container direction="column" justify="center" alignItems="stretch" className={'container'}>
          <Grid item xs={12}>
            <TextField
              label="User Name"
              value={this.state.username}
              onChange={this.handleChange('username')}
              margin="normal"
              fullWidth
              required={true}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='Password'
              type='password'
              value={this.state.password}
              onChange={this.handleChange('password')}
              margin="normal"
              fullWidth
              required={true}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="center" alignItems="stretch" >
              <Button variant="contained" color="primary" onClick={this.handleSubmit.bind(this)}>Log In</Button>
            </Grid>
          </Grid>
        </Grid>
      </main>
    );
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  handleSubmit() {
    this.setState({ IsLoggedIn: true });
  }
}

export default App;
