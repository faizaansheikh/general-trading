'use client'
import { useState } from 'react'
import Marketing from './(marketing)'
import Login from './(auth)/login'
export default function Home() {
  const[isLogged,setIsLogged] = useState(false)
  return (
     <>
     {/* {isLogged ? <Login/> : <Marketing setIsLogged={setIsLogged}/>} */}
     <Marketing setIsLogged={setIsLogged}/>
     </>
  )
}
