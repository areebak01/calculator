function Button (props){

    return(

        <button onClick = {props.onClick} className={props.class}>{props.label}</button>

    )

}


export default Button