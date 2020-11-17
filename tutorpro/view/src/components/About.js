import React from 'react';
import { Card, CardImg, CardTitle, CardText } from 'reactstrap';
import { Container } from 'reactstrap';
import img from './assets/weber_state_logo.jpg'

const About = () => {

    return (
      <Container>
                <Card>
                <CardImg top width="100%" src={img} alt="Weber Logo" />
                    <CardTitle tag="h4">What is TutorPro?</CardTitle>
                    <CardText>
                    TutorPro is an application created by a group of computer science students at Weber State University as a capstone project.
                    TutorPro is a web based application to help parents or teachers assess their students academic proficiencies. TutorPro will help 
                    a parent or teacher see what subjects a student needs help with relative to their grade level. TutorPro facilitates finding 
                    resources for students to continue learning outside of the classroom to help them excel at subjects they may be having trouble with.
                    </CardText>
                    <CardTitle tag="h4">Our Team</CardTitle>
                    <CardText>
                    Our team consists of four software developers aspiring to graduate but also create a useful app. Not only are we learning the ins 
                    and outs of the software industry, we are also caring parents who want to see our kids succeed. TutorPro is our way of creating something 
                    meaningful while also allowing us to learn more about a technology stack.
                    </CardText>
                    <CardTitle tag="h4">How does it work?</CardTitle>
                    <CardText>
                    TutorPro is powered by modern software development tools. Our user-interface is built with React and our back-end is handled with Spring 
                    which connects to MySQL. Our repository continues to grow each day as we find ways to develop a better application.
                    </CardText>
                </Card>
      </Container>
    );
}
export default About