import React, {useEffect} from 'react';
import { Jumbotron, Container, Card, CardImg, CardTitle, CardText, Button, Row, Col } from 'reactstrap';
import Quiz from "./Quiz";
import img from './assets/calculator.jpg'
import img2 from './assets/science.jpg'
import img3 from './assets/english.jpg'

  // we need to abstract this class. Quiz titles and other info from DB.

const QuizList = (props) => {

    useEffect(() => { },);

    return (
        <div className="">
            {props.assessmentList.length > 0 ?
                <Jumbotron className="jumbotron"> 
                    {props.assessmentList.map((assessment, index) => (
                        <div key={index}>
                            <Quiz assessment={assessment} setSelectedQuiz={props.setSelectedQuiz}></Quiz>
                        </div>
                    ))}
                </Jumbotron> : <div><h4>You don't have any quizzes to take at this time.</h4></div>
            }
        </div>
    );
}

export default QuizList;