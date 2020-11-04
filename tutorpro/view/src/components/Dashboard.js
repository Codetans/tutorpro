import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SideNav from './SideNav';
import MainContentPanel from './MainContentPanel';
import { Container, Row, Col } from 'reactstrap';

const styles = {
  container: {
      height: '100vh'
  },
  headerRow: {
      height: '15%'
  },
  mainRow: {
      height: '70%'
  },
  footerRow: {
      height: '15%'
  }
}

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
      <div className="DashBoard">
            <Container fluid style={styles.container}>
                <Row style={styles.headerRow}>
                    <Col ><Header>Header</Header></Col>
                    
                </Row>
                <Row style={styles.mainRow}>
                    <Col xs="4"><SideNav>SideNav</SideNav></Col>
                    <Col xs="8"><MainContentPanel>MainContentPanel</MainContentPanel></Col>
                </Row>
                <Row style={styles.footerRow}>
                    <Col><Footer>Footer</Footer></Col>
                </Row>

            </Container>
        </div>
    );
  }
}

export default withRouter(Dashboard);