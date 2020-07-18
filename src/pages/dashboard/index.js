
import React from 'react';
import './dashboard.css';
import { removeUser } from '../../actions';
import { history }  from '../../index';
import { Switch, Route } from 'react-router-dom'
import LeadsPage from './leads';
import StaffPage from './staff';
import DashboardHome from './dashboard';

class Dashboard extends React.Component {
  render() {

    const logoutUser = () => {
        removeUser();
        history.push('/login')
        window.location.reload();         
    }

    return <>
        <div className="container">
            <h2 className="text-center heading">
                Dashboard
                <button className="float-right btn btn-danger" onClick={()=>logoutUser()}>
                    Logout
                </button>
            </h2>
            <Switch>
                <Route exact path="/dashboard" component={DashboardHome} />
                <Route path="/dashboard/leads" component={LeadsPage} />
                <Route path="/dashboard/staff" component={StaffPage} />
            </Switch>
            
        </div>

    </>
  }
}
export default Dashboard