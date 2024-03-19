import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { faBootstrap, faCss3, faGitAlt, faHtml5, faJsSquare, faReact , fa} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'


import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
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
            An experienced software developer with 2 years experience working on a variety of web and mobile projects. 
            I have an understanding of responsive design principles and how to create interfaces that work well across different devices and screen sizes.
          </p>
          <p>
            I enjoy collaborating with designers, back-end developers, and other stakeholders to ensure that the user experience is seamless and intuitive.
          </p>
          <p>
          In addition to my technical skills, I'm an effective communicator who can explain technical concepts to nontechnical stakeholders.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color='#DD0031' />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color='#F06529' />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color='#5ED4F4' />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faBootstrap} color='#EFD81D' />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
            </div>
          </div>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default About
