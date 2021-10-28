import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext} from "../../context/context";


const Home = () => {
    const data = useGlobalContext()
    console.log(data)
    return (
        <main>
            <button className='sidebar-toggle'>
                <FaBars />
            </button>
            <button className='show-modal'>show modal</button>
        </main>
    )

}

export default Home