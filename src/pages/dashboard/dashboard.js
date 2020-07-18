
import React from 'react';

import { Link } from 'react-router-dom'

class Dashboard extends React.Component {
  render() {

    return <>
            <Link to='/dashboard/leads' className="btn btn-success">
                Leads
            </Link>
            <Link to='/dashboard/staff' className="btn btn-success" >
                Staff
            </Link>
    </>
  }
}
export default Dashboard