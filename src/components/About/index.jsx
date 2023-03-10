import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import {faBootstrap, faCss3, faGitAlt, faHtml5, faJsSquare, faReact} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'


import './index.scss'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() =>{
        setTimeout(() =>{
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
          letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          I'm an aspiring Full-stack developer and a very ambitious front-end developer looking for a role in an
          established IT company with the opportunity to work with the lastest
          technologies on challenging and diverse projects.
        </p>
        <p>
          I'm quite confident, naturally curious, and perpetually working on
          improving my design skills.
        </p>
        <p>
          If I need to define myself in one sentence, that would be a sports
          fanatic, tech-obsessed and a drummer!!!
        </p>
        <a href="/CV/Nwachukwu-Sogidechi.pdf" className='flat-button' download > Download CV</a>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
            <div className="face1">
                <FontAwesomeIcon icon={faReact} color='#DD0031'/>
            </div>
            <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
            </div>
            <div className="face3">
                <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
            </div>
            <div className="face4">
                <FontAwesomeIcon icon={faJsSquare} color='#5ED4F4'/>
            </div>
            <div className="face5">
                <FontAwesomeIcon icon={faBootstrap} color='#EFD81D'/>
            </div>
            <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
            </div>
        </div>
      </div>
    </div>
    <Loader type='pacman'/>
    </>
  )
}

export default About
