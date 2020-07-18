import React from 'react'
import { Formik, Form, Field } from 'formik'
import FormField from '../../../../components/FormField';
import SubmitBtn from '../../../../components/SubmitBtn';
import { createNotification } from '../../../../actions';
import { history }  from '../../../../index';

export default function AddLeadForm({
  fields = [],
  buttonLabel = 'Submit',
  submitAction = () => {},
  ...props
}) {
  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await submitAction(values);
      createNotification('success', response.message);
      history.push('/dashboard/leads')
      window.location.reload(); 
    } catch (error) {
      createNotification('error', error.message);
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className='login-user'>
      <header className='text-center title'>
        <h2>{props.title}</h2>
      </header>
      <Formik {...props} onSubmit={onSubmit}>
        {({ isValid, isSubmitting, errors }) => (
          <Form noValidate>
            {fields.map((field, i) => (
              <Field key={i} component={FormField} {...field} />
            ))}
            {!!errors && !!errors.submitError && (
              <div className='text-danger'>{errors.submitError}</div>
            )}
            <SubmitBtn
              title={buttonLabel}
              disabled={!isValid || isSubmitting}
              className={props.submitStyle}
            />
          </Form>
        )}
      </Formik>
    </div>
  )
}
