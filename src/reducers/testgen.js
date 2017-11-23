
export function testgenNOT(state={noOfTests:1}, action){
  switch(action.type){
    case 'TESTGEN_NOT_CHANGE':
      return { noOfTests: action.noOfTests }
      break
  }
  return state;
}

export function testgenNOTCheck(state={checkedNOT: false}, action){
  switch(action.type){
    case 'TESTGEN_NOT_CHECK_CHANGE':
      return { checkedNOT: action.checked }
      break
  }
  return state
}
export function testgenTestType(state={testType: 'int'}, action){
  switch(action.type){
    case 'TESTGEN_TEST_TYPE_CHANGE':
      return { testType: action.value}
      break
  }
  return state
}

export function testgenIntegerRangeFrom(state={integerRangeFrom: 0}, action){
  switch(action.type){
    case 'TESTGEN_CHANGE_INTEGER_RANGE_FROM':
      return { integerRangeFrom: action.value }
      break
  }
  return state
}

export function testgenIntegerRangeTo( state={ integerRangeTo: 100 }, action){
  switch(action.type){
    case 'TESTGEN_CHANGE_INTEGER_RANGE_TO':
      return { integerRangeTo: action.value }
      break
  }
  return state
}
