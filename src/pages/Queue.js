import React from "react";
import Song from "../components/Song";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Queue = props => (
  <Container>
    {console.log(props)}
    <Row>
      {props.queue.map(song => {
        return (
          <Song
            title={song.title}
            album={song.album}
            artist={song.artist}
            img={song.img}
            id={song.id}
            addToQueue={props.addToQueue}
          />
        );
      })}
    </Row>
  </Container>
);

export default Queue;
