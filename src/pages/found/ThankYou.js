import React from 'react'

import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

function ThankYou({ step, reset }) {
  return (
    <div hidden={step !== 5}>
      <Typography variant='h3' component='h3' color='primary'>
        <b>Thank You</b>
      </Typography>
      <Box my={2}>
        <Typography variant='body2' component='p'>
          Once the item has been claimed, please use the link that we email to delete your listing.
        </Typography>
      </Box>
      <Button fullWidth variant='contained' color='primary' onClick={() => reset()}>
        OK
      </Button>
    </div>
  )
}

export default ThankYou
