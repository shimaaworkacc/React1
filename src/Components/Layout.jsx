import Footer from './Footer'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div className='d-flex flex-column justify-content-between min-vh-100 w-100'>
            <Navbar></Navbar>
            <div>
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    )
}
