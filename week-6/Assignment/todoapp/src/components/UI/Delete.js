const Delete = (props) => {
    return (
        <button onClick={() => props.props.onClick(props.props.elementId)}>{props.children}</button>
    )

};

export default Delete;