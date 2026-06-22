import Button from "./Button"
export default function Forms(){

    return (

        <>
           <div>
           <h2>Create Account</h2>
              <form action="#" method="POST">
                <input type="text" name="fullname" placeholder="Full Name" required />

                <input type="email" name="email" placeholder="Email Address" required />

                <input type="password" name="password" placeholder="Password" required />

                <input type="password" name="confirm_password" placeholder="Confirm Password" required />
                <Button/>
                
            </form>
            <div className="login-link">
                    Already have an account? <a href="#">Login</a>
              </div>
            </div>
        
        </>
    )
}