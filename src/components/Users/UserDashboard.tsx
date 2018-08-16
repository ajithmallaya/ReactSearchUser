import * as React from 'react';

import { AccordionItem, AccordionItemTitle } from 'react-accessible-accordion';

import { User } from '../../models/User';

import UserDetails from './UserDetails';

export interface NavProps {
  user: User;
  refresh: string;
}

class UserDashboard extends React.Component<NavProps, any> {

  componentWillReceiveProps(props) {
    const { refresh, user } = this.props;
    if (props.refresh !== refresh) {
      this.refreshDashboard(user);
    }
  }
  refreshDashboard = res => this.setState({ user: res });
  render() {
    const {user} = this.props;
    return (
      <AccordionItem expanded='true' role="" >
        <AccordionItemTitle
          role="button"
        >
          <div className="flex">
            <div className="tiles-heading">
              <div className="user-header">
                <span>{user.name}</span>
              </div>
              {
                <div className="accordion__arrow" role="presentation" />
              }
              <div className="user-name"><span>{user.username}</span></div>
            </div>
          </div>
          <div>
            <UserDetails
              name={user.username}
              email={user.email}
              phone={user.phone}
            />
          </div>
        </AccordionItemTitle>
      </AccordionItem>
    );
  }
}

export default UserDashboard;
