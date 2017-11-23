
export function noOfTests(state={noOfTests:1}, action){
  switch(action.type){
    case 'NOT_CHANGE':
      return { noOfTests: action.noOfTests }
  }
  return state;
}

export function noOfTestsCheck(state={checkedNoOfTests: false}, action){
  switch(action.type){
    case 'NOT_CHECK_CHANGE':
      return { checkedNoOfTests: action.checked }
  }
  return state
}

export function TestType(state={testType: 'int'}, action){
  switch(action.type){
    case 'TEST_TYPE_CHANGE':
      return { testType: action.value}
  }
  return state
}

export function IntegerRangeFrom(state={integerRangeFrom: 0}, action){
  switch(action.type){
    case 'CHANGE_INTEGER_RANGE_FROM':
      return { integerRangeFrom: action.value }
  }
  return state
}

export function IntegerRangeTo( state={ integerRangeTo: 100 }, action){
  switch(action.type){
    case 'CHANGE_INTEGER_RANGE_TO':
      return { integerRangeTo: action.value }
  }
  return state
}

export function ArrayNoOfItems(state={arrayNoOfItems:1}, action){
  switch(action.type){
    case 'CHANGE_ARRAY_NO_OF_ITEMS':
      return { arrayNoOfItems: action.value }
  }
  return state
}

export function ArrayElementRangeTo(state={arrayElementRangeTo: 100}, action){
  switch(action.type){
    case 'CHANGE_ARRAY_ELEMENT_RANGE_TO':
      return { arrayElementRangeTo: action.value }
  }
  return state
}

export function ArrayElementRangeFrom(state={arrayElementRangeFrom: 0}, action){
  switch(action.type){
    case 'CHANGE_ARRAY_ELEMENT_RANGE_FROM':
      return { arrayElementRangeFrom: action.value}
  }
  return state
}

export function verticalArray(state={checkedVerticalArray: false}, action){
  switch(action.type){
    case 'CHECK_VERTICAL_ARRAY':
      return {checkedVerticalArray: action.value}
  }
  return state
}

export function lowercase(state={lowercaseChecked:true}, action){
  switch(action.type){
    case 'CHECK_LOWERCASE':
      return {lowercaseChecked: action.checked}
  }
  return state
}

export function uppercase(state={uppercaseChecked:false}, action){
  switch(action.type){
    case 'CHECK_UPPERCASE':
      return {uppercaseChecked: action.checked}
  }
  return state
}

export function digits(state={digitsChecked:false}, action){
  switch(action.type){
    case 'CHECK_DIGITS':
      return {digitsChecked: action.checked}
  }
  return state
}

export function symbols(state={symbolsChecked:false}, action){
  switch(action.type){
    case 'CHECK_SYMBOLS':
      return {symbolsChecked: action.checked}
  }
  return state
}

export function stringLength(state={stringLength: 1}, action){
  switch(action.type){
    case 'CHANGE_STRING_LENGTH':
      return { stringLength: action.value }
  }
  return state
}
