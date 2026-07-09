"use client"
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function DashboardComponent(){
   
  const router=useRouter()
   const token= Cookies.get('accessToken');
   console.log(token,'++++++++++')

   if(!token){
     router.replace('/login');
   }

    return (
        <>
          <h1>This is Dashboard</h1>
        </>
    )
}