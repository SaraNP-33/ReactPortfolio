import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.css";


function About(props){
    return(
        <Container className=" h-100">
        <Row className="d-flex justify-content-center">
        <h1 className="experience py-3">
            Experience  
        </h1>
        </Row>
        <Row className="skillRow mb-md-6 p-3">
        <Col className="skillsInfo col-sm-4">
            <Row className="icons d-flex justify-content-center">
            <FontAwesomeIcon icon={faCode} size="3x"className="skillsIcons" />
            </Row>
            <h3 className="text-center mt-3">Front-End Development</h3>
          <p className="text-justify pt-2">I create websites and applications using the basic <strong>HTML5</strong>,
            <strong>Javascript</strong> and <strong>CSS</strong>. I also use other js libraries such as jQuery,
            and front-end templates such as React and Handlebars. To expedite the embelisment
            of the pages I use Bootstrap and Materialize.
          </p>
        </Col>
        <Col className="skillsInfo col-sm-4">
            <Row className="icons d-flex justify-content-center">
            <FontAwesomeIcon icon={faServer} size="3x"className="skillsIcons" />
            </Row>
            <h3 className="text-center mt-3">Back End Development</h3>
          <p className="text-justify pt-2">Server side of websites and applications, I <strong>Node.js</strong> to execute
            javascript outside of the web browser
            and <strong>Express</strong> as my server framework to build the applications and APIs.
          </p>
        </Col>
        <Col className="skillsInfo col-sm-4">
            <Row className="icons d-flex justify-content-center">
            <FontAwesomeIcon icon={faDatabase} size="3x" className="skillsIcons"/>
            </Row>
            <h3 className="text-center mt-3"> Server/Client Databases</h3>
          <p className="text-justify pt-2">To store data from user input, external APIs and I use both relational Database
            <strong>MySQL</strong> with <strong>Sequelize</strong> as my Object Relational Mapping,
            and non-relational Database <strong>Mongo DB</strong>, using the Object Data Modeling
            <strong>Mongoose</strong> .
          </p>
        </Col>
        </Row>
     
        </Container>
    )
}

export default About;