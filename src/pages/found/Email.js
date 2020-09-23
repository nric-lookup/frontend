import React, { useState } from 'react'

import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'

function Email({ hs3, e3, r3, onSubmit3, step, back }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <form key={3} onSubmit={hs3(onSubmit3)} hidden={step !== 3}>
        <Typography variant='body1' component='p'>
          Your email address
        </Typography>
        <TextField
          fullWidth
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

        <Button color='primary' size='small' onClick={() => setOpen(true)}>
          <b>Why do I need to provide this?</b>
        </Button>

        <Grid container direction='row' justify='space-between' alignItems='flex-end'>
          <IconButton variant='contained' color='primary' onClick={() => back()}>
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

        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>{'Why do we need your email?'}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              We will use it to send a link to delete your listing from our database. You can use it
              when the item has been claimed.
            </DialogContentText>
            <DialogContentText>We will not store or share your email address.</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant='contained' onClick={() => setOpen(false)} color='primary'>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    </>
  )
}

export default Email
