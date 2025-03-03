import './index.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect } from 'react';
import Logo from './Logo';
import Loader from 'react-loaders';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ','D','a', 'n', 'i', 'e', 'l']
    const jobArray = ['F', 'r','o','n','t','e','n','d',' ','D','e','v','e','l','o','p','e','r']

    useEffect(() =>{
        setTimeout(() =>{
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])
    return (
      <>
        <div className="container home-page">
          <div className="text-zone">
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>

              <br />
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m </span>
              
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={22}
              />
            </h1>
            {/* <h2>Frontend Developer</h2> */}
            {/* <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link> */}
          <a href="/CV/Resume_Daniel Nwachukwu.pdf" className='flat-button' download > DOWNLOAD CV </a>
          </div>
          <Logo/>
        </div>
        <Loader type='pacman'/>
      </>
    )
}

export default Home;