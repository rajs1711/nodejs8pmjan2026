import Image from "next/image";
import Navbar from "./components/Navbar";
import InputBox from "./components/formcomponents/inputBox";
import Button from "./components/formcomponents/Button";
export default function Home() {
  return (
    <>
    <Navbar/>
    <div className="marginprop">
           <h2>Signup </h2>
              <form action="#" method="POST">
                <InputBox type="text"inputname="name" placeholder="please Enter your name"/>
                <InputBox type="email"inputname="email" placeholder="please Enter Email"/>
                <InputBox type="number"inputname="mobile" placeholder="please Enter your mobile"/>
                <Button lable="signup" type="submit"/>
                
            </form>
            <div className="login-link">
                    Already have an account? <a href="#">Login</a>
              </div>
    </div>

    <div className="marginprop">
           <h2>Login </h2>
              <form action="#" method="POST">
      
                <InputBox type="email"inputname="email" placeholder="please Enter Email"/>
                <InputBox type="password"inputname="password" placeholder="please Enter your password"/>
                <Button lable="login" type="submit"/>
            </form>
            <div className="login-link">
                    Already have an account? <a href="#">Login</a>
              </div>
    </div>
    </>

    

  );
}

