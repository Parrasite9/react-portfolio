import './Logo.scss'
import Hero_i from '../../../assets/images/hero-i.png'
import HeroDark from '../../../assets/images/hero-dark.png'
import Hero3D from '../../../assets/images/hero3d.png'
import { useEffect, useRef } from 'react'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import gsap from 'gsap-trial'
import Hero2 from '../../../assets/images/LargeLogo.png'


const Logo = () => {
    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)

        gsap.timeline()
        .to(bgRef.current, {
            duration: 1,
            opacity: 1,
        })
        .from(outlineLogoRef.current, {
            drawSVG: 0,
            duration: 20,
        })

        gsap.fromTo(
            solidLogoRef.current, {
                opacity: 0,
            },
            {
                opacity: 1,
                delay: 4,
                duration: 4,
            }
        )
    }, [])


    return (
        <>
            <div className='logo-container' ref={bgRef} >
                <img ref={solidLogoRef} className='solid-logo' src={Hero3D} alt="I" />

                {/* <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="74.000000pt" height="300.000000pt" viewBox="0 0 74.000000 300.000000"
                    preserveAspectRatio="xMidYMid meet">

                    <g className='svg-container' transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
                    fill="#000000" stroke="none">
                        <path ref={outlineLogoRef} d="M140 1505 c0 -1189 3 -1495 13 -1495 18 0 18 2978 0 2985 -10 3 -13
                        -299 -13 -1490z"/>
                        <path d="M720 2993 c-5 -546 -3 -2983 3 -2983 4 0 7 673 7 1495 0 822 -2 1495
                        -5 1495 -3 0 -5 -3 -5 -7z"/>
                    </g>
                </svg> */}

                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="74.000000pt" height="300.000000pt" viewBox="0 0 300.000000 214.000000"
                    preserveAspectRatio="xMidYMid meet">

                    <g className='svg-container' transform="translate(0.000000,214.000000) scale(0.100000,-0.100000)"
                    fill="#000000" stroke="none">
                        <path ref={outlineLogoRef} d="M1328 1949 l-28 -21 0 -859 0 -859 201 0 c187 0 203 1 230 21 l29 20
                        0 860 0 859 -202 0 c-189 -1 -205 -2 -230 -21z m32 -847 l0 -849 -25 -11 -25
                        -11 0 839 c0 825 1 841 20 860 11 11 22 20 25 20 3 0 5 -382 5 -848z m351 828
                        c19 -11 19 -26 19 -826 -1 -448 -4 -822 -7 -830 -4 -11 -37 -14 -179 -14
                        l-174 0 0 833 c0 459 3 837 7 840 11 11 313 8 334 -3z m5 -1695 c-16 -12 -58
                        -15 -205 -15 -165 0 -183 2 -165 15 15 11 57 14 204 14 165 0 183 -1 166 -14z"/>
                    </g>
                </svg>

            </div>
        </>
    )
}

export default Logo