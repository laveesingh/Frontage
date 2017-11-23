import React from 'react'
import { connect } from 'react-redux'

import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import TextField from 'material-ui/TextField'

import { ChangeIntegerRangeFrom, ChangeIntegerRangeTo } from '../actions/testgen'

class IntegerSpec extends React.Component{
  render(){
    return (
      <Grid container>
        <Grid item lg={12} md={12} sm={12} >
          <center>
            <Typography type='headline' component='h3'>
              Integer
            </Typography>
          </center>
        </Grid>
        <Grid item lg={12} md={12} sm={12} className='grid-spec-row'>
          <Grid container>
            <Grid item lg={2} md={2} sm={2} > </Grid>
            <Grid item lg={4} md={4} sm={4} className='grid-spec-row'>
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
    )
  }
}

const mapStateToProps = (state) => {
  return {
    integerRangeFrom: state.IntegerRangeFrom.integerRangeFrom,
    integerRangeTo: state.IntegerRangeTo.integerRangeTo,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeIntegerRangeFrom: (event) => dispatch(ChangeIntegerRangeFrom(event.target.value)),
    changeIntegerRangeTo: (event) => dispatch(ChangeIntegerRangeTo(event.target.value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IntegerSpec)
