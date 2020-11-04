import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SideNav from './SideNav';
import MainContentPanel from './MainContentPanel';
import '../stylesheets/main.scss';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'reactstrap';

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
      <Container>
        <Row id="dash_header">
            <Header />
        </Row>
        <Row>
            <Col id="dash_side_nav">
                <SideNav />
            </Col>
            <Col id="dash_main_content">
                <MainContentPanel />
            </Col>
        </Row>
        <Row id="dash_footer">
            <Footer />
        </Row>

      </Container>
    );
  }
}

export default withRouter(Dashboard);