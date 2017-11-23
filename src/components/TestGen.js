import React from 'react'
import { connect } from 'react-redux'

import Grid from 'material-ui/Grid'
import { FormControl, FormControlLabel, FormGroup } from 'material-ui/Form'
import TextField from 'material-ui/TextField'
import Select from 'material-ui/Select'
import Input, { InputLabel } from 'material-ui/Input'
import Menu, { MenuItem } from 'material-ui/Menu'
import Switch from 'material-ui/Switch'
import Typography from 'material-ui/Typography'
import '../styles/testgen.css'

import { 
  testgenNOTChange,
  testgenNOTCheckChange,
  testgenTestTypeChange,
  testgenChangeIntegerRangeFrom,
  testgenChangeIntegerRangeTo,
} from '../actions/testgen'

class TestGen extends React.Component{
  render(){
    return (
      <Grid container id='component-root'>
        <Grid item lg={6} md={6} sm={6} >
          <Grid container id='left-bar' >
            <Grid item lg={12} md={12} sm={12} className='grid-spec-row'>
              <Grid container>
                <Grid item lg={2} md={2} sm={2} > </Grid>
                <Grid item lg={4} md={4} sm={4} >
                  <FormControlLabel
                    control={
                      <Switch
                        checked={this.props.checkedNOT}
                        onChange={ (event, checked) => 
                            this.props.handleNOTCheckChange(checked) 
                        }
                      />
                    }
                    label='Include no of tests'
                  />
                </Grid>
                <Grid item lg={4} md={4} sm={4} >
                  <TextField disabled={ !this.props.checkedNOT } id='no-of-tests' label='no of tests'
                    value={this.props.noOfTests}
                    onChange={this.props.handleNOTChange}
                  />
                </Grid>
                <Grid item lg={2} md={2} sm={2} > </Grid>
              </Grid>
            </Grid>
            <Grid item lg={12} md={12} sm={12} className='grid-spec-row'>
              <Grid container>
                <Grid item lg={2} md={2} sm={2} > </Grid>
                <Grid item lg={4} md={4} sm={4} >
                  <Typography type='body' component='p'>
                    Testcase Type
                  </Typography>
                </Grid>
                <Grid item lg={4} md={4} sm={4} >
                  <FormControl fullWidth >
                    <Select
                      value={this.props.testType}
                      onChange={this.props.handleTestTypeChange}
                      id='test-type-select'
                    >
                      <MenuItem value='int' onClick={this.props.handleTestTypeChange}>Integer</MenuItem>
                      <MenuItem value='array' onClick={this.props.handleTestTypeChange}>Array</MenuItem>
                      <MenuItem value='string' onClick={this.props.handleTestTypeChange}>String</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item lg={2} md={2} sm={2} > </Grid>
              </Grid>
            </Grid>
            <Grid item lg={12} md={12} sm={12} className='grid-spec-row'>
              <Grid container>
                <Grid item lg={2} md={2} sm={2} > </Grid>
                <Grid item lg={4} md={4} sm={4} >
                  <Typography type='body' component='p'>
                    Integer Range
                  </Typography>
                </Grid>
                <Grid item lg={2} md={2} sm={2} >
                  <TextField 
                    id='integer-range-from'
                    value={this.props.integerRangeFrom}
                    onChange={this.props.changeIntegerRangeFrom}
                    label='from'
                  />
                </Grid>
                <Grid item lg={2} md={2} sm={2} >
                  <TextField 
                    id='integer-range-to'
                    value={this.props.integerRangeTo}
                    onChange={this.props.changeIntegerRangeTo}
                    label='to'
                  />
                </Grid>
                <Grid item lg={2} md={2} sm={2} > </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={6} md={6} sm={6} >
          Second
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    checkedNOT: state.testgenNOTCheck.checkedNOT,
    noOfTests: state.testgenNOT.noOfTests,
    testType: state.testgenTestType.testType,
    integerRangeFrom: state.testgenIntegerRangeFrom.integerRangeFrom,
    integerRangeTo: state.testgenIntegerRangeTo.integerRangeTo,

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleNOTChange: (event) => dispatch(testgenNOTChange(event.target.value)),
    handleNOTCheckChange: (checked) => dispatch(testgenNOTCheckChange(checked)),
    handleTestTypeChange: (event) => dispatch(testgenTestTypeChange(event.target.value)),
    changeIntegerRangeFrom: (event) => dispatch(testgenChangeIntegerRangeFrom(event.target.value)),
    changeIntegerRangeTo: (event) => dispatch(testgenChangeIntegerRangeTo(event.target.value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestGen)
