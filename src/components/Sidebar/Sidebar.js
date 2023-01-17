import { Link, NavLink } from 'react-router-dom'
import './Sidebar.scss'
import LogoI from '../../assets/images/i.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    return (
        <>
            <div className='navbar'>
                    {/* <LINK> IS USED FOR ROUTER DOM (USED FROM NPM I ROUTER-DOM) */}
                    <Link className='logo' to='/' >
                        <img src={LogoI} alt='logo' />
                        <img className='sub-logo' src={LogoSubtitle} alt='subTitle' />
                    </Link>

                    <nav>
                    <NavLink exact='true' activeclassname='active' to='/'>
                        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                    </NavLink>
                    

                    <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                    </NavLink>


                    <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                    </NavLink>
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
            </div>
        </>
    )
}

export default Sidebar