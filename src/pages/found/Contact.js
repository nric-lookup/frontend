import React from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

function Contact({ hs2, e2, r2, onSubmit2, step, next, back }) {
  return (
    <>
      <form key={2} onSubmit={hs2(onSubmit2)} hidden={step !== 2}>
        <p>Your contact info</p>
        <TextField
          fullWidth
          id='type'
          name='type'
          type='text'
          margin='normal'
          variant='outlined'
          label='Enter IC number that you found'
          error={e2.type}
          helperText={e2.type && 'Please provide a valid IC number'}
          inputRef={r2()}
        />

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
            onClick={() => next()}
          >
            Next
          </Button>
        </Grid>
      </form>
    </>
  )
}

export default Contact
