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

const Welcome = (props) => {
    return (
        <Jumbotron style={styles.Jumbotron}>
            <h1 className="display-5">Begin your assessment</h1>
            <p className="lead">This is an assessment that will help us learn more about {props.userName}.</p>
            <hr className="my-2" />
            <p>The assessment will contain questions from various subjects.</p>
            <p className="lead">
            <Button color="primary">Start</Button>
            </p>
        </Jumbotron>
    ) 
}

export default Welcome;