import React from 'react';
import {Link} from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Base extends React.Component{
  constructor(props){
    super(props);
  }
  
  render(){
    const classes = this.props.classes;
    const Styles = {
      raisedButton: {
        marginRight: "10px",
      },
    }
    return (
        <MuiThemeProvider>

        <AppBar position="static">
          <Toolbar disableGutters>
            <Button color="contrast" label="Home" primary={true} raised style={Styles.raisedButton} >
              <Link to="/" style={{ marginRight: "10px" }}> Home </Link>
            </Button>
            <Button color="contrast" label="PostList" primary={true} raised style={Styles.raisedButton} >
              <Link to="/posts/" style={{marginRight: "10px" }}> PostList </Link>
            </Button>
          </Toolbar>
        </AppBar>



        </ MuiThemeProvider>
    );
  }
}
