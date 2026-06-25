import InputBox from "./formcomponents/inputBox";
import Button from "./formcomponents/Button";
import Link from "next/link";

export default function signupComponent(){
    return(
        <>
                     <div className="marginprop">
                <h2>Signup </h2>
                    <form action="#" method="POST">
                        <InputBox type="text"inputname="name" placeholder="please Enter your name"/>
                        <InputBox type="email"inputname="email" placeholder="please Enter Email"/>
                        <InputBox type="number"inputname="mobile" placeholder="please Enter your mobile"/>
                        <Button lable="signup" type="submit"/>
                        
                    </form>
                    <div className="login-link">
                            Already have an account? <Link href="/login">Login</Link>
                    </div>
            </div>
        </>
    )
}