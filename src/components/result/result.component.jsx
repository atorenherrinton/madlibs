/** @format */

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Result = (props) => (
  <Container style={{ marginTop: "75px" }}>
    <Row className="justify-content-md-center">
      <Col xs={8}>
        <div style={{ textAlign: "center" }}>
          <h1>{props.title}</h1>
          <br />
          <p>{props.result}</p>
        </div>
      </Col>
    </Row>
  </Container>
);
