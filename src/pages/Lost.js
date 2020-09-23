import React, { useState } from 'react'

import { useForm } from 'react-hook-form'
import axios from 'axios'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import Result from './Result'
import Loader from '../components/Loader'

function Lost() {
  const [result, setResult] = useState('')
  const [contact, setContact] = useState('')
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, errors } = useForm()

  const back = () => setResult('')

  const onSubmit = async ({ ic_no }) => {
    setLoading(true)
    try {
      const { data } = await axios.post('/search', { ic_no })
      setContact(data.contact_url)
      setResult('yes')
    } catch ({ response }) {
      if (response.status === 404) setResult('no')
    }
    setLoading(false)
  }

  if (loading) return <Loader message={'Looking for your IC...'} />

  return (
    <>
      {result === '' && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography variant='body1' component='p' align='center'>
            What is your IC number?
          </Typography>
          <TextField
            fullWidth
            id='ic_no'
            name='ic_no'
            type='number'
            margin='normal'
            variant='outlined'
            label='IC number'
            error={errors.ic_no}
            helperText={errors.ic_no && 'Please provide a valid IC number'}
            inputRef={register({ minLength: 12, maxLength: 12, required: true })}
          />

          <Button type='submit' fullWidth variant='contained' color='primary' size='large'>
            Search
          </Button>
        </form>
      )}

      {result === 'yes' && (
        <Result
          title='Good News'
          message='Someone has found your IC, please find a safe place to claim your item.'
          button='Claim'
          to={contact}
        />
      )}

      {result === 'no' && (
        <Result
          title="We're sorry"
          message='Nobody has found your IC, check again later just to be sure.'
          button='back'
          back={back}
        />
      )}
    </>
  )
}

export default Lost
