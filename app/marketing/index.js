'use client'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

const Marketing = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
      setMounted(true)
  }, [])
  return (
   <>
   {mounted && <div> <Navbar/>
   <Hero/></div>}
  
   </>
  )
}

export default Marketing