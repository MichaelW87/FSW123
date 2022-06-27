const Edit = (props) => {

    return (
        <button id={props.props.id} onClick= { () => props.props.onClick(props.props.elementId)}>{props.children}</button>
    )

};


export default Edit;