import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button, ButtonGroup } from 'reactstrap';

const styles = {
  container: {
      backgroundColor: 'rgb(220,220,220)',
      height: '90%'
  },
  row: {
      height: '100%'
  }
}

class Footer extends Component {

  render() {
    return (
      <Container fluid style={styles.container}>
        <Row style={styles.row}>
          <Col xs="0">
            <ButtonGroup>
              <Button>About</Button>
              <Button>Contact</Button>
              <Button>Help</Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Footer;