import { combineReducers } from 'redux'
import { postListHasErrored, postListIsLoading, postListFetchDataSuccess } from './postList'
import { navbarClickBlogMenu, navbarClickToolsMenu } from './navbar'
import { testgenNOT, testgenNOTCheck, testgenTestType, testgenIntegerRangeFrom, testgenIntegerRangeTo } from './testgen'

// (import reducer_name from 'reducers/index.js' ) => here reducer_name will automatically refer to the following default export
export default combineReducers({
  //postListHasErrored,
  //postListIsLoading,
  //postListFetchDataSuccess,
  navbarClickBlogMenu,
  navbarClickToolsMenu,
  testgenNOT,
  testgenNOTCheck,
  testgenTestType,
  testgenIntegerRangeFrom,
  testgenIntegerRangeTo 
})
