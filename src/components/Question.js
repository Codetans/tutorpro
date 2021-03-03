import React, { useState, useEffect } from 'react';

function Question({question}) {

    //let[selectedAnswer,setSelectedAnswer]=useState();

     let q = {
         questionId: question.questionId,
         question: question.question,
         answer: question.answer,
         incorrectAnswer1: question.incorrectAnswer1,
         incorrectAnswer2: question.incorrectAnswer2,
         incorrectAnswer3: question.incorrectAnswer3,
         reference: question.reference
     }
    let answers = [q.answer, q.incorrectAnswer1, q.incorrectAnswer2,q.incorrectAnswer3]
    answers = answers.sort(() => {return q.questionId - 5})

    return (
        <>
            <div className=''>
                <div className='questionDescription boxShadow solidBorder'>
                    {<h3>{question.question}</h3>}
                    <div className='resourceFrame'>
                    </div>
                </div>
                <div className='answersFrame'>
                    <div className='flexRow'>
                        <div className='answer boxShadow solidBorder'>
                            <button>
                                {answers[0]}
                            </button>
                        </div>
                        <div className='answer boxShadow solidBorder'>
                            <button>
                                {answers[1]}
                            </button>
                        </div>
                    </div>
                    <div className='flexRow'>
                        <div className='answer boxShadow solidBorder'>
                            <button>
                                {answers[2]}
                            </button>
                        </div>
                        <div className='answer boxShadow solidBorder'>
                            <button>
                                {answers[3]}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Question;