import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimationLetters/Animated'
import './Portfolio.scss'
import portfolioData from '../../Data/portfolio.json'


const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const [portfolio, setPortfolio] = useState([])

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => {
            clearTimeout(timer);
        }
    });

//     // useEffect(() => {
//     //     getPortfolio()
//     // })


//     // const getPortfolio = async () => {
//     //     const querySnapshot = await getDocs(collection(db, 'portfolio'));
//     //     setPortfolio(querySnapshot.docs.map((doc) => doc.data()))
//     // }

    // const renderPortfolio = (portfolio) => {
    //     return (
    //         <div className='images-container' >
    //             {
    //                 portfolioData.map((port, idx) => {
    //                     return (
    //                         <>
    //                             <div className='image-box' key={idx} >
    //                                 <img src='https://i.imgur.com/pOdOOjY.jpg' />
    //                                 <img 
    //                                     src={port.cover} 
    //                                     className='portfolio-image' 
    //                                     alt='portfolio' />

    //                                 <div className='content' >
    //                                     <p className='title' >{port.title}</p>
    //                                     <h4 className='description' >{port.description}</h4>
    //                                     <button className='btn' onClick={() => window.open(port.url)} >View</button>
    //                                 </div>
    //                             </div>

    //                         </>
    //                     )
    //                 })
    //             }
    //         </div>
    //     )
    // }



    // useEffect(() => {
    //     getPortfolio()
    // }, [])

    // const getPortfolio = async () => {
    //     const querySnapshot = await getDocs(collection(db, 'portfolio'))
    //     setPortfolio(querySnapshot.docs.map((doc) => doc.data()))
    // }

    return (
        <>
            <div className='container portfolio-page' >
                <div className='page-title' >
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['P', 'O', 'R', 'T', 'F', 'O', 'L', 'I', 'O']} idx={15} />
                    </h1>

                    <div>
                        {/* {renderPortfolio(portfolioData.portfolio)} */}
                    </div>

                </div>

                {/* <div className='image-container' >
                    <div className='image-box' >
                        <a target='_blank' rel='noreferrer' href='seductivebox.com' >
                            <img src='https://i.imgur.com/pOdOOjY.jpg' />
                        </a>
                        <div className='content' >
                            <p className='title' >SeductiveBox</p>
                            <h4 className='description' >Are you tired of visiting your local adult store and finding a limited selection of poorly fitting and overpriced lingerie? SeductiveBox offers an affordable alternative that prioritizes variety and value. We understand the importance of feeling confident and comfortable in your lingerie, and we strive to provide a wide range of options that cater to different styles, fits, and budgets. Whether you're looking for something classic, trendy, or daring, SeductiveBox has you covered.</h4>
                            <button className='btn' onClick={() => window.open(SeductiveBox)} >View</button>
                        </div>

                        <div className='image-box grid-container'>
                            
                        </div>

                    </div>


                </div> */}

                <div className='grid-container' >

                    {/* SEDUCTIVEBOX  */}
                    <div className='grid-item g1' >
                        <a href='https://www.seductivebox.com'><img src='https://i.imgur.com/pOdOOjY.jpg' /></a>
                    </div>

                    {/* PARRALAX  */}
                    <div className='grid-item g2' >
                        <a href='https://parrasite9.github.io/Parralax/'><img src='https://i.imgur.com/yxT5lvQ.jpg' /></a>
                    </div>

                    {/* TINDOG */}
                    <div className='grid-item g3' >
                        <a href='seductivebox.com'><img src='https://i.imgur.com/NHlYQd8.jpg' /></a>
                    </div>

                    <div className='grid-item g4' >
                        <h2 className='project-title'><b>Single Page Apps</b></h2>
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna in bibendum malesuada, velit velit malesuada eros, vel tempor nisl urna eu velit.</p>
                    </div>

                    {/* THIS IS AN EXAMLPLE IF I EVER CHANGE IT TO SHOW PROJECT DETAILS  */}
                    {/* <div className='grid-item' >
                        <h2 className='project-title'><b>Title</b></h2>
                        <h2>Subtext</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna in bibendum malesuada, velit velit malesuada eros, vel tempor nisl urna eu velit.</p>
                    </div> */}

                    {/* SEDUCTIVEBOX  */}
                    <div className='grid-item g5' >
                        <a href='https://www.seductivebox.com'><img src='https://i.imgur.com/pOdOOjY.jpg' /></a>
                    </div>

                    {/* PARRALAX  */}
                    <div className='grid-item g6' >
                        <a href='https://parrasite9.github.io/Parralax/'><img src='https://i.imgur.com/yxT5lvQ.jpg' /></a>
                    </div>

                    <div className='grid-item g7' >
                        <h2 className='project-title'><b>Full Stack</b></h2>
                        <h2>Python, Django, Postgresql, and more!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna in bibendum malesuada, velit velit malesuada eros, vel tempor nisl urna eu velit.</p>
                    </div>
                    
                    {/* TINDOG */}
                    <div className='grid-item g8' >
                        <a href='seductivebox.com'><img src='https://i.imgur.com/NHlYQd8.jpg' /></a>
                    </div>







                </div>


            </div>

            <Loader type='pacman' />
        </>
    )
}

export default Portfolio

