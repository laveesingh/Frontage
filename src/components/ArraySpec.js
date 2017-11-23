import React from 'react'
import { connect } from 'react-redux'
import { Grid, Typography, TextField, Switch } from 'material-ui'
import { FormControlLabel } from 'material-ui/Form'

import {
  ChangeArrayNoOfItems,
  ChangeArrayElementRangeFrom,
  ChangeArrayElementRangeTo,
  checkVerticalArray,
} from '../actions/testgen'

class ArraySpec extends React.Component{
  render(){
    return (
      <Grid container>
        <Grid item lg={12} md={12} sm={12} className='grid-spec-row'>
          <center>
            <Typography type='body' component='h3'>
              Array
            </Typography>
          </center>
        </Grid>
        <Grid item lg={2} md={2} sm={2} className='grid-spec-row'> </Grid>
        <Grid item lg={4} md={4} sm={4} className='grid-spec-row'>
          <Typography type='body' component='p'>
            No of items
          </Typography>
        </Grid>
        <Grid item lg={4} md={4} sm={4} >
          <TextField 
            fullWidth
            id='array-no-of-items'
            label='no of items'
            value={this.props.arrayNoOfItems}
            onChange={this.props.changeArrayNoOfItems}
          />
        </Grid>
        <Grid item lg={2} md={2} sm={2} className='grid-spec-row'> </Grid>
        <Grid item lg={2} md={2} sm={2} > </Grid>
        <Grid item lg={4} md={4} sm={4} className='grid-spec-row'>
          <Typography type='body' component='p'>
            Elements Range
          </Typography>
        </Grid>
        <Grid item lg={2} md={2} sm={2} >
          <TextField 
            id='array-element-range-from'
            value={this.props.arrayElementRangeFrom}
            onChange={this.props.changeArrayElementRangeFrom}
            label='from'
          />
        </Grid>
        <Grid item lg={2} md={2} sm={2} >
          <TextField 
            id='array-element-range-to'
            value={this.props.arrayElementRangeTo}
            onChange={this.props.changeArrayElementRangeTo}
            label='to'
          />
        </Grid>
        <Grid item lg={2} md={2} sm={2} > </Grid>

        <Grid item lg={3} md={3} sm={3} > </Grid>
        <Grid item lg={6} md={6} sm={6} >
          <FormControlLabel
            control={
              <Switch
                checked={this.props.checkedVerticalArray}
                onChange={ (event, checked) => 
                    this.props.checkVerticalArray(checked) 
                }
              />
            }
            label='vertical array output'
          />
        </Grid>
        <Grid item lg={3} md={3} sm={3} > </Grid>

      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    arrayNoOfItems: state.ArrayNoOfItems.arrayNoOfItems,
    arrayElementRangeFrom: state.ArrayElementRangeFrom.arrayElementRangeFrom,
    arrayElementRangeTo: state.ArrayElementRangeTo.arrayElementRangeTo,
    checkedVerticalArray: state.verticalArray.checkedVerticalArray,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeArrayNoOfItems: (event) => dispatch(ChangeArrayNoOfItems(event.target.value)),
    changeArrayElementRangeFrom: (event) => dispatch(ChangeArrayElementRangeFrom(event.target.value)),
    changeArrayElementRangeTo: (event) => dispatch(ChangeArrayElementRangeTo(event.target.value)),
    checkVerticalArray: (checked) => dispatch(checkVerticalArray(checked)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArraySpec)
