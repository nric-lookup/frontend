import React, { useEffect } from 'react'

import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import Link from '@material-ui/core/Link'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

function Contact({
  hs2,
  e2,
  r2,
  onSubmit2,
  step,
  next,
  back,
  type,
  setType,
  info,
  setInfo,
}) {
  useEffect(() => r2({ name: 'type' }), [r2])

  return (
    <>
      <form key={2} onSubmit={hs2(onSubmit2)} hidden={step !== 2}>
        <Typography variant='body1' component='p'>
          Your contact info
        </Typography>
        <FormControl margin='normal' fullWidth variant='outlined'>
          <InputLabel id='type'>Contact via</InputLabel>
          <Select
            native
            id='type'
            name='type'
            label='Contact via'
            defaultValue='telegram'
            onChange={(e) => setType(e.target.value)}
          >
            <option value='telegram'>Telegram</option>
            <option value='whatsapp'>WhatsApp</option>
          </Select>
        </FormControl>
        {type === 'telegram' && (
          <>
            <TextField
              fullWidth
              id='info'
              name='info'
              type='text'
              margin='normal'
              variant='outlined'
              label='Telegram username'
              error={e2.info}
              inputRef={r2()}
              value={info}
              onChange={(e) => setInfo(e.target.value)}
              helperText="Without '@'"
            />
            <Typography variant='caption' component='span'>
              Make sure it works:{' '}
              <Link href={'https://t.me/' + info} target='_blank'>
                https://t.me/{info}
              </Link>
            </Typography>
          </>
        )}
        {type === 'whatsapp' && (
          <>
            <TextField
              fullWidth
              id='info'
              name='info'
              type='text'
              margin='normal'
              variant='outlined'
              label='Phone number'
              error={e2.info}
              inputRef={r2()}
              value={info}
              onChange={(e) => setInfo(e.target.value)}
              helperText='e.g. 60123456789'
            />
            <Typography variant='caption' component='span'>
              Make sure it works:{' '}
              <Link href={'https://wa.me/' + info} target='_blank'>
                https://wa.me/{info}
              </Link>
            </Typography>
          </>
        )}

        <Grid
          container
          direction='row'
          justify='space-between'
          alignItems='flex-end'
        >
          <IconButton
            variant='contained'
            color='primary'
            onClick={() => back()}
          >
            <ArrowBackIosIcon />
            <Typography variant='subtitle1' component='span'>
              Back
            </Typography>
          </IconButton>

          <IconButton
            type='submit'
            variant='contained'
            color='primary'
            onClick={() => next()}
          >
            <Typography variant='subtitle1' component='span'>
              Next
            </Typography>
            <ArrowForwardIosIcon />
          </IconButton>
        </Grid>
      </form>
    </>
  )
}

export default Contact
