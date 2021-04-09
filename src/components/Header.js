import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge, ButtonGroup, Modal, ModalBody, ModalFooter, ModalHeader, CardImg } from 'reactstrap'
import { Button } from 'reactstrap';
import About from "./About";
import logo_pic from "./assets/tutorpro_logo.png"
import "../stylesheets/headerstyle.css"
import Help from './Help';

const Header = (props) => {

    const [showAboutModal, setShowAboutModal] = useState(false);
    const toggleShowAbout = () => setShowAboutModal(!showAboutModal);
    const [showContactModal, setShowContactModal] = useState(false);
    const toggleShowContact = () => setShowContactModal(!showContactModal);
    const [showHelpModal, setShowHelpModal] = useState(false);
    const toggleShowHelp = () => setShowHelpModal(!showHelpModal);

    return (
        <>
            <div className="page_header">
                <div>
                    <CardImg top width="10%" className="photo" src={logo_pic} alt="TutorPro Logo" />
                </div>
                <div>
                    <ButtonGroup className="marginRight badge">
                        <Button onClick={toggleShowAbout}>About</Button>
                        <Modal isOpen={showAboutModal} toggle={toggleShowAbout} className="modal-lg">
                            <ModalHeader toggle={toggleShowAbout}>About</ModalHeader>
                            <ModalBody>
                                <About />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={toggleShowAbout}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                        <Button onClick={toggleShowContact}>Contact</Button>
                        <Modal isOpen={showContactModal} toggle={toggleShowContact} className="modal-lg">
                            <ModalHeader toggle={toggleShowContact}>Contact</ModalHeader>
                            <ModalBody>
                                <p>Hi this is the contact info page</p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={toggleShowContact}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                        <Button onClick={toggleShowHelp}>Help</Button>
                        <Modal isOpen={showHelpModal} toggle={toggleShowHelp} className="modal-lg">
                            <ModalHeader toggle={toggleShowHelp}>Help</ModalHeader>
                            <ModalBody>
                                <Help />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={toggleShowHelp}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                    </ButtonGroup>
                    <Button color="primary" onClick={props.logOut}>Log Out</Button>
                </div>
            </div>
        </>
    );
}

export default Header