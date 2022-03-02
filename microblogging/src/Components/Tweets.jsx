const Tweet = (props) => {
    const { item }= props
    
  return (
    <div className="list_item" key={item.id}>
      <div className="list-item-data">
        <div>{item.userName}</div>
        <div>{item.date}</div>
      </div>
      <div className="list-item-tweet">{item.content}</div>
    </div>
  );
};

export default Tweet;
