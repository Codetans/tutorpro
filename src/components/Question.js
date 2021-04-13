import React, { useEffect } from 'react';

function Question(props) {

    // const shuffleSeed = 5;

    // let shuffleAnswers = [q.answer, q.incorrectAnswer1, q.incorrectAnswer2,q.incorrectAnswer3]
    // shuffleAnswers = shuffleAnswers.sort(() => {return q.questionId - shuffleSeed})

    useEffect(() => {
        props.question.answers.forEach((element) => {
            if(props.answers[props.currentQuestion] == element.answer) {
                document.getElementById(props.question.answers.indexOf(element)).style.backgroundColor = '#00bfff';
            } else {
                document.getElementById(props.question.answers.indexOf(element)).style.backgroundColor = 'white';
            }
        })

    })
    
    function answerSelected(e) {
        e.preventDefault();
        props.handleInput(e.target.value);
        for (var i = 0; i < props.question.answers.length; i++) {
            document.getElementById(i).style.backgroundColor = 'white';
        }
        document.getElementById(e.target.id).style.backgroundColor = '#00bfff';
    }

    return (
        <>
            <div className=''>
                <div className='questionDescription boxShadow solidBorder'>
                    {<h3>{props.question.question}</h3>}
                    <div className='resourceFrame'>
                    </div>
                </div>
                <div className='answersFrame'>
                    <div className="Container">
                        <div className="row">
                            {props.question.answers.map((answer, index) => (
                                <div key={index} className="col-md-6">
                                    <button onClick={answerSelected}
                                        value={answer.answer}
                                        id={index}
                                        className="answer-button-styles">
                                        {answer.answer}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Question;