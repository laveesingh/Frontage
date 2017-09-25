/* Following are reducers for PostList component only */

export function postListHasErrored(state=false, action){
  console.log('postListHasErrored reducer invoked for action:', action)
  switch(action.type){
    case 'POST_LIST_HAS_ERRORED':
      return action.hasErrored;
    default:
      return state;
  }
}


export function postListIsLoading(state=false, action){
  console.log('postListIsLoading reducer invoked for action:', action)
  switch(action.type){
    case 'POST_LIST_IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}


export function postListFetchDataSuccess(state=[], action){
  console.log('postListFetchDataSuccess reducer invoked for action:', action)
  switch(action.type){
    case 'POST_LIST_FETCH_DATA_SUCCESS':
      return action.postList;
    default:
      return state;
  }
}
