import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuizQuestions from './QuizQuestions'
// import SetupQuiz from './SetupQuiz'


function SelectedQuiz(props) {

	const [questionList, setQuestionList] = useState([]);

	//http://localhost:8080/assessment/questions
	useEffect(() => {
		async function fetchData() {
			const response = await axios.post(`http://localhost:8080/assessment/questions`, {
				"assessmentID": 1, //make this dynamic
			})
				.then(response => {
					setQuestionList(response.data)
				})
		}
		fetchData();
	}, []);

	//console.log(questionList);

	//if [], run once when SelectedQuiz loads, and don't run again
	return (
		<div>
			{questionList && <QuizQuestions questionList={questionList} changeMode={props.changeMode} setScoreData={props.setScoreData}/>}
		</div>
	)
}

export default SelectedQuiz;

