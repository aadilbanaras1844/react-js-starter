
import React from 'react';
import './leads.scss';
// import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import AddLeadForm from './forms/addlead-form';
import { addLead } from '../../../actions';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

class Dashboard extends React.Component {
  render() {
    const fields = [
        {
          name: 'name',
          label: 'NAME',
        },
        {
          name: 'phone',
          label: 'PHONE',
        },
        {
          name: 'email',
          label: 'EMAIL',
        },
    ];
      
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Required'),
        phone: Yup.string().required('Required'),
        email: Yup.string().required('Required').email(),
    })
    
    const initialValues = {
        name: '',
        phone: '',
        email: '',
    }

    return <>
        <Breadcrumb>
            <Breadcrumb.Item href="/dashboard">Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item href="/dashboard/leads">Leads</Breadcrumb.Item>
            <Breadcrumb.Item active>Add Lead</Breadcrumb.Item>
        </Breadcrumb>
        <h2>
          Add Lead
        </h2>
        <div id="login">
        <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-8">
                    <div id="lead-box" className="col-md-12">
                        {/* <LoginForm/> */}
                        <AddLeadForm
                            title='Add Lead'
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            fields={fields}
                            submitAction={addLead}
                            buttonLabel='Add Lead'
                            submitStyle='add-lead-button btn btn-success'
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