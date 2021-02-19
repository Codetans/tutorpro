import React from 'react';
import { Card, CardImg, CardTitle, CardText } from 'reactstrap';
import { Container } from 'reactstrap';
import img from './assets/weber_state_logo.jpg'

const About = () => {

    let cardHeader1 = "What is TutorPro?";
    let cardPara1 = "TutorPro is an application created by a group of computer science students at \n" +
        "Weber State University as a capstone project. TutorPro is a web based application to help \n" +
        "parents or teachers assess their students academic proficiencies. TutorPro will help a \n" +
        "parent or teacher see what subjects a student needs help with relative to their grade level. \n" +
        "TutorPro facilitates finding resources for students to continue learning outside of the classroom \n" +
        "to help them excel at subjects they may be having trouble with.";
    let cardHeader2 = "Our Team";
    let cardPara2 = "Our team consists of four software developers aspiring to graduate but also create a \n" +
        "useful app. Not only are we learning the ins and outs of the software industry, we are also caring \n" +
        "parents who want to see our kids succeed. TutorPro is our way of creating something \n" +
        "meaningful while also allowing us to learn more about a technology stack.";
    let cardHeader3 = "How does it work?";
    let cardPara3 = "TutorPro is powered by modern software development tools. Our user-interface is built \n"+
        "with React and our back-end is handled with Spring which connects to MySQL. Our repository \n" +
        "continues to grow each day as we find ways to develop a better application.";

    return (
      <Container>
                <Card>
                <CardImg top width="100%" src={img} alt="Weber Logo" />
                    <CardTitle tag="h4">{cardHeader1}</CardTitle>
                    <CardText>{cardPara1}</CardText>
                    <CardTitle tag="h4">{cardHeader2}</CardTitle>
                    <CardText>{cardPara2}</CardText>
                    <CardTitle tag="h4">{cardHeader3}</CardTitle>
                    <CardText>{cardPara3}</CardText>
                </Card>
      </Container>
    );
}
export default About