
import React from 'react';
import './leads.scss';
// import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import UpdateLeadForm from './forms/updatelead-form';
import { updateLead } from '../../../actions';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { getLead } from '../../../actions';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.id = this.props.match.params.id;
        this.state = {
          isLoaded: false,
          lead: {
              name: '',
              phone: '',
              email: '',
          }
        };
      }
      async componentDidMount(){
        try {
          const lead = await getLead(this.id);
          this.setState({
            isLoaded: true,
            lead: lead.data
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
    let { lead } = this.state;
    const initialValues = {
        name: lead.name,
        phone: lead.phone,
        email: lead.email
    };
    return <>
        <Breadcrumb>
            <Breadcrumb.Item href="/dashboard">Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item href="/dashboard/leads">Leads</Breadcrumb.Item>
            <Breadcrumb.Item active>Update Lead</Breadcrumb.Item>
        </Breadcrumb>
        <h2>
            Update Lead
        </h2>
        <div id="login">
        <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-8">
                    <div id="lead-box" className="col-md-12">
                        {/* <LoginForm/> */}
                        <UpdateLeadForm
                            enableReinitialize={true}
                            title='Update Lead'
                            id={this.id}
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            fields={fields}
                            submitAction={updateLead}
                            buttonLabel='Update Lead'
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