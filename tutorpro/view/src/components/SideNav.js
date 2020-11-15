import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Container } from 'reactstrap';

const styles = {
    sideNavContainerStyle: {
        backgroundColor: 'rgb(220,220,220)',
        height: '95%'
    }
}

const SideNav = (props) =>  {
    return (
        <Container fluid style={styles.sideNavContainerStyle} className="mx-flex">
            <ListGroup className="mx-auto">
                <ListGroupItem tag="a" href="#" action>My Profile</ListGroupItem>
                {(props.userType !== "student") ? (<ListGroupItem tag="a" href="#" action>My Students</ListGroupItem>) : (null)}
                <ListGroupItem tag="a" href="#" action onClick={() => {props.changeMode("quiz")}}>Take Quiz</ListGroupItem>
                <ListGroupItem tag="a" href="#" action>Tutorials</ListGroupItem>
                <ListGroupItem tag="a" href="#" action>Build Your Own Quiz</ListGroupItem>
                <ListGroupItem tag="a" href="#" action>Resources</ListGroupItem>
                <ListGroupItem tag="a" href="#" action>Find a Tutor</ListGroupItem>
            </ListGroup>
        </Container>
    )
}


export default SideNav