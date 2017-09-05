import React from 'react';
import TextField from 'material-ui/TextField';
import BaseUrl from '../utils/config';
var $ = require("jquery");

export default class PostEdit extends React.Component{

  constructor(props){
    super(props);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setFormData = this.setFormData.bind(this);
    this.state = {
      id: null,
      title: null,
      author: null,
      content: null,
    }
  }

  componentDidMount(){
    var id = this.props.match.params.id;
    var _this = this;
    $.ajax({
      url: BaseUrl + "/api/post_detail/" + id + "/",
      type: "GET",
      success: function(data, status, xhr){
        _this.setFormData(data);
      },
      error: function(xhr, status, error){
        console.error(error);
      }
    });
  }

  setFormData(data){
    this.setState({
      id: data.id,
      title: data.title,
      author: data.author,
      content: data.content,
    });
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
    $.ajax({
      url: BaseUrl + "/api/post_update/",
      type: "POST",
      data: {
        id: this.state.id,
        title: this.state.title,
        author: this.state.author,
        content: this.state.content,
      },
      success: function(data, status, xhr){
        console.log(data);
      },
      error: function(xhr, status, error){
        console.error(error);
      }
    });
  }
  
  render(){
    return (
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
