
import React from 'react';
import { Switch, Route } from 'react-router-dom'

import ListStaff from './liststaff';
import AddStaff from './addstaff';
import EditStaff from './editstaff';

class Staffs extends React.Component {
  render() {
    return <>
      <Switch>
          <Route exact path="/dashboard/staff" component={ListStaff} />
          <Route path="/dashboard/staff/add" component={AddStaff} />
          <Route path="/dashboard/staff/:id" component={EditStaff} />
      </Switch>
    </>
  }
}
export default Staffs