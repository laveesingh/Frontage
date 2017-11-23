
import React from 'react'
import { connect } from 'react-redux'

import { Typography, Grid, TextField, Checkbox } from 'material-ui'
import { FormControlLabel } from 'material-ui/Form'

import {
  checkLowercase, checkUppercase, checkDigits, checkSymbols,
  changeStringLength,
} from '../actions/testgen'

class StringSpec extends React.Component{
  render(){
    return (
      <Grid container>
        <Grid item lg={12} md={12} sm={12} >
          <center>
            <Typography type='headline' component='h3'>
              String
            </Typography>
          </center>
        </Grid>
        <Grid item lg={12} md={12} sm={12} >
          <Grid container>
            <Grid item lg={2} md={2} sm={2} > </Grid>
            <Grid item lg={4} md={4} sm={4} className='grid-spec-row'>
              <Typography type='body' component='p'>
                Length of string
              </Typography>
            </Grid>
            <Grid item lg={4} md={4} sm={4} >
              <TextField
                fullWidth
                id='string-length'
                value={this.props.stringLength}
                onChange={this.props.changeStringLength}
                label='string length'
              />
            </Grid>
            <Grid item lg={2} md={2} sm={2} > </Grid>
          </Grid>
        </Grid>
        <Grid item lg={12} md={12} sm={12} >
          <Grid container>
            <Grid item lg={2} md={2} sm={2} > </Grid>
            <Grid item lg={8} md={8} sm={8} >
              <Grid container>
                <Grid item lg={6} md={6} sm={6} >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.props.lowercaseChecked}
                        onChange={(event, checked) => this.props.checkLowercase(checked)}
                      />
                    }
                    label='lowercase'
                  />
                </Grid>
                <Grid item lg={6} md={6} sm={6} >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.props.uppercaseChecked}
                        onChange={(event, checked) => this.props.checkUppercase(checked)}
                      />
                    }
                    label='uppercase'
                  />
                </Grid>
                <Grid item lg={6} md={6} sm={6} >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.props.digitsChecked}
                        onChange={(event, checked) => this.props.checkDigits(checked)}
                      />
                    }
                    label='digits'
                  />
                </Grid>
                <Grid item lg={6} md={6} sm={6} >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.props.symbolsChecked}
                        onChange={(event, checked) => this.props.checkSymbols(checked)}
                      />
                    }
                    label='symbols'
                  />
                </Grid>
              </Grid>
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
    lowercaseChecked: state.lowercase.lowercaseChecked,
    uppercaseChecked: state.uppercase.uppercaseChecked,
    digitsChecked: state.digits.digitsChecked,
    symbolsChecked: state.symbols.symbolsChecked,
    stringLength: state.stringLength.stringLength,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkLowercase: (checked) => dispatch(checkLowercase(checked)),
    checkUppercase: (checked) => dispatch(checkUppercase(checked)),
    checkDigits: (checked) => dispatch(checkDigits(checked)),
    checkSymbols: (checked) => dispatch(checkSymbols(checked)),
    changeStringLength: (event) => dispatch(changeStringLength(event.target.value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StringSpec)
