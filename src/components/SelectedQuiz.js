import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row } from 'reactstrap';

function QuizQuestion({ questionList }) {
	return (
		<div className='SelectedQuiz'>
			{/* {showScore && (<div className='score-section'>You scored {score} out of {}</div>)} */}
			{/* {(!showScore && questionList.length > 0) ? questionSection : null} */}
			{(questionList.length > 0) ?
				<>
					<div className='question-section'>
						<div className='question-count'>
							<Row>Question: {questionList[0].question}</Row>
							<Row>Grade Level: {questionList[0].gradeLevel}</Row>
						</div>
						<br />
						<div>
							<Row>Question: {questionList[1].question}</Row>
							<Row>Grade Level: {questionList[1].gradeLevel}</Row>
						</div>
						<div className='question-text'>{ }</div>
					</div>
					<div className='answer-section'>
						{/* {questions[currentQuestion].answerOptions.map((answerOption)=> 
					<button onClick={()=> handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>)} */}
					</div>
				</> : null}
		</div>
	);
}

function SelectedQuiz() {

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [questionList, setQuestionList] = useState([]);

	const [showScore, setShowScore] = useState(false);

	const [score, setScore] = useState(0);

	const handleAnswerButtonClick = (isCorrect) => {

		if (isCorrect === true) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questionList.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	// http://localhost:8080/assessment/questions 
	useEffect(() => {
		async function fetchData() {
			const response = await axios.post(`http://localhost:8080/assessment/questions`, {
				"assessmentID": 2,
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

