import { useState, useEffect, useContext } from "react";

import TweetsCreator from "./TweetsCreator";
import MoonLoader from "react-spinners/MoonLoader";
import TweetsDisplayer from "./TweetsDisplayer";
import Context from "../Context/Context";

const Wrapper = () => {
  const [loading, setLoading] = useState(false);
  const axios = require("axios");
  const context = useContext(Context);

  const newTweet = () => {
    setLoading(true);

    axios
      .post(
        `https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet`,
        {
          userName: context.userName,
          content: context.tweet.content,
          date: context.tweet.date,
        }
      )
      .then((res) => {
        setLoading(false);
      })
      .catch(
        (
          e //alert("Couldn´t create your tweet", e),
        ) => setLoading(false)
      );
  };

  useEffect(() => {
    fetchTweetsList();
    setInterval(fetchTweetsList, 30000);
    return () => clearInterval(setInterval);
  }, [context.tweetsArray]);

  async function fetchTweetsList() {
    try {
      const response = await axios.get(
        `https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet`
      );

      context.setApiTweets([...response.data.tweets]);

      localStorage.setItem(
        "tweetsArray",
        JSON.stringify([...response.data.tweets])
      );
      const first = context.apiTweets;
      const second = context.tweetsArray;
      const newResetArray = first.filter((x) => second.indexOf(x) === -1);
      context.setComparedArray(newResetArray);
    } catch (error) {
      //alert("There was an error!!", error);
    }
  }

  return (
    <div>
      <div className="moonloader">
        <MoonLoader className="loader" loading={loading} />
      </div>
      <TweetsCreator newTweet={newTweet} />
      <TweetsDisplayer />
    </div>
  );
};

export default Wrapper;
