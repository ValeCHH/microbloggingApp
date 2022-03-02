import { useContext } from "react";
import "../App.css";
import Context from "../Context/Context";

const TweetsCreator = (props) => {
  const { newTweet } = props;
  const context = useContext(Context);

  const handleAdd = () => {
    localStorage.setItem("myPost", JSON.stringify(context.tweet));
    context.tweetsArray.unshift(context.post)
    newTweet(context.tweet);
    context.setTweetText({ ...context.tweetText, content: "" });
    context.setTweet("");
    
       
  };

  const handelChange = (e) => {
    const charCount = e.target.value.length;
    let charLeft = 140 - charCount;
    context.setCharactersLeft(charLeft);
    context.setTweetText({ ...context.tweetText, content: e.target.value });
    context.setTweet({ ...context.tweetText });
    console.log(e.target.value)
  };

  return (
    <div className="form-wrapper">
      <textarea
        className="tweet-form"
        onChange={handelChange}
        type="text"
        placeholder="What you have in mind..."
        value={context.tweetText.content}
      />
      <div className="tweet-bottom">
        {context.charactersLeft <= 0 && (
          <div className={`tweet-error-true`}>
            The tweet can't contain more then 140 chars.
          </div>
        )}
        {context.charactersLeft <= 0 || context.tweetText?.content === "" ? (
          <button className="disabled">Tweet</button>
        ) : (
          <button onClick={handleAdd}>Tweet</button>
        )}
      </div>
    </div>
  );
};

export default TweetsCreator;
