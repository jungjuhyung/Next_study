export default function Layout(props) {
    let msg = props.params.id
    if (msg === "1") {
        msg = "HTML 선택"
    }else if(msg === "2"){
        msg = "CSS 선택"
    }else if(msg === "3"){
        msg = "JS 선택"
    }
    return(
        <div>
            {props.children}
            <h3>parameters : {props.params.id}</h3>
            <h3>{msg}</h3>
            <h3>parameters : {props.params.id === "1"?"HTML선택": props.params.id === "2"?"CSS" : "JS 선택"}</h3>
        </div>
    )
}