import InputBox from "./formcomponents/inputBox";
import Button from "./formcomponents/Button";
import Link from "next/link";

export default function loginComponent(){
    return(
        <>
                    <div className="marginprop">
                    <h2>Login </h2>
                        <form action="#" method="POST">
                
                        <InputBox type="email"inputname="email" placeholder="please Enter Email"/>
                        <InputBox type="password"inputname="password" placeholder="please Enter your password"/>
                        <Button lable="login" type="submit"/>
                    </form>
                    <div className="login-link">
                            Create account <Link href="/signup">Signup</Link>
                        </div>
            </div>
        </>
    )
}