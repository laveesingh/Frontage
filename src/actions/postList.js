/* Following are action-creators for PostList component only */

export function postListHasErrored(bool){
  return {
    type: 'POST_LIST_HAS_ERRORED',
    hasErrored: bool
  }
}

export function postListIsLoading(bool){
  return {
    type: 'POST_LIST_IS_LOADING',
    isLoading: bool
  }
}

export function postListFetchDataSuccess(postList){
  return {
    type: 'POST_LIST_FETCH_DATA_SUCCESS',
    postList: postList
  }
}

export function postListFetchData(url){
  console.log('PostListFetchData invoked with url', url)
  return (dispatch) => {
    dispatch(postListIsLoading(true));
    fetch(url).
      then((response) => {
        if(!response.ok){
          console.log('response from server is not okay', response)
          throw Error(response.statusText);
        }
        console.log('response from server is okay', response)
        dispatch(postListIsLoading(false));
        return response;
      }).
      then((response) => {
        response = response.json()
        console.log('Got data from server: ', response)
        return response
      }).
      then((postList) => dispatch(postListFetchDataSuccess(postList))).
      catch((error) => {
        console.log('Error invoked during fetchData', error)
        dispatch(postListHasErrored(true))
      });
  }
}
