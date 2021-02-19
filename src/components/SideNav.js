import React from 'react'
import Quiz from './Quiz'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Container } from 'reactstrap';

const SideNav = (props) =>  {
    return (
        <div className="sideNav">
            <ListGroup className="mx-auto">
                <ListGroupItem tag="a" href="#" action onClick={() => {props.changeMode("welcome")}}>Welcome</ListGroupItem>
                <ListGroupItem tag="a" href="#" action onClick={() => {props.changeMode("profile")}}>My Profile</ListGroupItem>
                {(props.userType !== "student") ? (<ListGroupItem tag="a" href="#" action>My Students</ListGroupItem>) : (null)}
                <ListGroupItem tag="a" href="#" action onClick={() => {props.changeMode("quiz")}}>Take Quiz</ListGroupItem>
                <ListGroupItem tag="a" href="#" action>Tutorials</ListGroupItem>
                <ListGroupItem tag="a" href="#" action>Build Your Own Quiz</ListGroupItem>
                <ListGroupItem tag="a" href="#" action>Resources</ListGroupItem>
                <ListGroupItem tag="a" href="#" action>Find a Tutor</ListGroupItem>
            </ListGroup>
        </div>
    )
}


export default SideNav