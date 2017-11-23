import React from 'react'
import { connect } from 'react-redux'

import TestNo from './TestNo'
import TestType from './TestType'
import IntegerSpec from './IntegerSpec'
import ArraySpec from './ArraySpec'
import StringSpec from './StringSpec'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import '../styles/testgen.css'


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
                    <TestNo />
                  </Grid>
                  <Grid item lg={12} md={12} sm={12} className='grid-spec-row'>
                    <TestType />
                  </Grid>
                  <Grid item lg={12} md={12} sm={12} className='grid-spec-row'>
                    <IntegerSpec />
                  </Grid>
                  <Grid item lg={12} md={12} sm={12} className='grid-spec-row'>
                    <ArraySpec />
                  </Grid>
                  <Grid item lg={12} md={12} sm={12} className='grid-spec-row'>
                    <StringSpec />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item lg={12} md={12} sm={12} className='paper-footer'>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item lg={6} md={6} sm={6} >
          <Paper fullWidth id='left-paper'>
            <Grid container >
              <Grid item lg={12} md={12} sm={12} className='paper-header'> </Grid>
              <Grid item lg={12} md={12} sm={12} >
                <Grid container id='left-bar' >
                  <Grid item lg={12} md={12} sm={12} className='grid-spec-row'>
                    <TestNo />
                  </Grid>
                  <Grid item lg={12} md={12} sm={12} className='grid-spec-row'>
                    <TestType />
                  </Grid>
                  <Grid item lg={12} md={12} sm={12} className='grid-spec-row'>
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
      </Grid>
    )
  }
}


export default TestGen
