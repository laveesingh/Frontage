import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { postListFetchData } from '../actions/postList'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { $SERVER } from '../utils/config'
import PostCard from './PostCard'

var $ = require('jquery')

class PostList extends React.Component{

  componentDidMount(){
    console.log('componentDidMount invoked')
    this.props.fetchData($SERVER + '/api/post_list/')
  }

  render(){
    console.log('Here are the component props:', this.props)
    if (this.props.hasErrored)
      return ( <p> Sorry! There was an error loading the posts </p> )
    if (this.props.isLoading)
      return ( <p>Loading...</p> )
    return (
        <MuiThemeProvider>
        <div>
          { this.props.postList 
            ? this.props.postList.map((post) => <PostCard post={post} key={post.id} />)
            : null
          }
          <button onClick={()=>{console.log("postList:", this.props.postList)}}>Know Props </button>
        </div>
        </MuiThemeProvider>
    );
  }
}

PostList.propTypes = {
  fetchData: PropTypes.func.isRequired,
  postList: PropTypes.array.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
  return {
    postList: state.postList,
    hasErrored: state.postListHasErrored,
    isLoading: state.postListIsLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(postListFetchData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
