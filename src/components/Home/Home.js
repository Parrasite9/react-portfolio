import { useState, useEffect } from 'react'
import Hero_i from '../../assets/images/hero-i.png'
import { Link } from 'react-router-dom'
// import './Layout.scss';
import './Home.scss'
import AnimatedLetters from '../AnimationLetters/Animated'
import Logo from './Logo/Logo.js'
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    // I in this array is Hero_i, so it will not be in array
    const isaiahArray = ['s', 'a', 'i', 'a', 'h'] 
    const jobArray = ['s', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'e', 'n', 'g', 'i', 'n', 'e', 'e', 'r']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className="container home-page" >
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img src={Hero_i} alt='developer' />
                        <AnimatedLetters letterClass={letterClass} strArray={isaiahArray} idx={15} />
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
                    </h1>

                    <h2>Full Stack Developer / Wordpress Expert</h2>
                    <Link to='/contact' className='flat-button'>CONTACT ME</Link>
                </div>

                <Logo />
            </div>

            <Loader type='pacman' />
        </>
    )
}

export default Home