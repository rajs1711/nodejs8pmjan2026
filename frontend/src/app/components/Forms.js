
import Button from "./formcomponents/Button"
import InputBox from "./formcomponents/inputBox"
export default function Forms(props){

    return (

        <>
           <div className="marginprop">
           <h2>{props.formHeader} </h2>
              <form action="#" method="POST">
                <InputBox type={props.type} inputname={props.inputname} placeholder={props.placeholder}/>
                <Button/>
                
            </form>
            <div className="login-link">
                    Already have an account? <a href="#">Login</a>
              </div>
            </div>
        
        </>
    )
}