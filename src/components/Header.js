import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Badge, ButtonGroup, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'
import { Button } from 'reactstrap';
import About from "./About";

const Header = (props) =>  {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

  return (
      <>
          <div className="page_header">
                <div>
                    <Badge className="badge" color="secondary">TutorPro</Badge>
                </div>
                <div>
                    <ButtonGroup className="marginRight badge">
                        <Button onClick={toggle}>About</Button>
                        <Modal isOpen={modal} toggle={toggle} className="modal-lg">
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
                    <Button color="primary" onClick={props.logOut}>Log Out</Button>
                </div>
          </div>
      </>
  );
}

export default Header