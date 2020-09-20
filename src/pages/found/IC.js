import React from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

function IC({ hs1, e1, r1, onSubmit1, step, next }) {
  return (
    <>
      <form key={1} onSubmit={hs1(onSubmit1)} hidden={step !== 1}>
        <p>Lost IC number</p>
        <TextField
          fullWidth
          id='ic'
          name='ic'
          type='number'
          margin='normal'
          variant='outlined'
          label='Enter IC number that you found'
          error={e1.ic}
          helperText={e1.ic && 'Please provide a valid IC number'}
          inputRef={r1()}
        />

        <Grid
          container
          direction='row'
          justify='space-between'
          alignItems='flex-end'
        >
          <div></div>
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

export default IC
