import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BaseUrl from '../utils/config';
import PostCard from './PostCard';

var $ = require("jquery");

export default class PostList extends React.Component{
  constructor(props){
    super(props);
    this.setPostsData = this.setPostsData.bind(this);
    this.state = {
      posts: [], 
      postCards: null,
    }
  }

  componentDidMount(){
    console.log("componentDidMount invoked");
    var _this = this;
    $.ajax({
      url: BaseUrl + "/api/post_list/",
      type: "GET",
      success: function(data, status, xhr){
        console.log("Data from server: " + JSON.stringify(data));
        _this.setState({
          posts: data.posts,
        }, function(){
          _this.setPostsData();
        });
      },
      error: function(xhr, status, error){
        console.error(error);
      }
    });
  }

  setPostsData(){
    console.log("setPostsData invoked");
    if(!this.state.posts) return;
    console.log("this.state.posts in setPostsData: " + JSON.stringify(this.state.posts));
   const mappedPostCards = this.state.posts.map( (post) => (
         <PostCard post={post} />
    ));
    this.setState({
      postCards: mappedPostCards,
    }, function(){
      console.log("State.MappedPostCards: " + JSON.stringify(this.state.postCards));
    });
  }


  render(){
    return (
        <MuiThemeProvider>
        <div>
          { this.state.postCards }
        </div>
        </ MuiThemeProvider>
    );
  }
}
