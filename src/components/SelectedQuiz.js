import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuizQuestions from './QuizQuestions'

function SelectedQuiz(props) {

	const [questionList, setQuestionList] = useState([]);

	//http://localhost:8080/assessment/questions
	useEffect(() => {
		async function fetchData() {
			const response = await axios.post(`http://localhost:8080/assessment/questions`, {
				"assessmentID": props.quizId
			})
				.then(response => {
					setQuestionList(response.data)
				})
		}
		fetchData();
	}, []);

	//if [], run once when SelectedQuiz loads, and don't run again
	return (
		<div>
			{questionList && <QuizQuestions
								questionList={questionList}
								changeMode={props.changeMode}
								setScoreData={props.setScoreData}
								quizName={props.quizName}/>}
		</div>
	)
}

export default SelectedQuiz;

