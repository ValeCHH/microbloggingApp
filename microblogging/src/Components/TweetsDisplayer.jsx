import Tweets from "./Tweets";
import { useContext } from "react";
import "../App.css";
import Context from "../Context/Context";

const TweetsDisplayer = () => {
  const context = useContext(Context);
  const newArray = context.tweetsArray;
 

  return (
    <div>
      <div className="list">
        {newArray.length > 0
          ? newArray.map((item) => <Tweets item={item} key={item.id} />)
          : ""}
        ;
      </div>
    </div>
  );
};

export default TweetsDisplayer;
