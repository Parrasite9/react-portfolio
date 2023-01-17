import Sidebar from '../Sidebar/Sidebar'
import './Layout.scss'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <div className='App' >
                <Sidebar />
                <div className='page' >
                    {/* LT STANDS FOR LESS (<) THAN AND GT STANDS FOR GREATER THAN (>)
                    THE & SYMBAL ALLOWS YOU TO USE THESE SYMBALS IN TEXT EDITOR WITHOUT
                    CREATING AN ELEMENT. */}
                    <span className='tags top-tags' >&lt;body&gt;</span>

                    <Outlet />

                    <span className='tags bottom-tags'>
                        &lt;/body&gt;
                        <br />
                        <span className='bottom-tag-html'>&lt;/html&gt;</span>    
                    </span>
                </div>
            </div>
        </>
    )
}

export default Layout