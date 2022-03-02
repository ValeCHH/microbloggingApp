import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";

import Navbar from "./Components/Navbar.jsx";
import Wrapper from "./Components/Wrapper";
import Profile from "./Pages/Profile";
import Context from "./Context/Context";

function App() {
  const [tweet, setTweet] = useState({});
  const post = JSON.parse(localStorage.getItem("myPost"));
  const [apiTweets, setApiTweets] = useState([]);
  const tweetsArray = JSON.parse(localStorage.getItem("tweetsArray"));
  const [userInput, setUserInput] = useState();
  const userName = localStorage.getItem("userInput");
  const [tweetText, setTweetText] = useState({
    userName: userName,
    id: new Date().getTime(),
    content: "",
    date: new Date().toISOString(),
  });
  const [charactersLeft, setCharactersLeft] = useState();
  const [comparedArray, setComparedArray] = useState([]);

  return (
    <Context.Provider
      value={{
        tweet: tweet,
        setTweet: setTweet,
        apiTweets: apiTweets,
        setApiTweets: setApiTweets,
        userInput: userInput,
        setUserInput: setUserInput,
        tweetText: tweetText,
        setTweetText: setTweetText,
        charactersLeft: charactersLeft,
        setCharactersLeft: setCharactersLeft,
        userName: userName,
        post: post,
        tweetsArray: tweetsArray,
        comparedArray: comparedArray,
        setComparedArray: setComparedArray,
      }}
    >
      <div className="App">
        <div>
          <Navbar />
          <Routes>
            <Route path="" element={<Wrapper />}  />
            <Route path="/home" element={<Wrapper />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
