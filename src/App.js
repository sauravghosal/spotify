import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Queue from "./pages/Queue";
import Footer from "./components/Footer";

const App = () => {
  // adding to queue doesn't work!
  const [queue, addSong] = React.useState([]);

  React.useEffect(() => {});

  const songs = [
    {
      key: 0,
      title: "Feel",
      artist: "Bombay Bicycle Club",
      img:
        "https://res.cloudinary.com/bog/image/upload/v1573771309/spotify-remake/so-long-see-you-tomorrow.jpg"
    },
    {
      key: 1,
      title: "BOY BYE",
      artist: "BROCKHAMPTON",
      img:
        "https://res.cloudinary.com/bog/image/upload/v1573771308/spotify-remake/ginger.jpg"
    },
    {
      key: 2,
      title: "Moi",
      artist: "Lolo Zouai",
      img:
        "https://res.cloudinary.com/bog/image/upload/v1573771307/spotify-remake/high-highs-low-lows.jpg"
    },
    {
      key: 3,
      title: "1 4 Me",
      artist: "Electric Guest",
      img:
        "https://res.cloudinary.com/bog/image/upload/v1573771305/spotify-remake/kin.jpg"
    },
    {
      key: 4,
      title: "still feel.",
      artist: "half•alive",
      img:
        "https://res.cloudinary.com/bog/image/upload/v1573771304/spotify-remake/now-not-yet.jpg"
    },
    {
      key: 5,
      title: "Toxic",
      artist: "Britney Spears",
      img:
        "https://res.cloudinary.com/bog/image/upload/v1573771300/spotify-remake/britney-bitch.jpg"
    }
  ];
  const addToQueue = key => {
    const songAdded = songs.filter(song => song.key === key).pop();
    addSong([...queue, songAdded]);
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
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
