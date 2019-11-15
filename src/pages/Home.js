import React from "react";
import Song from "../components/Song";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const songs = [
  {
    title: "everything i wanted",
    album: "Single",
    artist: "Billie Eilish",
    img:
      "https://static.stereogum.com/uploads/2019/11/BillieEilish_everythingiwanted_Artwork-1573674907-640x640.jpg"
  },
  {
    title: "Shameless",
    album: "Single",
    artist: "Camila Cabello",
    img:
      "https://i0.wp.com/abitofpopmusic.com/wp-content/uploads/2019/09/69451980_2587324774624317_4212404143236579328_o3246153730612861154.jpg?resize=300%2C300&ssl=1"
  }
];

const Home = props => (
  <>
    <Container>
      <Row>
        {songs.map(song => {
          return (
            <Song
              title={song.title}
              album={song.album}
              artist={song.artist}
              img={song.img}
            />
          );
        })}
      </Row>
    </Container>
  </>
);

export default Home;
