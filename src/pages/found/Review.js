import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

function Review({ step, onSubmit, back, ic, type, info, email }) {
  return (
    <div hidden={step !== 4}>
      <p>Review</p>
      <p>{ic}</p>
      <p>{type}</p>
      <p>{info}</p>
      <p>{email}</p>
      <Grid
        container
        direction='row'
        justify='space-between'
        alignItems='flex-end'
      >
        <IconButton variant='contained' color='primary' onClick={() => back()}>
          <ArrowBackIosIcon />
          <Typography variant='subtitle1' component='span'>
            Back
          </Typography>
        </IconButton>

        <IconButton
          type='submit'
          variant='contained'
          color='primary'
          onClick={() => onSubmit()}
        >
          <Typography variant='subtitle1' component='span'>
            Finish
          </Typography>
          <ArrowForwardIosIcon />
        </IconButton>
      </Grid>
    </div>
  )
}

export default Review
