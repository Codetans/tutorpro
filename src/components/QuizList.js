import React, {useEffect} from 'react';
import { Jumbotron, Container, Card, CardImg, CardTitle, CardText, Button, Row, Col } from 'reactstrap';
import img from './assets/calculator.jpg'
import img2 from './assets/science.jpg'
import img3 from './assets/english.jpg'

  // we need to abstract this class. Quiz titles and other info from DB.

const QuizList = (props) => {

    useEffect(() => { },);

    return (
        <div className="">
            <Jumbotron className="jumbotron">
                {
                    props.assessmentList.map((assessment, index) => (
                        <div key={index}>
                            <Card>
                                <br />
                                <CardTitle tag="h5"><b>{assessment.subject}</b></CardTitle>
                                <CardImg top width="100%" src={assessment.photo_name} />
                                <br />
                                <CardText>{assessment.description}</CardText>
                                <Button color="info" tag="a" href="#" onClick={() => {props.setSelectedQuiz(assessment.assessmentID)}}>Take this quiz</Button>
                            </Card>
                        </div>
                    )) 
                }
            </Jumbotron>
        </div>
    );
}

export default QuizList;