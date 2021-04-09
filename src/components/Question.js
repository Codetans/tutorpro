import React, { useState, useEffect } from 'react';

function Question(props) {

    const shuffleSeed = 5;

    let q = {
        questionId: props.question.questionId,
        question: props.question.question,
        answer: props.question.answer,
        incorrectAnswer1: props.question.incorrectAnswer1,
        incorrectAnswer2: props.question.incorrectAnswer2,
        incorrectAnswer3: props.question.incorrectAnswer3,
        reference: props.question.reference
    }

    let shuffleAnswers = [q.answer, q.incorrectAnswer1, q.incorrectAnswer2,q.incorrectAnswer3]
    shuffleAnswers = shuffleAnswers.sort(() => {return q.questionId - shuffleSeed})

    useEffect(() => {
        shuffleAnswers.forEach((element) => {
            if(props.answers[props.currentQuestion] == element) {
                document.getElementById(shuffleAnswers.indexOf(element)).style.backgroundColor = '#00bfff';
            } else {
                document.getElementById(shuffleAnswers.indexOf(element)).style.backgroundColor = 'white';
            }
        })

    })
    
    function answerSelected(e) {
        e.preventDefault();
        props.handleInput(e.target.value);
        for (var i = 0; i < shuffleAnswers.length; i++) {
            document.getElementById(i).style.backgroundColor = 'white';
        }
        document.getElementById(e.target.id).style.backgroundColor = '#00bfff';
    }

    return (
        <>
            <div className=''>
                <div className='questionDescription boxShadow solidBorder'>
                    {<h3>{q.question}</h3>}
                    <div className='resourceFrame'>
                    </div>
                </div>
                <div className='answersFrame'>
                    <div className='flexRow'>
                        <div className='answer boxShadow solidBorder'>
                            <button onClick={answerSelected}
                                    value={shuffleAnswers[0]}
                                    id={0}>
                                {shuffleAnswers[0]}
                            </button>
                        </div>
                        <div className='answer boxShadow solidBorder'>
                            <button onClick={answerSelected}
                                    value={shuffleAnswers[1]}
                                    id={1}>
                                {shuffleAnswers[1]}
                            </button>
                        </div>
                    </div>
                    <div className='flexRow'>
                        <div className='answer boxShadow solidBorder'>
                            <button onClick={answerSelected}
                                    value={shuffleAnswers[2]}
                                    id={2}>
                                {shuffleAnswers[2]}
                            </button>
                        </div>
                        <div className='answer boxShadow solidBorder'>
                            <button onClick={answerSelected} 
                                    value={shuffleAnswers[3]}
                                    id={3}>
                                {shuffleAnswers[3]}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Question;