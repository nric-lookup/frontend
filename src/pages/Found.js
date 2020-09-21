import React, { useState } from 'react'

import { useForm } from 'react-hook-form'

import IC from './found/IC'
import Contact from './found/Contact'
import Email from './found/Email'
import Review from './found/Review'
import ThankYou from './found/ThankYou'

function Found() {
  const [step, setStep] = useState(1)

  const [ic, setIc] = useState('')
  const [email, setEmail] = useState('')
  const [type, setType] = useState('telegram')
  const [info, setInfo] = useState('')

  const next = () => setStep(() => step + 1)
  const back = () => setStep(() => step - 1)

  const config = { mode: 'onBlur' }
  const { register: r1, handleSubmit: hs1, errors: e1 } = useForm(config)
  const { register: r2, handleSubmit: hs2, errors: e2 } = useForm(config)
  const { register: r3, handleSubmit: hs3, errors: e3 } = useForm(config)

  const onSubmit1 = ({ ic }) => {
    setIc(ic)
    next()
  }
  const onSubmit2 = ({ info }) => {
    setInfo(info)
    next()
  }
  const onSubmit3 = ({ email }) => {
    setEmail(email)
    next()
  }

  const onSubmit = () => {
    alert(`${ic} ${email} ${type}`)
    next()
  }

  return (
    <>
      <IC hs1={hs1} onSubmit1={onSubmit1} step={step} e1={e1} r1={r1} />

      <Contact
        hs2={hs2}
        onSubmit2={onSubmit2}
        step={step}
        e2={e2}
        r2={r2}
        back={back}
        info={info}
        setInfo={setInfo}
        type={type}
        setType={setType}
      />

      <Email
        hs3={hs3}
        onSubmit3={onSubmit3}
        step={step}
        e3={e3}
        r3={r3}
        back={back}
      />

      <Review
        step={step}
        onSubmit={onSubmit}
        back={back}
        ic={ic}
        type={type}
        info={info}
        email={email}
      />

      <ThankYou step={step} />
    </>
  )
}

export default Found
