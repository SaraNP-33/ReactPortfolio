import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import "./style.css";

function Masthead(){
    return(
        <>
<Jumbotron fluid className="masthead">
 
  <Container className="TitleContainer">
    <h1 className="name">Sara Neves Pereira</h1>
    <h2 className="title w-50 text-center">
      Full Stack Web Developer 
    </h2>
  </Container>
</Jumbotron>
</>
    )
}

export default Masthead;