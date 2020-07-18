
import React from 'react';
import { getStaffs, deleteStaff } from '../../../actions';
import Table from 'react-bootstrap/Table';
import './staff.scss';
import { Link } from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb';

class Staffs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: []
    };
  }

  async componentDidMount(){
        try {
          const staffs = await getStaffs();
          this.setState({
            isLoaded: true,
            items: staffs.data
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
    const deletestaff = async (id) =>{
      await deleteStaff(id);
      this.componentDidMount()
    }
    const { error, isLoaded, items } = this.state;
    console.log(error, isLoaded)
    return <>
    <Breadcrumb>
        <Breadcrumb.Item href="/dashboard">Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item active>Staffs</Breadcrumb.Item>
    </Breadcrumb>
        <h2>
          Staffs Page
          <Link to='/dashboard/staff/add' className="float-right btn btn-success">
                Add new Staff
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
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          { 
            items.length === 0 &&
            <tr >
              <td colSpan="5" className="text-center">No staff added</td>
            </tr>
          }
          
          {items.map((row, index) => (
            <tr key={index}>
              <td> {row.id} </td>
              <td> {row.first_name} </td>
              <td> {row.last_name} </td>
              <td> {row.username} </td>
              <td className="actions">
                <Link to={`/dashboard/staff/${row.id}`} className="btn btn-sm btn-success">
                    Edit
                </Link>
                <span className="btn btn-sm btn-danger delete" onClick={()=>deletestaff(row.id)}>Delete</span>
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
export default Staffs