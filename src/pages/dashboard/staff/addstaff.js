
import React from 'react';
import './staff.scss';
// import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import AddStaffForm from './forms/addstaff-form';
import { addStaff } from '../../../actions';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

class Dashboard extends React.Component {
  render() {
    const fields = [
        {
          name: 'first_name',
          label: 'FIRST NAME',
        },
        {
          name: 'last_name',
          label: 'LAST NAME',
        },
        {
          name: 'username',
          label: 'USERNAME',
        },
        {
          name: 'password',
          label: 'PASSWORD',
        },
    ];
      
    const validationSchema = Yup.object().shape({
        first_name: Yup.string().required('Required'),
        last_name: Yup.string().required('Required'),
        username: Yup.string().required('Required'),
        password: Yup.string().required('Required'),
    })
    
    const initialValues = {
        first_name: '',
        last_name: '',
        username: '',
        password:''
    }

    return <>
        <Breadcrumb>
            <Breadcrumb.Item href="/dashboard">Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item href="/dashboard/staff">Staff</Breadcrumb.Item>
            <Breadcrumb.Item active>Add Staff</Breadcrumb.Item>
        </Breadcrumb>
        <h2>
          Add Staff
        </h2>
        <div id="login">
        <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-8">
                    <div id="lead-box" className="col-md-12">
                        <AddStaffForm
                            title='Add Staff'
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            fields={fields}
                            submitAction={addStaff}
                            buttonLabel='Add Staff'
                            submitStyle='add-staff-button btn btn-success'
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  }
}
export default Dashboard