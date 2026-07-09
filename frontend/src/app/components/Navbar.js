import Link from "next/link"
export default function Navbar(){
    const navlinks=[
        {
        id:1,
        label:"Home",
        src:"/"
        },
        {
        id:2,
        label:"Signup",
        src:"/signup"
       },
       {
        id:4,
        label:"SignOut",
        src:"/signout"
       }
    ];

    return(

        <>
           
           <nav>
                <div className="navbar">
                    <div className="logo"><Link href="/" className="logocolor">ShopEasy</Link></div>

                    <ul className="nav-links">
                       {
                        navlinks.map((nav)=>(
                          <li key={nav.id}><Link href={nav.src}>{nav.label}</Link></li>
                        ))
                       }
                        

                    </ul>
                </div>
           </nav>
        
        </>
    )
}