import React, {useEffect} from 'react'
import { Jumbotron, Container, Card, CardImg, CardTitle, CardText, Button, Row, Col } from 'reactstrap';

const Quiz = (props) => {
    return (
        <div>
            <Jumbotron className="jumbotron">
            <Row>
            <Col sm="4">
                <Card>
                    <br />
                    <CardTitle tag="h5"><b>{props.assessment.subject}</b></CardTitle>
                    <CardImg top width="100%" src={process.env.PUBLIC_URL + props.assessment.photoName} />
                    <br />
                    <CardText>{props.assessment.description}</CardText>
                    <Button color="info" tag="a" href="#" onClick={() => {props.setSelectedQuiz(props.assessment.assessmentID)}}>Take this quiz</Button>
                </Card>
            </Col>
            </Row>
            </Jumbotron>
        </div>
    );
}

export default Quiz;