import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

function Review({ step, onSubmit, back, ic, type, info, email }) {
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
  return (
    <div hidden={step !== 4}>
      <Typography variant='body1' component='p'>
        Is everything correct?
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
          variant='contained'
          color='primary'
          target='_blank'
          href={contactUrl.url()}
        >
          Contact Link
        </Button>
      </Box>

      <Grid
        container
        direction='row'
        justify='space-between'
        alignItems='flex-end'
      >
        <IconButton variant='contained' color='primary' onClick={() => back()}>
          <ArrowBackIosIcon />
          <Typography variant='subtitle1' component='span'>
            Back
          </Typography>
        </IconButton>

        <IconButton
          type='submit'
          variant='contained'
          color='primary'
          onClick={() => onSubmit()}
        >
          <Typography variant='subtitle1' component='span'>
            Finish
          </Typography>
          <ArrowForwardIosIcon />
        </IconButton>
      </Grid>
    </div>
  )
}

export default Review
