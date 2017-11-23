import { combineReducers } from 'redux'
import { postListHasErrored, postListIsLoading, postListFetchDataSuccess } from './postList'
import { navbarClickBlogMenu, navbarClickToolsMenu } from './navbar'
import { 
  noOfTests, noOfTestsCheck, TestType, IntegerRangeFrom,
  IntegerRangeTo, ArrayNoOfItems,
  ArrayElementRangeTo, ArrayElementRangeFrom,
  verticalArray
} from './testgen'

// (import reducer_name from 'reducers/index.js' ) => here reducer_name will automatically refer to the following default export
export default combineReducers({
  //postListHasErrored,
  //postListIsLoading,
  //postListFetchDataSuccess,
  navbarClickBlogMenu,
  navbarClickToolsMenu,
  noOfTests,
  noOfTestsCheck,
  TestType,
  IntegerRangeFrom,
  IntegerRangeTo,
  ArrayNoOfItems,
  ArrayElementRangeTo,
  ArrayElementRangeFrom,
  verticalArray,
})
