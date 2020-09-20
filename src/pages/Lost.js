import React from 'react'

import { useForm } from 'react-hook-form'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

function Lost() {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          id='ic_no'
          name='ic_no'
          type='number'
          margin='normal'
          variant='outlined'
          label='Enter your IC no.'
          error={errors.ic_no}
          helperText={errors.ic_no && 'Please provide a valid IC number'}
          inputRef={register({ minLength: 12, maxLength: 12, required: true })}
        />

        <Button
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          size='large'
        >
          Search
        </Button>
      </form>
    </>
  )
}

export default Lost
