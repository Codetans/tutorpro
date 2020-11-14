import React from 'react'
import { Jumbotron, Container } from 'reactstrap';

const styles = {
    container: {
        backgroundColor: 'rgb(220,220,220)',
        height: '95%'
    },
    Jumbotron: {
        height: '100%'
    }
  }

const Quiz = (props) => {
    return (
    <Container style={styles.container}>
        <Jumbotron style={styles.Jumbotron}>
            <p>This is the quiz page</p>
        </Jumbotron>
    </Container>
    );
}
  
export default Quiz;