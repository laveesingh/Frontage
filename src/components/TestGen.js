import React from 'react'
import { connect } from 'react-redux'

import IntegerSpec from './IntegerSpec'
import ArraySpec from './ArraySpec'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import { FormControl, FormControlLabel, FormGroup } from 'material-ui/Form'
import TextField from 'material-ui/TextField'
import Select from 'material-ui/Select'
import Input, { InputLabel } from 'material-ui/Input'
import Menu, { MenuItem } from 'material-ui/Menu'
import Switch from 'material-ui/Switch'
import Typography from 'material-ui/Typography'
import '../styles/testgen.css'

import { 
  noOfTestsChange,
  noOfTestsCheckChange,
  TestTypeChange,
} from '../actions/testgen'

class TestGen extends React.Component{
  render(){
    return (
      <Grid container id='component-root'>
        <Grid item lg={6} md={6} sm={6} >
          <Paper fullWidth id='left-paper'>
            <Grid container >
              <Grid item lg={12} md={12} sm={12} className='paper-header'> </Grid>
              <Grid item lg={12} md={12} sm={12} >
                <Grid container id='left-bar' >
                  <Grid item lg={12} md={12} sm={12} className='grid-spec-row'>
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
                          value={this.props.noOfTests}
                          onChange={this.props.handleNoOfTestsChange}
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
                  <Grid item lg={12} md={12} sm={12} >
                    <IntegerSpec />
                  </Grid>
                  <Grid item lg={12} md={12} sm={12} className='grid-spec-row'>
                    <ArraySpec />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item lg={12} md={12} sm={12} className='paper-footer'>
              </Grid>
          </Grid>
          </Paper>
        </Grid>
        <Grid item lg={6} md={6} sm={6} >
          <Paper>
            Second
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    checkedNoOfTests: state.noOfTestsCheck.checkedNoOfTests,
    noOfTests: state.noOfTests.noOfTests,
    testType: state.TestType.testType,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleNoOfTestsChange: (event) => dispatch(noOfTestsChange(event.target.value)),
    handleNoOfTestsCheckChange: (checked) => dispatch(noOfTestsCheckChange(checked)),
    handleTestTypeChange: (event) => dispatch(TestTypeChange(event.target.value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestGen)
