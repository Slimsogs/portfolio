import './index.scss'
import React from 'react'
import LogoS  from '../../../assets/images/sogs3.jpg'
import { useRef } from 'react'
import { useEffect } from 'react'
import gsap from 'gsap-trial'

const Logo = () => {
  const bgRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() =>{
    gsap.timeline()
    .to(bgRef.current, {
      duration: 2,
      opacity: 1,
      delay: 1,
    })
    .from(solidLogoRef.current, {
      opacity: 1,
      duration: 3,
      
    })
  }, [])

  return (
    <div className='logo-container' ref={bgRef} >
        <img ref={solidLogoRef} src={LogoS} alt="S" className='solid-logo'/>
    

    </div>
  )
}

export default Logo