import React from 'react'
import { connect } from 'react-redux'

import { Typography, Grid, TextField, Switch } from 'material-ui'
import { FormControlLabel } from 'material-ui/Form'

import { 
  noOfTestsChange, noOfTestsCheckChange,
} from '../actions/testgen'

class TestNo extends React.Component{
  render(){
    return (
      <Grid container>
        <Grid item lg={2} md={2} sm={2} > </Grid>
        <Grid item lg={4} md={4} sm={4} >
          <FormControlLabel
            control={
              <Switch
                checked={this.props.checkedNoOfTests}
                onChange={ (event, checked) => 
                    this.props.handleNoOfTestsCheckChange(checked) 
                }
              />
            }
            label='Include no of tests'
          />
        </Grid>
        <Grid item lg={4} md={4} sm={4} >
          <TextField disabled={ !this.props.checkedNoOfTests } id='no-of-tests' label='no of tests'
            value={this.props.noOfTests} fullWidth
            onChange={this.props.handleNoOfTestsChange}
          />
        </Grid>
        <Grid item lg={2} md={2} sm={2} > </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    checkedNoOfTests: state.noOfTestsCheck.checkedNoOfTests,
    noOfTests: state.noOfTests.noOfTests,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleNoOfTestsChange: (event) => dispatch(noOfTestsChange(event.target.value)),
    handleNoOfTestsCheckChange: (checked) => dispatch(noOfTestsCheckChange(checked)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestNo)
