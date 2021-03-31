import React, { useState, useEffect } from 'react';
import Question from "./Question";
import Score from "./Score";

var answers = [];

function QuizQuestions(props) {

	var [currentQuestion, setCurrentQuestion] = useState(0);

	let [question, setQuestion] = useState(props.questionList[currentQuestion]);

	useEffect(() => {
		setQuestion(props.questionList[currentQuestion]);
	},);

	const nextQuestion = () => {
		// console.log("The answer held in answer " + 0 + " is " + answers[0])
		// console.log("The answer held in answer " + 1 + " is " + answers[1])
		// console.log("The answer held in answer " + 2 + " is " + answers[2])
		currentQuestion++;
		if (currentQuestion <= props.questionList.length) {
			setCurrentQuestion(currentQuestion);
			setQuestion(currentQuestion);
		} 
	};

	const previousQuestion = () => {
		// console.log(`the answer held by ${answers[currentQuestion]}`);
		currentQuestion--;
		if (currentQuestion >= 0) {
			setCurrentQuestion(currentQuestion);
		} 
	};

	function handleInput(selectedAnswer) {
		if(selectedAnswer) {
			//console.log("Updating the stored question to be " + selectedAnswer)
			answers[currentQuestion] = selectedAnswer;
		}
	}

	function onSubmit(){
		let x = 0;

		for (let i = 0; i < answers.length; i++){
			if (props.questionList[i].answer == answers[i]){
				x += 1;
			}
		}	
		{props.setScoreData(x, props.questionList.length)}
		answers = [];
		{props.changeMode("showScore")}
	}
		return (
				<div className='quizFrame'>
						<div className='questionStateStatus'>
							<h3 className='solidBorder pad boxShadow'>Subject, Assessment</h3>
							<h3 className='solidBorder pad boxShadow'>Question: {currentQuestion + 1}</h3>
						</div>
							{question ? <Question handleInput={handleInput}
								question={question} answers={answers} currentQuestion={currentQuestion}/> : <div>...loading</div>}
						<div className='questionNavigation'>
							<div className='boxShadow solidBorder'>
								{(currentQuestion > 0) ? (<button onClick={()=> previousQuestion()}>Previous</button>) : null}
								{(currentQuestion < props.questionList.length-1) ? (<button onClick={()=> nextQuestion()}>Next</button>) : null}
							</div>
							{<div className='boxShadow solidBorder'><button onClick={()=> {onSubmit()}}>Submit</button></div>}
						</div>	
				</div>
		);	
} 
export default QuizQuestions;