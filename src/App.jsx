import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const App = () => {
  const gsapRef=useRef()

  useGSAP(()=>{
    gsap.to(gsapRef.current,{
      x:1000,
      duration:2,
      delay:1,
      rotate:720
    })
  })
  return (
    <main>
      <div ref={gsapRef} className="box">

      </div>
    </main>
  )
}

export default App
