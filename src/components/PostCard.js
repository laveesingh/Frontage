import React from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';

export default class PostCard extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
        <Card key={this.props.post.id} >
          <CardContent>
            <h1>{this.props.post.id}</h1>
            <h2>{this.props.post.author}</h2>
            <h3>{this.props.post.title}</h3>
            <h4>{this.props.post.content}</h4>
          </CardContent>
        </Card>
    );
  }
}
