import React, { useState, useEffect } from 'react';
import SelectedQuiz from './SelectedQuiz';
import Profile from './Profile';
import QuizList from './QuizList';
import Welcome from './Welcome';
import Score from './Score';
import axios from 'axios';
import CreateQuizForm from './CreateQuizForm';
import CreateQuizFormSaved from './CreateQuizFormSaved';
import Resources from './Resources';
import AssignQuiz from './AssignQuiz';
import URL from '../url.js'

const MainContentPanel = (props) => {

  const [score, setScore] = useState(0);
  const [quizLength, setQuizLength] = useState(0);
  const [assessmentList, setAssessmentList] = useState([]);
  const [quizId, setQuizId] = useState(0);
  const [quizName, setQuizName] = useState('');
  const [allQuestions, setAllQuestions] = useState([]);

  const [newQuizName, setNewQuizName] = useState('');
  const [newQuizSubject, setNewQuizSubject] = useState('');
  const [newQuizDescription, setNewQuizDescription] = useState('');
  
  function setScoreData(score, quizLength) {
    setScore(score);
    setQuizLength(quizLength);
  }

  function setSelectedQuiz(clickedQuizId, clickedQuizName) {
    setQuizId(clickedQuizId);
    setQuizName(clickedQuizName);
    props.changeMode("selectedQuiz")
  }

  function createQuizData(newQuizName, newQuizDescription, newQuizSubject) {
    setNewQuizName(newQuizName);
    setNewQuizDescription(newQuizDescription);
    setNewQuizSubject(newQuizSubject);
  }

  useEffect(() => {
		async function fetchData() {
			await axios.get(`${URL}assessment/getStudentAssessments?studentID=${props.userId}`)
				.then(response => {
					setAssessmentList(response.data);
				})

        await axios.get(`${URL}question/getAllQuestions`)
				.then(questions => {
					setAllQuestions(questions.data)
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
        {props.mode === "createquiz" && <CreateQuizForm 
                                          userName={props.userName}
                                          questions={allQuestions}
                                          changeMode={props.changeMode}
                                          createQuizData={createQuizData}/>}
        {props.mode === "createquizsaved" && <CreateQuizFormSaved
                                              newQuizName={newQuizName}
                                              newQuizSubject={newQuizSubject}
                                              newQuizDescription={newQuizDescription}
                                              changeMode={props.changeMode}/>}
        {props.mode === "resources" && <Resources userName={props.userName}/>}
        {props.mode === "assignquiz" && <AssignQuiz/>}
    </div>
  );
}

export default MainContentPanel;