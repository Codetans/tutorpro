import React, { useState } from 'react';
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

const DashBoard = (props) => {
  const [mode, setMode] = useState('');

  function changeMode(selectedMode) {
    setMode(selectedMode);
  }

  return (
    <div className="DashBoard">
      <Container fluid style={styles.container}>
          <Row style={styles.headerRow}>
              <Col ><Header logOut={props.logOut}/></Col>
          </Row>
          <Row style={styles.mainRow}>
              <Col xs="4"><SideNav changeMode={changeMode} userType={props.userType}/></Col>
              <Col xs="8"><MainContentPanel userName={props.userName} userEmail={props.userEmail} mode={mode} changeMode={changeMode}/></Col>
          </Row>
          <Row style={styles.footerRow}>
              <Col><Footer>Footer</Footer></Col>
          </Row>

      </Container>
    </div>
  )
}

export default DashBoard