import React, { useState, useEffect } from 'react';
import classes from '../stylesheets/languageartsstyle.css'
import axios from 'axios';

const LanguageArtsQuiz = (props) => {

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
			questionText: 'Brady and Joe went to the park to play soccer. Their friends Josh and David were already there playing tag.  Brady invited their friends to play soccer with them, but Josh and David wanted to play tag.  They decided to play tag together and then play soccer together. Which game did they play first?',
			answerOptions: [
				{ answerText: 'football', isCorrect: false },
				{ answerText: 'tag', isCorrect: true },
				{ answerText: 'soccer', isCorrect: false },
				{ answerText: 'tennis', isCorrect: false },
			],
		},
		{
			questionText: 'Brady and Joe went to the park to play soccer. Their friends Josh and David were already there playing tag.  Brady invited their friends to play soccer with them, but Josh and David wanted to play tag.  They decided to play tag together and then play soccer together. How many people played tag?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '2', isCorrect: false },
				{ answerText: '4', isCorrect: true },
				{ answerText: '3', isCorrect: false },
			],
		},
		{
			questionText: 'Brady and Joe went to the park to play soccer. Their friends Josh and David were already there playing tag.  Brady invited their friends to play soccer with them, but Josh and David wanted to play tag.  They decided to play tag together and then play soccer together. Which game did Joe want to play?',
			answerOptions: [
				{ answerText: 'soccer', isCorrect: true },
				{ answerText: 'tag', isCorrect: false },
				{ answerText: 'paintball', isCorrect: false },
				{ answerText: 'basketball', isCorrect: false },
			],
		},
		{
			questionText: 'Brady and Joe went to the park to play soccer. Their friends Josh and David were already there playing tag.  Brady invited their friends to play soccer with them, but Josh and David wanted to play tag.  They decided to play tag together and then play soccer together. Which game did David want to play?',
			answerOptions: [
				{ answerText: 'soccer', isCorrect: false },
				{ answerText: 'basketball', isCorrect: false },
				{ answerText: 'tag', isCorrect: true },
				{ answerText: 'paintball', isCorrect: false },
			],
		},
		{
			questionText: 'Which happened first?',
			answerOptions: [
				{ answerText: 'Joe ate his sandwhich', isCorrect: false },
				{ answerText: 'Joe put the sandwhich on a plate', isCorrect: false },
				{ answerText: 'Joe put the sandwhich together', isCorrect: false },
				{ answerText: 'Joe got the ingredients out of the fridge', isCorrect: true },
			],
		},
		{
			questionText: 'Which happened last?',
			answerOptions: [
				{ answerText: 'Spot brought brady his food bowl', isCorrect: false },
				{ answerText: 'Brady gave the dog food to spot', isCorrect: true },
				{ answerText: 'Brady got the food down', isCorrect: false },
				{ answerText: 'Brady poured the food in a bowl', isCorrect: false },
			],
		},
	];

	    return (
        <div className='LanguageArtsQuiz'>
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

export default LanguageArtsQuiz;