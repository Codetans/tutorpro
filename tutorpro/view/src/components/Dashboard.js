import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SideNav from './SideNav';
import MainContentPanel from './MainContentPanel';

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
        <Header />
        <SideNav />
        <MainContentPanel />
        <Footer />
      </div>
    );
  }
}

export default withRouter(Dashboard);