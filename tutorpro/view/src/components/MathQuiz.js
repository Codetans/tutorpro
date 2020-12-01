import React, { useState, useEffect } from 'react';
import classes from '../stylesheets/quizstyle.css'
import { Container, Row, Col } from 'reactstrap';

const MathQuiz = (props) => {

const [currentQuestion, setCurrentQuestion] = useState(0);

const [showScore, setShowScore] = useState(false);

const [score, setScore] = useState(0);

const handleAnswerButtonClick = (isCorrect) => {

	if(isCorrect===true){
		setScore(score + 1);
	}

	const nextQuestion = currentQuestion + 1;
	if(nextQuestion < questions.length){
		setCurrentQuestion(nextQuestion);
	} else {
		setShowScore(true);
	}
}

    const questions = [
		{
			questionText: 'What Shape has only 3 angles?',
			answerOptions: [
				{ answerText: 'Triangle', isCorrect: true },
				{ answerText: 'Hexagon', isCorrect: false },
				{ answerText: 'Cube', isCorrect: false },
				{ answerText: 'Pentagon', isCorrect: false },
			],
		},
		{
			questionText: 'What shape has only 5 sides?',
			answerOptions: [
				{ answerText: 'hexagon', isCorrect: false },
				{ answerText: 'pentagon', isCorrect: true },
				{ answerText: 'triangle', isCorrect: false },
				{ answerText: 'square', isCorrect: false },
			],
		},
		{
			questionText: 'Which makes the most sense to use to measure a phone?',
			answerOptions: [
				{ answerText: 'meter stick', isCorrect: false },
				{ answerText: 'yard stick', isCorrect: false },
				{ answerText: 'measuring tape', isCorrect: false },
				{ answerText: 'ruler', isCorrect: true },
			],
		},
		{
			questionText: 'Joe is 18 inches taller than Josh.  Josh is 50 inches tall. How tall is Joe?',
			answerOptions: [
				{ answerText: '59 in', isCorrect: false },
				{ answerText: '48 in', isCorrect: false },
				{ answerText: '68 in', isCorrect: true },
				{ answerText: '67 in', isCorrect: false },
			],
		},
		{
			questionText: 'The cat is 10 inches long and the dog is 20 inches long. How much longer is the dog than the cat?',
			answerOptions: [
				{ answerText: '10 in', isCorrect: true },
				{ answerText: '12 in', isCorrect: false },
				{ answerText: '5 in', isCorrect: false },
				{ answerText: '20 in', isCorrect: false },
			],
		},
		{
			questionText: 'If I have 3 dollars, 2 quarters and 4 pennies, how much money do I have?',
			answerOptions: [
				{ answerText: '$3.24', isCorrect: false },
				{ answerText: '$3.54', isCorrect: true },
				{ answerText: '$4.54', isCorrect: false },
				{ answerText: '$3.79', isCorrect: false },
			],
		},
		{
			questionText: 'What is 4x5?',
			answerOptions: [
				{ answerText: '20', isCorrect: true },
				{ answerText: '25', isCorrect: false },
				{ answerText: '15', isCorrect: false },
				{ answerText: '24', isCorrect: false },
			],
		},
		{
			questionText: 'What is 6/3?',
			answerOptions: [
				{ answerText: '3', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '18', isCorrect: false },
				{ answerText: '2', isCorrect: true },
			],
		},
		{
			questionText: 'subtract 386 from 620',
			answerOptions: [
				{ answerText: '324', isCorrect: false },
				{ answerText: '235', isCorrect: false },
				{ answerText: '234', isCorrect: true },
				{ answerText: '243', isCorrect: false },
			],
		},
		{
			questionText: '2x9=',
			answerOptions: [
				{ answerText: '11', isCorrect: false },
				{ answerText: '18', isCorrect: true },
				{ answerText: '7', isCorrect: false },
				{ answerText: '2', isCorrect: false },
			],
		},
	];

	    return (
        <div className='MathQuiz'>
			 {showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption)=> 
						<button onClick={()=> handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>)}
					</div>
				</>
			)}
		</div>
    );
}

export default MathQuiz;