import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

// props -> img, album, title
const Song = props => (
  <Col md={4}>
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.artist}</Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            props.addToQueue(props.id);
          }}
        >
          Add to Queue
        </Button>
      </Card.Body>
    </Card>
  </Col>
);

export default Song;
