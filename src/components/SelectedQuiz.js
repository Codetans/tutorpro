import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuizQuestions from './QuizQuestions'

function SelectedQuiz() {

	const [questionList, setQuestionList] = useState([]);

	//http://localhost:8080/assessment/questions
	useEffect(() => {
		async function fetchData() {
			const response = await axios.post(`http://localhost:8080/assessment/questions`, {
				"assessmentID": 1,
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
			{questionList && <QuizQuestions questionList={questionList} />}
		</div>
	)
}

export default SelectedQuiz;

