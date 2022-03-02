
const Input = (props) => {

    return (
        <div className="Input">
            <input value={props.tweetValue} onChange={props.onChange} />
        </div>
    )
}

export default Input;