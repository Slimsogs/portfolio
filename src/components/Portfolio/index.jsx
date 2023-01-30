import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Loader from 'react-loaders'
import RenderPort from '../RenderPort'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() =>{
    setTimeout(() =>{
        setLetterClass('text-animate-hover')
    }, 3000);
    return() =>{
      clearTimeout()
    }
  },)

  
  return (
    <>
    <div className="container portfolio-page">
      <h1 className='page-title'>
          <AnimatedLetters 
          letterClass={letterClass}
          strArray={"Portfolio".split("")}
          idx={15}/>
      </h1>
      <div><RenderPort/></div>
    </div>
    <Loader type='pacman'/>
    </>
  )
}

export default Portfolio