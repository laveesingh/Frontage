import React from 'react'
import { connect } from 'react-redux'

import { 
  Typography, Grid, Select
} from 'material-ui'
import { FormControl } from 'material-ui/Form'
import { MenuItem } from 'material-ui/Menu'

import { 
  TestTypeChange,
} from '../actions/testgen'

class TestType extends React.Component{
  render(){
    return (
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
    )
  }
}

const mapStateToProps = (state) => {
  return {
    testType: state.TestType.testType,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleTestTypeChange: (event) => dispatch(TestTypeChange(event.target.value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestType)
