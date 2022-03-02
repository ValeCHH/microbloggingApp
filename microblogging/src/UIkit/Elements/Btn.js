import './Btn.css';

const Btn = (props) => {
    return (
        <button className='Btn' onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Btn;