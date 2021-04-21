import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Container } from 'reactstrap';

const SideNav = (props) =>  {
    return (
        <div className="sideNav">
            <ListGroup className="mx-auto">
                <ListGroupItem tag="a" href="#" action onClick={() => {props.changeMode("welcome")}}>Welcome</ListGroupItem>
                <ListGroupItem tag="a" href="#" action onClick={() => {props.changeMode("profile")}}>My Profile</ListGroupItem>
                <ListGroupItem tag="a" href="#" action onClick={() => {props.changeMode("quiz")}}>Take Quiz</ListGroupItem>
                <ListGroupItem tag="a" href="#" action>Tutorials</ListGroupItem>
                {(props.userType !== "student") ? (
                    <ListGroupItem tag="a" href="#" action onClick={() => {props.changeMode("createquiz")}}>Create Quiz</ListGroupItem>) : (null)}
                {(props.userType !== "student") ? (
                    <ListGroupItem tag="a" href="#" action onClick={() => {props.changeMode("assignquiz")}}>Assign Quiz</ListGroupItem>) : (null)}
                <ListGroupItem tag="a" href="#" action onClick={() => {props.changeMode("resources")}}>Resources</ListGroupItem>
                <ListGroupItem tag="a" href="#" action>Find a Tutor</ListGroupItem>
            </ListGroup>
        </div>
    )
}


export default SideNav