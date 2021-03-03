import React, { useState, useEffect } from 'react';
import Question from "./Question";

var answers = [];

function QuizQuestions({ questionList }) {

	var [currentQuestion, setCurrentQuestion] = useState(0);

	const [showScore, setShowScore] = useState(false);

	const [score, setScore] = useState(0);

	let [question, setQuestion] = useState(questionList[currentQuestion]);

	//console.log(questionList);

	useEffect(() => {
		setQuestion(questionList[currentQuestion]);
	},);

	const nextQuestion = () => {
		// console.log("The answer held in answer " + 0 + " is " + answers[0])
		// console.log("The answer held in answer " + 1 + " is " + answers[1])
		// console.log("The answer held in answer " + 2 + " is " + answers[2])
		currentQuestion++;
		if (currentQuestion <= questionList.length) {
			setCurrentQuestion(currentQuestion);
			setQuestion(currentQuestion);
		} else {
			setShowScore(true);
		}
	};

	const previousQuestion = () => {
		// console.log("The answer held in answer " + 0 + " is " + answers[0])
		// console.log("The answer held in answer " + 1 + " is " + answers[1])
		// console.log("The answer held in answer " + 2 + " is " + answers[2])
		currentQuestion--;
		if (currentQuestion >= 0) {
			setCurrentQuestion(currentQuestion);
		} 
	};

	function handleInput(answer, questionNumber) {
		if(answer) {
			// console.log("Updating the stored question " + questionNumber + " to be " + answer.target.value)
			answers[questionNumber] = answer.target.value
		}
	}

	return (
		<div className='quizFrame'>
			<div className='questionStateStatus'>
				<h3 className='solidBorder pad boxShadow'>Subject, Assessment</h3>
				<h3 className='solidBorder pad boxShadow'>Question Number</h3>
			</div>
			{question ? <Question question={question}/> : <div>...loading</div>}
			<div className='questionNavigation'>
				<div className='boxShadow solidBorder'>
					{/* <Row><button onClick={()=> previousQuestion()}>Previous</button><button onClick={()=> nextQuestion()}>Next</button></Row> */}
					{(currentQuestion > 0) ? (<button onClick={()=> previousQuestion()}>Previous</button>) : null}{(currentQuestion < questionList.length-1) ? (<button onClick={()=> nextQuestion()}>Next</button>) : null}
				</div>
				<div className='boxShadow solidBorder'><p>Submit button</p></div>
			</div>
		</div>
	);
}
export default QuizQuestions;