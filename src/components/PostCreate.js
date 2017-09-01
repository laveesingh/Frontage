import React from 'react';
import TextField from 'material-ui/TextField';

export default class PostCreate extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
        <div style={{ margin: "auto", width: "50%" }}>
          <TextField 
            id="title"
            label="title"
          />
          <br />
          <TextField 
            id="author"
            label="author"
          />
          <br />
          <br />
          <label>Content:</label>
          <br />
          <textarea width="80%" height="200px">
          </textarea>
        </div>
    );
  }
}
