import React from 'react'

import { Typography, CircularProgress, Box } from '@material-ui/core'

function Loader({ message }) {
  return (
    <>
      <Box my={3}>
        <Typography align='center' variant='body2' color='textSecondary'>
          {message}
        </Typography>
      </Box>
      <Typography align='center'>
        <CircularProgress />
      </Typography>
    </>
  )
}

export default Loader
