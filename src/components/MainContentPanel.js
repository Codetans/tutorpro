import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import SelectedQuiz from './SelectedQuiz';
import Profile from './Profile';
import QuizList from './QuizList';
import Welcome from './Welcome';
import Score from './Score';
import axios from 'axios';
import CreateQuizForm from './CreateQuizForm';

const MainContentPanel = (props) => {

  const [score, setScore] = useState(0);
  const [quizLength, setQuizLength] = useState(0);
  const [assessmentList, setAssessmentList] = useState([]);
  const [quizId, setQuizId] = useState(0);
  const [quizName, setQuizName] = useState('');
  
  function setScoreData(score, quizLength) {
    setScore(score);
    setQuizLength(quizLength);
  }

  function setSelectedQuiz(clickedQuizId, clickedQuizName) {
    setQuizId(clickedQuizId);
    setQuizName(clickedQuizName);
    props.changeMode("selectedQuiz")
  }

  useEffect(() => {
		async function fetchData() {
			await axios.get(`http://localhost:8080/assessment/getStudentAssessments?studentID=${props.userId}`, {
			})
				.then(response => {
					setAssessmentList(response.data);
				})
		}
		fetchData();
	}, []);

  return (
      <div className="dashContentContainer pullLeft">
        {props.mode === "" && <Welcome userName={props.userName}/>}
        {props.mode === "welcome" && <Welcome userName={props.userName}/>}
        {props.mode === "quiz" && <QuizList setSelectedQuiz={setSelectedQuiz} assessmentList={assessmentList} />}
        {props.mode === "profile" && <Profile userName={props.userName} userEmail={props.userEmail}/>}
        {props.mode === "selectedQuiz" && <SelectedQuiz changeMode={props.changeMode} setScoreData={setScoreData} quizId={quizId} quizName={quizName}/>}
        {props.mode === "showScore" && <Score score={score} quizLength={quizLength}/>}
        {props.mode === "createquiz" && <CreateQuizForm userName={props.userName} />}
    </div>
  );
}

export default MainContentPanel;