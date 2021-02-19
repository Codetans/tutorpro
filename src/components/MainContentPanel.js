import React from 'react';
import { Container } from 'reactstrap';
import SelectedQuiz from './SelectedQuiz';
import Profile from './Profile';
import Quiz from './Quiz';
import Welcome from './Welcome';

const MainContentPanel = (props) => {
  return (
      <div className="dashContentContainer pullLeft">
        {props.mode === "" && <Welcome userName={props.userName}/>}
        {props.mode === "welcome" && <Welcome userName={props.userName}/>}
        {props.mode === "quiz" && <Quiz changeMode={props.changeMode}/>}
        {props.mode === "profile" && <Profile userName={props.userName} userEmail={props.userEmail}/>}
        {props.mode === "selectedQuiz" && <SelectedQuiz/>}
    </div>
  );
}

export default MainContentPanel;