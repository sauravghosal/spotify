import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Queue from "./pages/Queue";

const App = () => {
  // adding to queue doesn't work!
  const [queue, addSong] = React.useState([]);

  const songs = [
    {
      id: 0,
      title: "everything i wanted",
      album: "Single",
      artist: "Billie Eilish",
      img:
        "https://static.stereogum.com/uploads/2019/11/BillieEilish_everythingiwanted_Artwork-1573674907-640x640.jpg"
    },
    {
      id: 1,
      title: "Shameless",
      album: "Single",
      artist: "Camila Cabello",
      img:
        "https://i0.wp.com/abitofpopmusic.com/wp-content/uploads/2019/09/69451980_2587324774624317_4212404143236579328_o3246153730612861154.jpg?resize=300%2C300&ssl=1"
    }
  ];

  const addToQueue = id => {
    songs.forEach(song => {
      if (song.id === id) {
        addSong(song);
      }
    });
    console.log(queue);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/">
            <Home songs={songs} addToQueue={addToQueue} />
          </Route>
          <Route path="/queue">
            <Queue queue={queue} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
