/** @format */

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const FormGroup = (props) => (
  <Container style={{ marginTop: "75px" }}>
    <Row className="justify-content-center">
      <Col xs={10} md={6} lg={4} >
        <ProgressBar now={props.progress} />
        <br />
        <Form onSubmit={props.handleSubmit}>
          <Form.Group>
            <h3>Choose a {props.kind}</h3>
            <br/>
            <Form.Control placeholder={props.kind} onChange={props.handleChange} />
          </Form.Group>
          <br />
          <Button variant="primary" type="submit" block>
            {!props.isLast ? "Next" : "Create Madlib"}
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>
);
