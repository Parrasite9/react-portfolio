import './Contact.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimationLetters/Animated'
import { useState, useEffect, useRef } from 'react'
import emailJs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
// import { Marker, Popup } from 'react-leaflet'


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailJs.sendForm(
            'service_gqp7he5',
            'template_6ufyan1',
            form.current,
            'C1NQS6PIhSTNngfAj'
        )
        .then (() => {
            alert('Message Successfully Sent')
        },
        () => {
            alert('Failed to send the message, please try again!')
            console.log();
        })
    }

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container contact-page' >
                <div className='text-zone' >
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']} idx={15} />
                    </h1>

                    <p>
                        I am excited about the prospect of taking on ambitious and large-scale freelance projects, but I am also open to other opportunities. 
                        If you have any specific requests or questions, please don't hesitate to reach out to me via the contact form provided. 
                        I am always happy to discuss potential projects and explore how I may be able to assist you.
                    </p>

                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail} >
                            <ul>

                                {/* NAME  */}
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>

                                {/* EMAIL  */}
                                <li className='half'>
                                    <input type='email' name='email' placeholder='youremail@email.com' required />
                                </li>

                                {/* SUBJECT  */}
                                <li>
                                    <input type='text' name='subject' placeholder='Subject' required />
                                </li>

                                {/* MESSAGE  */}
                                <li>
                                    <textarea placeholder='Message' name='message' required ></textarea>
                                </li>

                                {/* SUBMIT  */}
                                <li>
                                    <input type='submit' className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>

                {/* LOCATION INFORMATION  */}
                <div className='info-map' >
                    Isaiah Johnson,
                    <br />
                    Fort Stockton, TX
                    <br />
                    USA
                    <br />
                    <span>JohnsonIsaiah13@yahoo.com</span>
                </div>

                <div className='map-wrap' id='map'>
                    <MapContainer center={[30.8940, 257.115]} zoom={13} scrollWheelZoom={false}>
                        {/* <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' /> */}
                        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[30.8940, 257.115]}>
                            <Popup>Isaiah lives here, let's get coffee!</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact 