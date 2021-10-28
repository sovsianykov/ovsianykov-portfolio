import React from 'react'
import logo from 'assets/logo/logo.png'
import ClearIcon from '@mui/icons-material/Clear';
import { social, links } from 'config/data'
import { FaTimes} from "react-icons/fa";

const Sidebar = () => {
    return (
        <aside className={'sidebar show-sidebar '}>
            <div className="sidebar-header">
                <img src={logo} alt="serhii"/>
                <button className="close-btn">
                    <FaTimes/>
                </button>
            </div>
            <ul className='links'>
                {links.map((link) =>{
                    const { id, url ,text, icon } = link;
                    return (
                      <li key={id}>
                        <a href={url} >
                          {icon}
                          {text}
                        </a>
                      </li>
                    );
                })}
            </ul>
            <ul className='social-icons'>
                {social.map((link) =>{
                    const { id, url ,text, icon } = link;
                    return (
                        <li key={id}>
                            <a href={url} target='blanc'>
                                {icon}
                                {text}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </aside>
    )
}

export default Sidebar