import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { createMuiTheme } from 'material-ui/styles'
import { purple, green, red } from 'material-ui/colors'
import Navbar from './components/Navbar';
import Home from './components/Home';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import PostCreate from './components/PostCreate';
import PostEdit from './components/PostEdit';
import TestGen from './components/TestGen'

const theme = createMuiTheme({
  palette: {
    primary: {
      ...green,
      500: '#37a000'
    },
    secondary: {
      ...purple,
      A400: '#00e677'
    },
    error: red,
    white: {
      500: '#ffffff'
    }
  },
  overrides:{
    MuiButton: {
      root: {
        //background: 'linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)',
        borderRadius: 2,
        border: 0,
        height: 48,
        color: 'white',
        padding: '0 20px',
        boxShadow: '0 3px 5px 2px rgba(25, 105, 135, .99)',
      }
    }
  }
})

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router >
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path='/testgen/' component={TestGen} />
              <Route exact path="/posts/" component={PostList} />
              <Route path="/post/:id" component={PostDetail} />
              <Route path="/posts/create/" component={PostCreate} />
              <Route path="/posts/edit/:id" component={PostEdit} />
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
