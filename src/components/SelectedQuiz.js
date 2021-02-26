import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import QuizQuestions from './QuizQuestions'
import SetupQuiz from './SetupQuiz'


function SelectedQuiz() {

	const [questionList, setQuestionList] = useState([]);

	// http://localhost:8080/assessment/questions 
	useEffect(() => {
		async function fetchData() {
			const response = await axios.post(`http://localhost:8080/assessment/questions`, {
				"assessmentID": 1,
			})
				.then(response => {
					console.log(response.data)
					setQuestionList(response.data)
				})
		}
		fetchData();
	}, []);
	//if [], run once when SelectedQuiz loads, and don't run again
	return (
		<div>
			{questionList && <SetupQuiz questionList={questionList} />}
		</div>
	)
}

export default SelectedQuiz;

