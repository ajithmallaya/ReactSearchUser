import * as React from 'react';

import { Accordion, AccordionItem, AccordionItemBody, AccordionItemTitle } from 'react-accessible-accordion';

export interface NavProps {
  name: string;
  email: string;
  phone: string;
}

class UserDetails extends React.Component<NavProps, any> {

  render() {
    return (
      <div>
        {
            <div
              className="user-list"
            >
              <AccordionItemBody
                className="user-subheader"
                role=""
              >
                <div className="flex user-header">
                  <div className="col-3 remitter-header">User Name</div>
                  <div className="col-3 remitter-header">Email</div>
                  <div className="col-3 remitter-header">phone</div>
                </div>
                <div className="flex">
                        <div className="col-3 remitter-value">
                          {this.props.name}
                        </div>
                        <div className="col-3 remitter-value">
                          {this.props.email}
                        </div>
                        <div className="col-3 remitter-value">
                          {this.props.phone}
                        </div>
                      </div>
              </AccordionItemBody>
           
            </div>
        }
       </div>
      
    );
  }
}

export default UserDetails;
