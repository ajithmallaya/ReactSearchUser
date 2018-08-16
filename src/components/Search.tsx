import * as React from 'react';
import UserDashboard from './Users/UserDashboard';
import {getAppDataById} from '../appDataUtil';


class Search extends React.Component {
  state = {
    user: {
      id: '',
      name: '',
      username: '',
      email: '',
      phone: ''
    }
  ,
    showComponent: 'false',
  };

  FetchUser = search => {
    fetch("https://api.example.com/items")
    .then(res => res.json())
    .then(
      (result) => {
        this.refreshUser(result.users,search);
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
    
  }

  refreshUser = (res,search) =>  { 
    var filteredUser = res.filter((user) =>  { user.name === search}) ;
    this.setState({user:filteredUser});
    this.refreshUserData();
 }

 refreshUserData = () => 
  this.setState({showComponent: !this.state.showComponent});

  render() {

    return (
      <React.Fragment>
        <div className="input-section">
          <p>
            <input id="searchInputText" type="text"></input>
            <button onClick={ () => this.FetchUser(getAppDataById("searchInputText"))}> Search </button>
            {this.state &&  <UserDashboard user={this.state.user} refresh={this.state.showComponent} /> 
             }
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Search;