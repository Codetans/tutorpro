import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row } from 'reactstrap';

function QuizQuestion({ questionList }) {

	const [currentQuestion, setCurrentQuestion] = useState(0);

	const [showScore, setShowScore] = useState(false);

	const [score, setScore] = useState(0);

	const nextQuestion = () => {

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questionList.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	const previousQuestion = () => {

		const prevQuestion = currentQuestion - 1;
		if (prevQuestion >= 0) {
			setCurrentQuestion(prevQuestion);
		} 
	};

	return (
		<div className='SelectedQuiz'>
			{/* {showScore && (<div className='score-section'>You scored {score} out of {}</div>)} */}
			{/* {(!showScore && questionList.length > 0) ? questionSection : null} */}
			{(questionList.length > 0) ?
				<>
					<div className='question-section'>
						<div className='question-text'>
								<Row>Question {currentQuestion + 1}: {questionList[currentQuestion].question}</Row>
						</div>
						<div className='answer-section'>
							<Row><button>{questionList[currentQuestion].answer}</button></Row>
							<Row><button>{questionList[currentQuestion].incorrectAnswer1}</button></Row>
							<Row><button>{questionList[currentQuestion].incorrectAnswer2}</button></Row>
							<Row><button>{questionList[currentQuestion].incorrectAnswer3}</button></Row>
						</div>
						<div className='question-navigation'>
							<Row><button onClick={()=> previousQuestion()}>Previous</button><button onClick={()=> nextQuestion()}>Next</button></Row>
						</div>
					</div>
				</> : null}
		</div>
	);
}

function SelectedQuiz() {

	const [questionList, setQuestionList] = useState([]);

	// http://localhost:8080/assessment/questions 
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
	//if [], run once when SelectedQuiz loads, and don't run again
	return (
		<div>
			{questionList && <QuizQuestion questionList={questionList} />}
		</div>
	)
}

export default SelectedQuiz;

