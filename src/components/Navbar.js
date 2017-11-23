import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'
import Menu, { MenuItem } from 'material-ui/Menu'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import '../styles/navbar.css'

import {
  navbarOpenBlogMenu, navbarCloseBlogMenu,
  navbarOpenToolsMenu, navbarCloseToolsMenu,
} from '../actions/navbar'

class Navbar extends React.Component{
  constructor(props){
    super(props)
  }
  
  render(){
    return (
      <AppBar position="static" id='appbar'>
        <Toolbar disableGutters>
          <Link to='/'>
            <Button color="primary" label="Home" primary={true} raised 
             className={{'nav-button': true, 'home-button': true}} >
             Home 
            </Button>
          </Link>
          <Button raised color='primary' className='nav-button' id='blog-button'
            aria-owns={this.props.blogMenuOpened ? 'blog-menu' : null}
            aria-haspopup='true' onClick={this.props.openBlogMenu} >
            Blog
          </Button>
          <Menu id='blog-menu' open={this.props.blogMenuOpened}
            anchorEl={document.getElementById('blog-button')}
            className='nav-menu' onRequestClose={this.props.closeBlogMenu} >
            <MenuItem onClick={this.props.closeBlogMenu}>Posts</MenuItem>
            <MenuItem onClick={this.props.closeBlogMenu}>About Me</MenuItem>
          </Menu>
          <Button color="primary" label="PostList" primary={true} raised 
            className='nav-button'>
            <Link to="/posts/"> 
              PostList 
            </Link>
          </Button>
          <Button color='primary' raised className='nav-button' id='tools-button'
            aria-owns={this.props.toolsMenuOpened ? 'tools-menu' : null}
            aria-haspopup='true' onClick={this.props.openToolsMenu} >
            Tools
          </Button>
          <Menu id='tools-menu' open={this.props.toolsMenuOpened} 
            anchorEl={document.getElementById('tools-button')}
            className='nav-menu' onRequestClose={this.props.closeToolsMenu} >
            <MenuItem onClick={this.props.closeToolsMenu}>
              <Link to='/testgen'>Testcase Generator</Link>
            </MenuItem>
            <MenuItem onClick={this.props.closeToolsMenu}>Codeforces Analyzer</MenuItem>
          </Menu>
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
    blogMenuOpened: state.navbarClickBlogMenu.blogMenuOpened,
    toolsMenuOpened: state.navbarClickToolsMenu.toolsMenuOpened
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openBlogMenu: () => dispatch(navbarOpenBlogMenu()),
    closeBlogMenu: () => dispatch(navbarCloseBlogMenu()),
    openToolsMenu: () => dispatch(navbarOpenToolsMenu()),
    closeToolsMenu: () => dispatch(navbarCloseToolsMenu())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
