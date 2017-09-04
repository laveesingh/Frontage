import React from 'react';
import {Link} from 'react-router-dom';
import TextField from 'material-ui/TextField';
import BaseUrl from '../utils/config';
import Button from 'material-ui/Button';

var $ = require("jquery");

export default class PostCreate extends React.Component{
  constructor(props){
    super(props);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      title: null,
      author: null,
      content: null,
    }
  }

  handleTitleChange(event){
    this.setState({ title: event.target.value, });
  }

  handleAuthorChange(event){
    this.setState({ author: event.target.value, });
  }

  handleContentChange(event){
    this.setState({ content: event.target.value, });
  }

  handleSubmit(event){
    event.preventDefault();
    console.log("Data to be submitted: ", this.state);
    $.ajax({
      url: BaseUrl + "/api/post_create/",
      type: "POST",
      data: {
        author: this.state.author,
        title: this.state.title,
        content: this.state.content,
      },
      success: function(data, status, xhr){
        console.log(data["message"]);
      },
      error: function(xhr, status, error){
        console.error(error);
      }
    });
  }

  render(){
    return(
        <div style={{ margin: "auto", width: "50%" }}>
          <form onSubmit={this.handleSubmit}>
            <TextField id="title" label="title" onChange={this.handleTitleChange} value={this.state.title} />
            <br />
            <TextField id="author" label="author" onChange={this.handleAuthorChange} value={this.state.author} />
            <br />
            <br />
            <label>Content:</label>
            <br />
            <textarea width="80%" height="200px" onChange={this.handleContentChange} value={this.state.content} > </textarea>
            <br />
            <button type="submit" onClick={this.handleSubmit}> Submit </button>
          </form>
        </div>
    );
  }
}
