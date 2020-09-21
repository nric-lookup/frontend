import React from 'react'

import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

function IC({ hs1, e1, r1, onSubmit1, step, next }) {
  return (
    <>
      <form key={1} onSubmit={hs1(onSubmit1)} hidden={step !== 1}>
        <p>IC number that you found</p>
        <TextField
          fullWidth
          autoFocus
          id='ic'
          name='ic'
          type='number'
          margin='normal'
          variant='outlined'
          label='IC number'
          error={e1.ic}
          helperText={e1.ic && 'Please provide a valid IC number'}
          inputRef={r1({ minLength: 12, maxLength: 12, required: true })}
        />

        <Grid
          container
          direction='row'
          justify='space-between'
          alignItems='flex-end'
        >
          <div></div>
          <IconButton
            type='submit'
            variant='contained'
            color='primary'
            size='large'
            onClick={() => !e1.ic && next()}
          >
            <Typography variant='subtitle1' component='subtitle1'>
              Next
            </Typography>
            <ArrowForwardIosIcon />
          </IconButton>
        </Grid>
      </form>
    </>
  )
}

export default IC
