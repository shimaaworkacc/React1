import img from '../assets/avatar.svg'
import Title from './Title'

export default function Home() {
    return <>
        <div className="home min-vh-100 d-flex flex-column justify-content-center align-items-center text-center text-white">
            <img src={img} className='w-25 h-25 p-3' alt="" />
       
            <Title title="start Framework" />
            <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>

    </>
}
