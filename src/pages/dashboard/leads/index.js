
import React from 'react';
import { Switch, Route } from 'react-router-dom'

import ListLeads from './listleads';
import AddLead from './addlead';
import EditLead from './editlead';

class Leads extends React.Component {
  render() {
    return <>
            <Switch>
                <Route exact path="/dashboard/leads" component={ListLeads} />
                <Route path="/dashboard/leads/add" component={AddLead} />
                <Route path="/dashboard/leads/:id" component={EditLead} />
            </Switch>
    </>
  }
}
export default Leads