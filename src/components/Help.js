import React from 'react';
import { Card, CardImg, CardTitle, CardText } from 'reactstrap';
import { Container } from 'reactstrap';

const Help = () => {

    return (
      <Container>
                <Card className="video-border-none">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Uo5BcUODPCk" 
                title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
                </iframe>
                </Card>
      </Container>
    );
}
export default Help