import React from 'react';
import PostCard from './PostCard';
import BaseUrl from '../utils/config.js';

var $ = require("jquery");

export default class PostDetail extends React.Component{
  constructor(props){
    super(props);
    this.setPostData = this.setPostData.bind(this);
    this.state = {
      postData: null,
    }
  }

  componentDidMount(){
    const id = this.props.match.params.id;
    var url = BaseUrl + "/api/post_detail/" + id + "/"
    fetch(url).then(
      (response) => {
        this.setPostData(response)
      }
    )
    //var _this = this;
    //$.ajax({ url: BaseUrl + "/api/post_detail/" + id + "/", type: "GET", success: function(data, status, xhr){ _this.setPostData(data); }, error: function(xhr, status, error){ console.log(error); }, });
  }

  setPostData(data){
    this.setState({
      postData: ( <PostCard post={data} /> ),
    });
  }

  render(){
    return (
        <div>
          {this.state.postData}
        </div>
    );
  }
}
