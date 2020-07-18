
import React from 'react';
import { checkAuth } from '../../actions';

import { Link } from 'react-router-dom'

class Dashboard extends React.Component {
  render() {
    const auth = checkAuth();
    return <>
            <Link  className={auth.is_staff? 'btn btn-success':'btn btn-success disabled'} to='/dashboard/leads' >
                Leads
            </Link>
            <Link  className={auth.is_super_admin?'btn btn-success':'btn btn-success disabled'} to='/dashboard/staff' >
                Staff
            </Link>
    </>
  }
}
export default Dashboard