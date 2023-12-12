'use client'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

const Marketing = ({setIsLogged}) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
      setMounted(true)
  }, [])
  return (
   <>
   {mounted && <div> <Navbar setIsLogged={setIsLogged}/>
   <Hero/></div>}
  
   </>
  )
}

export default Marketing