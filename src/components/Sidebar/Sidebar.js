import { Link, NavLink } from 'react-router-dom'
import './Sidebar.scss'
import Logo2 from '../../assets/images/logo-i2.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faSuitcase, faUser, faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false)
    

    return (
        <>
            <div className='navbar'>
                    {/* <LINK> IS USED FOR ROUTER DOM (USED FROM NPM I ROUTER-DOM) */}
                    <Link className='logo' to='/' >
                        <img src={Logo2} alt='logo' />
                        <img className='sub-logo' src={LogoSubtitle} alt='subTitle' />
                    </Link>

                <nav className={showNav ? 'mobile-show' : ' '}>

                    {/* HOME  */}
                    <NavLink exact='true' activeclassname='active' to='/'>
                        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                    </NavLink>
                    
                    {/* ABOUT  */}
                    <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                    </NavLink>

                    {/* PORTFOLIO  */}
                    <NavLink exact='true' activeclassname='active' className='portfolio-link' to='/portfolio'>
                        <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
                    </NavLink>

                    {/* CONTACT  */}
                    <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                    </NavLink>

                    <FontAwesomeIcon icon={faClose} color='#ff0050' size='3x' className='close-icon' onClick={() => setShowNav(false)} />
                </nav>

                <ul>
                    {/* LINKEDIN LINK */}
                    <li>
                        <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/isaiah-johnson123/'>
                            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                        </a>
                    </li>

                    {/* GITHUB LINK  */}
                    <li>
                        <a target='_blank' rel='noreferrer' href='https://github.com/Parrasite9'>
                            <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                        </a>
                    </li>


                    <li>
                        <a target='_blank' rel='noreferrer' href='https://www.facebook.com/isaiah.johnson.188'>
                            <FontAwesomeIcon icon={faFacebook} color='#4d4d4e' />
                        </a>
                    </li>                  
                </ul>
                <FontAwesomeIcon icon={faBars} color="#ff0050" size='3x' className='hamburger-icon' onClick={() => setShowNav(true)}/>
            </div>
        </>
    )
}

export default Sidebar