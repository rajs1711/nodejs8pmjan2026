import Link from "next/link"
export default function Navbar(){
    return(

        <>
           
           <nav>
                <div class="navbar">
                    <div class="logo"><Link href="/" className="logocolor">ShopEasy</Link></div>

                    <ul class="nav-links">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/signup">SignUp</Link></li>
                        <li><Link href="/login">SignIn</Link></li>
                    </ul>
                </div>
           </nav>
        
        </>
    )
}