
export function testgenNOTChange(noOfTests){
  return {
    type: 'TESTGEN_NOT_CHANGE',
    noOfTests
  }
}

export function testgenNOTCheckChange(checked){
  return {
    type: 'TESTGEN_NOT_CHECK_CHANGE',
    checked
  }
}

export function testgenTestTypeChange(value){
  return {
    type: 'TESTGEN_TEST_TYPE_CHANGE',
    value
  }
}

export function testgenChangeIntegerRangeFrom(value){
  return {
    type: 'TESTGEN_CHANGE_INTEGER_RANGE_FROM',
    value
  }
}

export function testgenChangeIntegerRangeTo(value){
  return {
    type: 'TESTGEN_CHANGE_INTEGER_RANGE_TO',
    value
  }
}

