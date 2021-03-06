
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

export function checkVerticalArray(value){
  return {
    type: 'CHECK_VERTICAL_ARRAY',
    value
  }
}

export function checkLowercase(checked){
  return{
    type: 'CHECK_LOWERCASE',
    checked,
  }
}

export function checkUppercase(checked){
  return{
    type: 'CHECK_UPPERCASE',
    checked,
  }
}

export function checkDigits(checked){
  return{
    type: 'CHECK_DIGITS',
    checked,
  }
}

export function checkSymbols(checked){
  return{
    type: 'CHECK_SYMBOLS',
    checked,
  }
}

export function changeStringLength(value){
  return {
    type: 'CHANGE_STRING_LENGTH',
    value
  }
}
