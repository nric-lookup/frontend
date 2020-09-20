import React from 'react'

import Button from '@material-ui/core/Button'

function Review({ step, onSubmit, back, ic, type, info, email }) {
  return (
    <div hidden={step !== 4}>
      <p>Review</p>
      <p>{ic}</p>
      <p>{type}</p>
      <p>{info}</p>
      <p>{email}</p>
      <Button
        fullWidth
        variant='contained'
        color='primary'
        size='large'
        onClick={() => back()}
      >
        Back
      </Button>
      <Button
        type='submit'
        fullWidth
        variant='contained'
        color='primary'
        size='large'
        onClick={() => onSubmit()}
      >
        Finish
      </Button>
    </div>
  )
}

export default Review
