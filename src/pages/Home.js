import React from "react";
import Song from "../components/Song";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Message from "../components/Message";

const Home = props => {
  const [success, setSuccess] = React.useState(false);

  return (
    <>
      <Container>
        {success && <Message />}
        <Row class="top-buffer">
          {props.songs.map(song => {
            return (
              <Song
                title={song.title}
                album={song.album}
                artist={song.artist}
                img={song.img}
                key={song.key}
                id={song.key}
                addToQueue={props.addToQueue}
                library={true}
                setSuccess={setSuccess}
              />
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Home;
