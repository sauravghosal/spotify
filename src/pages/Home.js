import React from "react";
import Song from "../components/Song";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Home = props => (
  <>
    <Container>
      <Row>
        {props.songs.map(song => {
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
  </>
);

export default Home;
