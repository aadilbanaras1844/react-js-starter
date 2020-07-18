
import React from 'react';
import './staff.scss';
// import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import UpdateStaffForm from './forms/editstaff-form';
import { updateStaff } from '../../../actions';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { getUser } from '../../../actions';

class UpdateStaff extends React.Component {
    constructor(props) {
        super(props);
        this.id = this.props.match.params.id;
        this.state = {
          isLoaded: false,
          staff: {
              username: '',
              first_name: '',
              last_name: '',
              password: '',
          }
        };
      }
      async componentDidMount(){
        try {
          const staff = await getUser(this.id);
          this.setState({
            isLoaded: true,
            staff: staff.data
          })
        } catch (error) {
          this.setState({
            isLoaded: true,
            error: error.message
          })
        }
    }
    componentWillUnmount() {
      this.setState(null)
    }
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
          label: 'PASSWORD (Enter only if you want to change password)',
        },
    ];
      
    const validationSchema = Yup.object().shape({
        first_name: Yup.string().required('Required'),
        last_name: Yup.string().required('Required'),
        username: Yup.string().required('Required'),
        password: Yup.string()
    })
    
    let { staff } = this.state;
    const initialValues = {
        first_name: staff.first_name,
        last_name: staff.last_name,
        username: staff.username,
        password: staff.password
    };
    return <>
        <Breadcrumb>
            <Breadcrumb.Item href="/dashboard">Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item href="/dashboard/staff">Staffs</Breadcrumb.Item>
            <Breadcrumb.Item active>Update Staff</Breadcrumb.Item>
        </Breadcrumb>
        <h2>
            Update Staff
        </h2>
        <div id="login">
        <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-8">
                    <div id="lead-box" className="col-md-12">
                        {/* <LoginForm/> */}
                        <UpdateStaffForm
                            enableReinitialize={true}
                            title='Update Staff'
                            id={this.id}
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            fields={fields}
                            submitAction={updateStaff}
                            buttonLabel='Update Staff'
                            submitStyle='update-saff-button btn btn-success'
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  }
}
export default UpdateStaff