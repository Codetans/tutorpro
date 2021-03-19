import React, { useState, useEffect } from 'react';
import Question from "./Question";
import Score from "./Score";

var answers = [];

function QuizQuestions({ questionList }) {

	var [currentQuestion, setCurrentQuestion] = useState(0);

	let [showScore, setShowScore] = useState(false);

	let [score, setScore] = useState(0);

	let [question, setQuestion] = useState(questionList[currentQuestion]);

	//console.log(questionList);

	useEffect(() => {
		setQuestion(questionList[currentQuestion]);
		setShowScore(score);
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
		console.log(`the answer held by ${answers[currentQuestion]}`);
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
		// for each Answer in Answers
			// questionList[answerIndex].questoinID
			// compare questionList.answer vs answers.answer
			setScore(0);

			for (let i = 0; i < answers.length; i++){
				if (questionList[i].answer == answers[i]){
					setScore(score + 1);
					console.log(score);
				}
			}	
	}

		return (
				<div className='quizFrame'>
						<div className='questionStateStatus'>
							<h3 className='solidBorder pad boxShadow'>Subject, Assessment</h3>
							<h3 className='solidBorder pad boxShadow'>Question: {currentQuestion + 1}</h3>
						</div>
						
							{question ? <Question handleInput={handleInput} question={question}/> : <div>...loading</div>}
						
						<div className='questionNavigation'>
							<div className='boxShadow solidBorder'>
								{/* <Row><button onClick={()=> previousQuestion()}>Previous</button><button onClick={()=> nextQuestion()}>Next</button></Row> */}
								{(currentQuestion > 0) ? (<button onClick={()=> previousQuestion()}>Previous</button>) : null}
								{(currentQuestion < questionList.length-1) ? (<button onClick={()=> nextQuestion()}>Next</button>) : null}
							</div>
							{(answers.length == questionList.length) ? <div className='boxShadow solidBorder'><button onClick={()=> onSubmit()}>Submit</button></div> : null}
						</div>	
						<div className='scoreSection'>
							{showScore ? <Score score={score} answers={answers}/> : null}
						</div>
				</div>
		);	
} 
export default QuizQuestions;