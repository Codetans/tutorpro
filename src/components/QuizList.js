import React, {useEffect} from 'react';
import Quiz from "./Quiz";

  // we need to abstract this class. Quiz titles and other info from DB.

const QuizList = (props) => {

    useEffect(() => { },);

    return (
        <div className="">
            {props.assessmentList.length > 0 ?
                <div className="container">
                    <div className="row">
                    {props.assessmentList.map((assessment, index) => (
                        <div key={index} className="col-md-4 card-separation">
                            <Quiz assessment={assessment} setSelectedQuiz={props.setSelectedQuiz} index={index}></Quiz>
                        </div>
                    ))}
                    </div>
                </div> : <div><h4>You don't have any quizzes to take at this time.</h4></div>
            }
        </div>
    );
}

export default QuizList;