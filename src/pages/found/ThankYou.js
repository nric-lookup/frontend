import React from 'react'

import Typography from '@material-ui/core/Typography'

function ThankYou({ step }) {
  return (
    <div hidden={step !== 5}>
      <Typography variant='h5' component='h5' align=''>
        Thank You
      </Typography>
      <Typography variant='body2' component='p' align=''>
        We appreciate your kindness. Please verify the claimer when they’ve
        contacted you.
      </Typography>
    </div>
  )
}

export default ThankYou
