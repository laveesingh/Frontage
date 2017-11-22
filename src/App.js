import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import PostCreate from './components/PostCreate';
import PostEdit from './components/PostEdit';

class App extends React.Component {
  render() {
    return (
        <Router >
          <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/posts/" component={PostList} />
            <Route path="/post/:id" component={PostDetail} />
            <Route path="/posts/create/" component={PostCreate} />
            <Route path="/posts/edit/:id" component={PostEdit} />
          </div>
        </Router>
    );
  }
}

export default App;
