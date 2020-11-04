import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

const styles = {
  container: {
      backgroundColor: 'rgb(220,220,220)',
      height: '95%'
  },
  Jumbotron: {
      height: '100%'
  }
}

class MainContentPanel extends Component {

  render() {
    return (
      <Container style={styles.container}>
        <Jumbotron style={styles.Jumbotron}>
            <h1 className="display-5">Begin your assessment</h1>
            <p className="lead">This is an assessment that will help us learn more about [insert_student_name_here].</p>
            <hr className="my-2" />
            <p>The assessment will contain questions from various subjects.</p>
            <p className="lead">
              <Button color="primary">Start</Button>
            </p>
        </Jumbotron>
      </Container>
    );
  }
}

export default MainContentPanel;