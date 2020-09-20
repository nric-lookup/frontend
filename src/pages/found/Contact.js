import React from 'react'

import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

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
          <IconButton
            variant='contained'
            color='primary'
            size='large'
            onClick={() => back()}
          >
            <ArrowBackIosIcon />
            <Typography variant='subtitle1' component='subtitle1'>
              Back
            </Typography>
          </IconButton>

          <IconButton
            type='submit'
            variant='contained'
            color='primary'
            size='large'
            onClick={() => next()}
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

export default Contact
