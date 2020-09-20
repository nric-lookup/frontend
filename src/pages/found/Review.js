import React from 'react'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

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
        <Button
          variant='contained'
          color='primary'
          size='large'
          onClick={() => back()}
        >
          Back
        </Button>
        <Button
          type='submit'
          variant='contained'
          color='primary'
          size='large'
          onClick={() => onSubmit()}
        >
          Finish
        </Button>
      </Grid>
    </div>
  )
}

export default Review
