"use client"
import { useState } from "react";

type AuthUser = {
  name: string
  email: string
}
export default function Home() {
      const [user, setUser] = useState<AuthUser | null>(null)

     function handleLogin(){
           setUser({
            name: 'dammy',
            email: 'danielola@gmail.com'
           })
     }
     function handleLogOut(){
         setUser(null);
     }
  return (
   <div>
    <button onClick={handleLogin}>login</button>
    <button onClick={handleLogOut}>logout</button>
    <div>User Name is {user?.name} </div>
    <div>User Email is {user?.email} </div>
   </div>
  )
}
