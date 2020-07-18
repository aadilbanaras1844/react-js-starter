import React from 'react'
import { Form } from 'react-bootstrap'
import { getIn } from 'formik'

const { Control, Group, Label } = Form

export default function FormField({
  field: { value = '', ...field } = {},
  form: { touched = {}, errors = {} } = {},
  icon,
  groupProps = {},
  handleChange,
  hintText,
  label,
  controlId,
  ...props
}) {
  const showError = !!getIn(touched, field.name) && !!getIn(errors, field.name)

  const onChange = e => {
    field.onChange(e)
    if (handleChange) {
      handleChange(e.target.value)
    }
  }

  return (
    <Group controlId={controlId || field.name}>
      {!!label && <Label className='form-label'>{label}</Label>}
      <Control
        {...field}
        value={value || ''}
        {...props}
        isInvalid={showError}
        onChange={onChange}
      />
      {!!hintText && (
        <Form.Text className='text-muted textarea-hint'>{hintText}</Form.Text>
      )}
      {!!showError && (
        <Control.Feedback type='invalid'>
          {getIn(errors, field.name)}
        </Control.Feedback>
      )}
    </Group>
  )
}
