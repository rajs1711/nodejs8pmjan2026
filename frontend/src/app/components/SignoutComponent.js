"use client"
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function SignoutComponent(){
    const router = useRouter();
    const token=Cookies.get('accessToken');
    if(token){
        Cookies.set("accessToken", "", {
            expires: new Date(0),
            path: "/",
          });
          router.replace('/login')
    }
}
