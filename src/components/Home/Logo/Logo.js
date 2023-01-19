import './Logo.scss'
import Hero3D from '../../../assets/images/hero3d.png'
import { useEffect, useRef } from 'react'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import gsap from 'gsap-trial'
// import { gsap } from 'gsap-trial'

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

                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="300.000000pt" height="1107.000000pt" viewBox="0 0 300.000000 1107.000000"
                preserveAspectRatio="xMidYMid meet">

                    <g className='svg-container' transform="translate(0.000000,1107.000000) scale(0.100000,-0.100000)"
                    fill="#000000" stroke="none">
                        <path d="M233 10867 c-116 -78 -181 -127 -178 -135 3 -8 5 -2410 5 -5338 l0
                        -5324 1227 0 1227 0 169 112 c93 61 171 119 175 127 4 9 7 2415 7 5346 l0
                        5330 -1225 2 -1225 2 -182 -122z m2605 -5219 l2 -5318 -1189 0 c-1076 0 -1189
                        2 -1195 16 -3 9 -6 2392 -6 5297 0 2905 0 5288 0 5295 0 6 -4 12 -10 12 -7 0
                        -10 -1773 -10 -5297 l0 -5298 -148 -98 c-81 -54 -157 -105 -170 -114 l-22 -15
                        0 5299 0 5299 177 121 178 121 1195 -1 1195 -2 3 -5317z m-38 -5348 c3 -1 -9
                        -9 -25 -18 -17 -9 -85 -54 -153 -100 l-122 -82 -1195 2 -1195 3 152 100 151
                        100 1191 -2 c655 -2 1193 -3 1196 -3z"/>
                    </g>
                </svg>

            </div>
        </>
    )
}

export default Logo