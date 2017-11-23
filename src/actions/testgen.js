
export function noOfTestsChange(noOfTests){
  return {
    type: 'NOT_CHANGE',
    noOfTests
  }
}

export function noOfTestsCheckChange(checked){
  return {
    type: 'NOT_CHECK_CHANGE',
    checked
  }
}

export function TestTypeChange(value){
  return {
    type: 'TEST_TYPE_CHANGE',
    value
  }
}

export function ChangeIntegerRangeFrom(value){
  return {
    type: 'CHANGE_INTEGER_RANGE_FROM',
    value
  }
}

export function ChangeIntegerRangeTo(value){
  return {
    type: 'CHANGE_INTEGER_RANGE_TO',
    value
  }
}

export function ChangeArrayNoOfItems(value){
  return {
    type: 'CHANGE_ARRAY_NO_OF_ITEMS',
    value
  }
}

export function ChangeArrayElementRangeFrom(value){
  return {
    type: 'CHANGE_ARRAY_ELEMENT_RANGE_FROM',
    value
  }
}

export function ChangeArrayElementRangeTo(value){
  return {
    type: 'CHANGE_ARRAY_ELEMENT_RANGE_TO',
    value
  }
}
