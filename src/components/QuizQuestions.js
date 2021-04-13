import React, { useState, useEffect } from 'react';
import Question from "./Question";

var answers = [];

function QuizQuestions(props) {

	var [currentQuestion, setCurrentQuestion] = useState(0);

	const nextQuestion = () => {
		currentQuestion++;
		if (currentQuestion <= props.questionList.length) {
			setCurrentQuestion(currentQuestion);
		}
	};

	const previousQuestion = () => {
		currentQuestion--;
		if (currentQuestion >= 0) {
			setCurrentQuestion(currentQuestion);
		}
	};

	function handleInput(selectedAnswer) {
		if(selectedAnswer) {
			answers[currentQuestion] = selectedAnswer;
		}
	}

	function onSubmit(){
		let x = 0;

		for (let i = 0; i < answers.length; i++){
			props.questionList[i].answers.forEach(element => {
				if(element.correct) {
					if(element.answer === answers[i]) {
						x += 1;
					}
				}
			});
		
		}	
		{props.setScoreData(x, props.questionList.length)}
		answers = [];
		{props.changeMode("showScore")}
	}
		return (
				<div className='quizFrame'>
						<div className='questionStateStatus'>
							<h3 className='solidBorder pad boxShadow'>{props.quizName}</h3>
							<h3 className='solidBorder pad boxShadow'>Question: {currentQuestion + 1}</h3>
						</div>
							{props.questionList[currentQuestion] ? <Question handleInput={handleInput}
								question={props.questionList[currentQuestion]} answers={answers} currentQuestion={currentQuestion}/> : <div>...loading</div>}
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