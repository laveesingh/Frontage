import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
} from 'react-router-dom';
import Base from './components/Base';
import Home from './components/Home';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';

import './App.css';

class App extends React.Component {
  render() {
    return (
        <Router >
          <div>
            <Base />
            <Route path="/" component={Home} />
            <Route path="/posts/" component={PostList} />
            <Route path="/post/:id" component={PostDetail} />
          </div>
        </Router>
    );
  }
}

export default App;
