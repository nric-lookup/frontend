import React, { useState } from 'react'

import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

function Review({ step, onSubmit, back, ic, type, info, email }) {
  const [open, setOpen] = useState(false)

  const contactUrl = {
    url: () => {
      switch (type) {
        case 'telegram':
          return 'https://t.me/' + info
        case 'whatsapp':
          return 'https://wa.me/' + info
        default:
          return
      }
    },
  }

  const handleClose = () => setOpen(false)
  return (
    <div hidden={step !== 4}>
      <Typography variant='body1' component='p' align='center'>
        Everything correct?
      </Typography>

      <TextField
        fullWidth
        label='Lost IC number'
        value={ic}
        variant='outlined'
        margin='normal'
        InputProps={{ readOnly: true }}
      />
      <TextField
        fullWidth
        label='Your email address'
        value={email}
        variant='outlined'
        margin='normal'
        InputProps={{ readOnly: true }}
      />

      <Box component='div' mt={1}>
        <Button
          fullWidth
          size='large'
          variant='contained'
          color='primary'
          target='_blank'
          href={contactUrl.url()}
        >
          Try contact link
        </Button>
      </Box>

      <Grid container direction='row' justify='space-between' alignItems='flex-end'>
        <IconButton variant='contained' color='primary' onClick={() => back()}>
          <ArrowBackIosIcon />
          <Typography variant='subtitle1' component='span'>
            Back
          </Typography>
        </IconButton>

        <IconButton type='submit' variant='contained' color='primary' onClick={() => setOpen(true)}>
          <Typography variant='subtitle1' component='span'>
            Finish
          </Typography>
          <ArrowForwardIosIcon />
        </IconButton>
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ready to submit?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please make sure that all the information is correct and you have tested the contact
            link.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='textSecondary'>
            cancel
          </Button>
          <Button
            variant='contained'
            onClick={() => {
              onSubmit()
              setOpen(false)
            }}
            color='primary'
          >
            confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Review
