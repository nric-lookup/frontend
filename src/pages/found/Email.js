import React from 'react'

import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

function Email({ hs3, e3, r3, onSubmit3, step, back }) {
  return (
    <>
      <form key={3} onSubmit={hs3(onSubmit3)} hidden={step !== 3}>
        <Typography variant='body1' component='p'>
          Your email address
        </Typography>
        <TextField
          fullWidth
          autoFocus
          id='email'
          name='email'
          type='email'
          margin='normal'
          variant='outlined'
          label='Email address'
          error={!!e3.email}
          helperText={!!e3.email && 'Please provide a valid email address'}
          inputRef={r3({
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            },
          })}
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

          <IconButton type='submit' variant='contained' color='primary'>
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
