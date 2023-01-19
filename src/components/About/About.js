import AnimatedLetters from '../AnimationLetters/Animated'
import Loader from 'react-loaders'
import './About.scss'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])


    return (
        <>
            <div className='container about-page' >
                <div className='text-title' >
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']} idx={15} />
                    </h1>

                    <p>I am an experienced coder with a passion for creating visually stunning and functional websites. My background in both coding and business allows me to understand the unique needs of modern businesses and bring their concepts to life online. I have a wealth of experience in coding, and a background in web design and development, I take pride in my ability to create and bring to life websites that are both beautiful and effective.
                        <br />
                        <br />
                        I have a passion for business as well, and have successfully created and sold a few businesses of my own. This experience has given me a deep understanding of what it takes to create and run a successful online business.
                        <br />
                        <br />
                        In addition to my professional skills, I am also passionate about food and enjoy incorporating it into my work. For me, there is nothing better than the satisfaction of creating something amazing while enjoying a plate of hot wings.
                        <br />
                        <br />
                        In summary, I am a skilled coder with a passion for web design and development, and a deep understanding of the unique needs of modern businesses. With my extensive experience and background in both coding and business, I am confident in my ability to bring your concepts to life and create a website that not only looks great, but also effectively promotes and grows your business.
                    </p>

                </div>

                <div className='stage-cube-cont' >
                    <div className='cubespinner' >

                        {/* SIDE 1 */}
                        <div className='face1' >
                            <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                        </div>

                        {/* SIDE 2 */}
                        <div className='face2' >
                            <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                        </div>

                        {/* SIDE 3 */}
                        <div className='face3' >
                            <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                        </div>

                        {/* SIDE 4 */}
                        <div className='face4' >
                            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                        </div>

                        {/* SIDE 5 */}
                        <div className='face5' >
                            <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                        </div>

                        {/* SIDE 6 */}
                        <div className='face6' >
                            <FontAwesomeIcon icon={faPython} color='#28A4D9' />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default About