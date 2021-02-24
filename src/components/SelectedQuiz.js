import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row } from 'reactstrap';

var answers = [];

function QuizQuestion({ questionList }) {

	var [currentQuestion, setCurrentQuestion] = useState(0);

	const [showScore, setShowScore] = useState(false);

	const [score, setScore] = useState(0);

	console.log(questionList);


	const nextQuestion = () => {
		console.log("The answer held in answer " + 0 + " is " + answers[0])
		console.log("The answer held in answer " + 1 + " is " + answers[1])
		console.log("The answer held in answer " + 2 + " is " + answers[2])
		currentQuestion++;
		if (currentQuestion <= questionList.length) {
			setCurrentQuestion(currentQuestion);
		} else {
			currentQuestion--;
			setShowScore(true);
		}
	};

	const previousQuestion = () => {
		console.log("The answer held in answer " + 0 + " is " + answers[0])
		console.log("The answer held in answer " + 1 + " is " + answers[1])
		console.log("The answer held in answer " + 2 + " is " + answers[2])
		currentQuestion--;
		if (currentQuestion >= 0) {
			setCurrentQuestion(currentQuestion);
		} 
	};

	function handleInput(answer, questionNumber) {
		if(answer) {
			console.log("Updating the stored question " + questionNumber + " to be " + answer.target.value)
			answers[questionNumber] = answer.target.value
		}
	}

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
							<Row><button onClick={e => handleInput(e, currentQuestion)} value={questionList[currentQuestion].answer}>{questionList[currentQuestion].answer}</button></Row>
							<Row><button onClick={e => handleInput(e, currentQuestion)} value={questionList[currentQuestion].incorrectAnswer1}>{questionList[currentQuestion].incorrectAnswer1}</button></Row>
							<Row><button onClick={e => handleInput(e, currentQuestion)} value={questionList[currentQuestion].incorrectAnswer2}>{questionList[currentQuestion].incorrectAnswer2}</button></Row>
							<Row><button onClick={e => handleInput(e, currentQuestion)} value={questionList[currentQuestion].incorrectAnswer3}>{questionList[currentQuestion].incorrectAnswer3}</button></Row>
						</div>
						<div className='question-navigation'>
							{/* <Row><button onClick={()=> previousQuestion()}>Previous</button><button onClick={()=> nextQuestion()}>Next</button></Row> */}
							<Row>{(currentQuestion > 0) ? (<button onClick={()=> previousQuestion()}>Previous</button>) : (null)}{(currentQuestion < questionList.length-1) ? (<button onClick={()=> nextQuestion()}>Next</button>) : (null)}</Row>
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

