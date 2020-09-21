import React from 'react'

import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

function Email({ hs3, e3, r3, onSubmit3, step, next, back }) {
  return (
    <>
      <form key={3} onSubmit={hs3(onSubmit3)} hidden={step !== 3}>
        <p>Your email address</p>
        <TextField
          fullWidth
          id='email'
          name='email'
          type='email'
          margin='normal'
          variant='outlined'
          label='Email address'
          error={e3.email}
          helperText={e3.email && 'Please provide a valid IC number'}
          inputRef={r3()}
        />
        <Grid
          container
          direction='row'
          justify='space-between'
          alignItems='flex-end'
        >
          <IconButton
            variant='contained'
            color='primary'
            onClick={() => back()}
          >
            <ArrowBackIosIcon />
            <Typography variant='subtitle1' component='span'>
              Back
            </Typography>
          </IconButton>

          <IconButton
            type='submit'
            variant='contained'
            color='primary'
            onClick={() => next()}
          >
            <Typography variant='subtitle1' component='span'>
              Next
            </Typography>
            <ArrowForwardIosIcon />
          </IconButton>
        </Grid>
      </form>
    </>
  )
}

export default Email
