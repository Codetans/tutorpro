import React, { useState, useEffect } from 'react';
import classes from '../stylesheets/sciencestyle.css'
import axios from 'axios';

const ScienceQuiz = (props) => {

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
			questionText: 'When a liquid is poured into a different container it:',
			answerOptions: [
				{ answerText: 'becomes solid', isCorrect: false },
				{ answerText: 'blows up', isCorrect: false },
				{ answerText: 'takes the shape of the container', isCorrect: true },
				{ answerText: 'becomes a nice drink', isCorrect: false },
			],
		},
		{
			questionText: 'When sugar is mixed with water it:',
			answerOptions: [
				{ answerText: 'dissolves', isCorrect: true },
				{ answerText: 'becomes liquid', isCorrect: false },
				{ answerText: 'melts', isCorrect: false },
				{ answerText: 'dissapears', isCorrect: false },
			],
		},
		{
			questionText: 'An example of a liquid is:',
			answerOptions: [
				{ answerText: 'water', isCorrect: true },
				{ answerText: 'sand', isCorrect: false },
				{ answerText: 'cheese', isCorrect: false },
				{ answerText: 'an apple', isCorrect: false },
			],
		},
		{
			questionText: 'An example of a solid is:',
			answerOptions: [
				{ answerText: 'milk', isCorrect: false },
				{ answerText: 'air', isCorrect: false },
				{ answerText: 'watermelon', isCorrect: false },
				{ answerText: 'A rock', isCorrect: true },
			],
		},
		{
			questionText: 'When water is boiled, what happens to the amount of water?',
			answerOptions: [
				{ answerText: 'Increase', isCorrect: false },
				{ answerText: 'No Change', isCorrect: false },
				{ answerText: 'Decrease', isCorrect: true },
				{ answerText: 'Change color', isCorrect: false },
			],
		},
		{
			questionText: 'When a solid is placed in a new container it:',
			answerOptions: [
				{ answerText: 'change size', isCorrect: false },
				{ answerText: 'Remains the same size', isCorrect: true },
				{ answerText: 'change color', isCorrect: false },
				{ answerText: 'change shape', isCorrect: false },
			],
		},
		{
			questionText: 'When is hail most likely to occur?',
			answerOptions: [
				{ answerText: 'When it is dark', isCorrect: false },
				{ answerText: 'When it is light', isCorrect: false },
				{ answerText: 'During big storms', isCorrect: true },
				{ answerText: 'Summer', isCorrect: false },
			],
		},
		{
			questionText: 'A thermometer measures:',
			answerOptions: [
				{ answerText: 'speed', isCorrect: false },
				{ answerText: 'Temperature', isCorrect: true },
				{ answerText: 'light', isCorrect: false },
				{ answerText: 'pressure', isCorrect: true },
			],
		},
	];

	    return (
        <div className='ScienceQuiz'>
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

export default ScienceQuiz;