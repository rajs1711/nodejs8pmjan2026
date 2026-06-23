export default function Button(props){
    console.log(props)
    return(
        <>
        <button type={props.type}>{props.lable}</button>
        </>
    )
}