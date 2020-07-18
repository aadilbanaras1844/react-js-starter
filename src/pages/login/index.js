
import React from 'react';
import * as Yup from 'yup'

import './login.css';
// import LoginForm from './loginForm';
import LoginForm from './loginform';
import { loginUser } from '../../actions';

class Login extends React.Component {
  render() {

    const fields = [
        {
          name: 'username',
          label: 'USERNAME',
        },
        {
          name: 'password',
          type: 'password',
          label: 'PASSWORD',
        },
    ];
      
    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .required('Required'),
        password: Yup.string().required('Required'),
    })
    
    const initialValues = {
        username: 'super',
        password: 'super',
    }

    return <>
<div id="login">
        <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                    <div id="login-box" className="col-md-12">
                        {/* <LoginForm/> */}
                        <LoginForm
                            title='Log in'
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            fields={fields}
                            submitAction={loginUser}
                            buttonLabel='LOG IN'
                            submitStyle='login-button'
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
  }
}
export default Login