import React from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

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
          label='Enter IC number that you found'
          error={e3.email}
          helperText={e3.email && 'Please provide a valid IC number'}
          inputRef={r3()}
        />
        <Button
          fullWidth
          variant='contained'
          color='primary'
          size='large'
          onClick={() => back()}
        >
          Back
        </Button>
        <br />
        <Button
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          size='large'
          onClick={() => next()}
        >
          Finish
        </Button>
      </form>
    </>
  )
}

export default Email
