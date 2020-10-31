import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { Container, Row, Col, Button} from 'reactstrap';

class Header extends Component {
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
        <Row>
            <Col>
                <h1>TutorPro</h1>
            </Col>
            <Col>
                <Button id="logout_button" className="m-2" variant="Primary" onClick={this.logout}>Log Out</Button>
            </Col>
        </Row>
    );
  }
}

export default withRouter(Header);