import React from 'react'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

function Result({ title, message, button, to, back }) {
  return (
    <Box>
      <Typography variant='h3' component='h3' color='primary'>
        <b>{title}</b>
      </Typography>
      <Box my={2}>
        <Typography variant='body2' component='p'>
          {message}
        </Typography>
      </Box>

      {to && (
        <Button fullWidth variant='contained' color='primary' href={to} target='_blank'>
          {button}
        </Button>
      )}

      {back && (
        <Button fullWidth variant='contained' color='primary' onClick={() => back()}>
          {button}
        </Button>
      )}
    </Box>
  )
}

export default Result
