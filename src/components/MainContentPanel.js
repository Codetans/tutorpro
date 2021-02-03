import React from 'react';
import { Container } from 'reactstrap';
import SelectedQuiz from './SelectedQuiz';
import Profile from './Profile';
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
        {props.mode === "" && <Welcome userName={props.userName}/>}
        {props.mode === "welcome" && <Welcome userName={props.userName}/>}
        {props.mode === "quiz" && <Quiz changeMode={props.changeMode}/>}
        {props.mode === "profile" && <Profile userName={props.userName} userEmail={props.userEmail}/>}
        {props.mode === "selectedQuiz" && <SelectedQuiz/>}
    </Container>
  );
}

export default MainContentPanel;