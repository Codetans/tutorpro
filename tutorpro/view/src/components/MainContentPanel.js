import React from 'react';
import { Container } from 'reactstrap';
import Quiz from './Quiz';
import Welcome from './Welcome';

const styles = {
  container: {
      backgroundColor: 'rgb(220,220,220)',
      height: '95%'
  },
  Jumbotron: {
      height: '100%'
  }
}

const MainContentPanel = (props) => {
  return (
    <Container style={styles.container}>
      {props.mode == "" && <Welcome userName={props.userName}/>}
      {props.mode == "quiz" && <Quiz />}
    </Container>
  );
}

export default MainContentPanel;