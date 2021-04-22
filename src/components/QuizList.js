import React, {useEffect} from 'react';
import Quiz from "./Quiz";
import math from "./assets/calculator.jpg";
import science from "./assets/science.jpg";
import english from "./assets/english.jpg";

  // we need to abstract this class. Quiz titles and other info from DB.

const QuizList = (props) => {
    var srcImage;
    return (
        <div className="">
            {props.assessmentList.length > 0 ?
                <div className="container">
                    <div className="row">
                    {props.assessmentList.map((assessment, index) => {
                        if(assessment.photoName == 'calculator.jpg') {
                            srcImage = math
                        } else if(assessment.photoName == 'science.jpg') {
                            srcImage = science
                        } else if(assessment.photoName == 'english.jpg') {
                            srcImage = english
                        }
                        return(
                            <div key={index} className="col-md-4 card-separation">
                                <Quiz assessment={assessment} setSelectedQuiz={props.setSelectedQuiz} index={index} srcImage={srcImage}></Quiz>
                            </div>
                            )
                    })}
                    </div>
                </div> : <div><h4>You don't have any quizzes to take at this time.</h4></div>
            }
        </div>
    );
}

export default QuizList;