
import React from 'react';
import { checkAuth } from '../../actions';

import { Link } from 'react-router-dom'

class Dashboard extends React.Component {
  render() {
    const auth = checkAuth();
    return <div className="container text-center menu-container">
            <Link  className={auth.is_staff? 'btn btn-success menu-card':'btn btn-success menu-card disabled'} to='/dashboard/leads' >
                Leads
            </Link>
            <Link  className={auth.is_super_admin?'btn btn-success menu-card':'btn btn-success menu-card disabled'} to='/dashboard/staff' >
                Staff
            </Link>
    </div>
  }
}
export default Dashboard