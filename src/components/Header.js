import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge, ButtonGroup, Modal, ModalBody, ModalFooter, ModalHeader, CardImg } from 'reactstrap'
import { Button } from 'reactstrap';
import About from "./About";
import logo_pic from "./assets/tutorpro_logo.png"
import "../stylesheets/headerstyle.css"

const Header = (props) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <>
            <div className="page_header">
                <div>
                    <CardImg top width="10%" className="photo" src={logo_pic} alt="TutorPro Logo" />
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