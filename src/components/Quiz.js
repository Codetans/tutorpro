import React, {useEffect} from 'react'
import { Jumbotron, Container, Card, CardImg, CardTitle, CardText, Button, Row, Col } from 'reactstrap';
import '.././stylesheets/main.scss';

const Quiz = (props) => {
    return (
        <>
            <Card className="card-shadow">
                <CardTitle tag="h5" className="name-desc-position"><b>{props.assessment.name}</b></CardTitle>
                <CardImg top width="100%" src={process.env.PUBLIC_URL + props.assessment.photoName} />
                <CardText className="name-desc-position">{props.assessment.description}</CardText>
                <Button color="info" tag="a" href="#" onClick={() => {props.setSelectedQuiz(props.assessment.assessmentID, props.assessment.name)}}>Take this quiz</Button>
            </Card>
        </>
    );
}

export default Quiz;