import React from 'react'
import { Button } from 'react-bootstrap'

export default function SubmitBtn({
  className = '',
  title = 'Save',
  disabled = false,
  ...props
}) {
  return (
    <div className="text-center">
      <Button
      className={`submit-btn ${className}`}
      variant='brown'
      disabled={disabled}
      type='submit'
      {...props}
    >
      {title}
    </Button>
    </div>
  )
}
