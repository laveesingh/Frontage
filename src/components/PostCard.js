import React from 'react';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';

export default class PostCard extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
        <Card key={this.props.post.id} >
          <CardHeader title={this.props.post.title} subtitle={this.props.post.author} />
          <CardTitle title={this.props.post.title} />
          <CardText>
            {this.props.post.content}
          </ CardText>
        </Card>
    );
  }
}
