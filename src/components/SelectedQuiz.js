import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classes from '../stylesheets/quizstyle.css';
import { Container, Row, Col } from 'reactstrap';

const SelectedQuiz = () => {

	const [currentQuestion, setCurrentQuestion] = useState(0);

	const [showScore, setShowScore] = useState(false);

	const [score, setScore] = useState(0);

	const handleAnswerButtonClick = (isCorrect) => {

		if(isCorrect===true){
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if(nextQuestion < questionList.length){
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	const [questionList, setQuestionList] = useState([]);

    // http://localhost:8080/assessment/questions 
    useEffect(() => {
		async function fetchData() {
			const response = await axios.post(`http://localhost:8080/assessment/questions`, {
				"assessmentID": 1,
			})
			console.log(response)
			console.log(response.data)
			setQuestionList(response.data);
			console.log(questionList)
		}
		fetchData();
	}, []);
	//if [], run once when SelectedQuiz loads, and don't run again

	    return (
        <div className='SelectedQuiz'>
			 {showScore ? (
				<div className='score-section'>You scored {score} out of {}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>{}
						</div>
						 <div className='question-text'>{}</div>
					</div>
					 <div className='answer-section'> 
						{/* {questions[currentQuestion].answerOptions.map((answerOption)=> 
						<button onClick={()=> handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>)} */}
					</div> 
				</>
			)}
		</div>
    );
}

export default SelectedQuiz;

