
import React from 'react';
import { getLeads, deleteLead } from '../../../actions';
import Table from 'react-bootstrap/Table';
import './leads.scss';
import { Link } from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb';

class Leads extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: []
    };
  }

  async componentDidMount(){
        try {
          const leads = await getLeads();
          this.setState({
            isLoaded: true,
            items: leads.data
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
    const deletelead = async (id) =>{
      await deleteLead(id);
      this.componentDidMount()
    }
    const { error, isLoaded, items } = this.state;
    console.log(error, isLoaded)
    return <>
    <Breadcrumb>
        <Breadcrumb.Item href="/dashboard">Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item active>Leads</Breadcrumb.Item>
    </Breadcrumb>
        <h2>
          Leads Page
          <Link to='/dashboard/leads/add' className="float-right btn btn-success">
                Add new Lead
            </Link>
        </h2>

        <div id="login">
        <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-8">
                    <div id="lead-box" className="col-md-12">
                        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {items.map((row, index) => (
            <tr key={index}>
              <td> {row.id} </td>
              <td> {row.name} </td>
              <td> {row.phone} </td>
              <td> {row.email} </td>
              <td className="actions">
                <Link to={`/dashboard/leads/${row.id}`} className="btn btn-sm btn-success">
                    Edit
                </Link>
                <span className="btn btn-sm btn-danger delete" onClick={()=>deletelead(row.id)}>Delete</span>
              </td>
            </tr>
          ))}
          </tbody>
        </Table>
                    </div>
                </div>
            </div>
        </div>
    </div>

      
    </>
  }
}
export default Leads