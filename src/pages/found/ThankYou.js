import React from 'react'

function ThankYou({ step }) {
  return (
    <div hidden={step !== 5}>
      <p>Thank You</p>
    </div>
  )
}

export default ThankYou
