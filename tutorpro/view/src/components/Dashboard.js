import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedOut: false
    }
  }

  logout = () => {
    localStorage.removeItem("token");
    this.setState({
      loggedOut: true
    })
  }
  render() {
    if(this.state.loggedOut) {
      return <Redirect to="/" />
    }
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <h1>Welcome to the Dashboard</h1>
        <br />
        <br />
        <br />
        <br />
        <button onClick={this.logout}>Log Out</button>
      </div>
    );
  }
}

export default withRouter(Dashboard);