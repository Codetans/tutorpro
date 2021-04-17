import React from 'react'
import { Jumbotron, Button } from 'reactstrap';

const styles = {
    container: {
        backgroundColor: 'rgb(220,220,220)',
        height: '95%'
    },
    Jumbotron: {
        height: '100%'
    }
  }

function Resources(props) {
    return (
        <Jumbotron style={styles.Jumbotron}>
            <h1 className="display-5">Welcome, {props.userName}.</h1>
            <p>Here are some resources to help you</p>
            <p className="lead">
            </p>
        </Jumbotron>
    ) 
}

export default Resources;