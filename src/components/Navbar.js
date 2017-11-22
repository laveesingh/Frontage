import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'
import Menu, { MenuItem } from 'material-ui/Menu'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import '../styles/navbar.css'

import { navbarOpenBlogMenu, navbarCloseBlogMenu } from '../actions/navbar'

class Navbar extends React.Component{
  constructor(props){
    super(props)
  }
  
  render(){
    return (
      <AppBar position="static" id='appbar'>
        <Toolbar disableGutters>
          <Button color="primary" label="Home" primary={true} raised 
             className={{'nav-button': true, 'home-button': true}} >
            <Link to="/"> Home </Link>
          </Button>
          <Button raised color='primary' className='nav-button'
            aria-owns={this.props.blogMenuOpened ? 'blog-menu' : null}
            aria-haspopup='true' onClick={this.props.openBlogMenu} >
            Blog
          </Button>
          <Menu id='blog-menu' open={this.props.blogMenuOpened}
            onRequestClose={this.props.closeBlogMenu} >
            <MenuItem onClick={this.props.closeBlogMenu}>Posts</MenuItem>
            <MenuItem onClick={this.props.closeBlogMenu}>About Me</MenuItem>
          </Menu>
          <Button color="primary" label="PostList" primary={true} raised 
            className='nav-button'>
            <Link to="/posts/"> 
              PostList 
            </Link>
          </Button>
          <Button color="primary" label="CreatePost" primary={true} raised 
            className='nav-button' >
            <Link to="/posts/create/"> 
              CreatePost 
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    blogMenuOpened: state.navbarClickBlogMenu.blogMenuOpened
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openBlogMenu: () => dispatch(navbarOpenBlogMenu()),
    closeBlogMenu: () => dispatch(navbarCloseBlogMenu())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
