import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button, ButtonGroup } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import About from './About';

const styles = {
  container: {
      backgroundColor: 'rgb(220,220,220)',
      height: '90%'
  },
  row: {
      height: '100%'
  }
}

const Footer = (props) => {

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  

    return (
      <Container fluid style={styles.container}>
        <Row style={styles.row}>
          <Col xs="0">
            <ButtonGroup>
              <Button onClick={toggle}>About</Button>
                <Modal isOpen={modal} toggle={toggle}>
                  <ModalHeader toggle={toggle}>About</ModalHeader>
                    <ModalBody>
                      <About />
                    </ModalBody>
                  <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                  </ModalFooter>
                </Modal>
            <Button>Contact</Button>
            <Button>Help</Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
    );
}
export default Footer;