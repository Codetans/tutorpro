import React from 'react'
import { Jumbotron, Container, Card, CardImg, CardTitle, CardText, Button, Row, Col } from 'reactstrap';
import img from './assets/calculator.jpg'
import img2 from './assets/science.jpg'
import img3 from './assets/english.jpg'

  // we need to abstract this class. Quiz titles and other info from DB.

const Quiz = (props) => {

    return (
        <div>
            <Jumbotron className="jumbotron">
            <Row>
            <Col sm="4">
                <Card>
                    <br />
                    <CardTitle tag="h5"><b>Math Quiz - Multiplication</b></CardTitle>
                    <CardImg top width="100%" src={img} alt="Math Calculator" />
                    <br />
                    <CardText>This quiz will assess your understanding of multiplication factors </CardText>
                    <Button color="info" tag="a" href="#" onClick={() => {props.changeMode("selectedQuiz")}}>Take this quiz</Button>
                </Card>
            </Col>
            <Col sm="4">
                <Card>
                    <br />
                    <CardTitle tag="h5"><b>Science Quiz</b></CardTitle>
                    <CardImg top width="100%" src={img2} alt="Science" />                    
                    <br />
                    <CardText>Take this quiz to gain a better understand of Biology</CardText>
                    <Button color="info" tag="a" href="#" onClick={() => {props.changeMode("selectedQuiz")}}>Take this quiz</Button>
                </Card>
            </Col>
            <Col sm="4">
                <Card>
                    <br />
                    <CardTitle tag="h5">Language arts quiz</CardTitle>
                    <CardImg top width="100%" src={img3} alt="English" />
                    <br />
                    <CardText>This quiz is intended to assess your reading comprehension skils</CardText>
                    <Button color="info" tag="a" href="#" onClick={() => {props.changeMode("selectedQuiz")}}>Take this quiz</Button>
                </Card>
            </Col>
            </Row>
            </Jumbotron>
        </div>
    );
}

export default Quiz;