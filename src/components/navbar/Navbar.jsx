import './navbar.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

//import {Link,NavLink} from 'react-router-dom';
const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const mystyle = {
        color:"#14213D",
        textDecoration:"none"
    }
    return (
        
        <div>
        <div className='navbar'>
            <div className="navContainer">
            <div className="title">
            <span> &lt;</span>
			<span className="logo-name" >Shashi Shekhar Jha</span>
			<span >/&gt;</span>
            </div>
            <button className="hamburger"
            onClick={() => {
                setIsNavExpanded(!isNavExpanded)
              }}
            >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
            >
            <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
            />
            </svg>
            </button>
            <div className="navbarItems">
                <button className="navButton">
                    <a href='/' style={mystyle}>Home</a>
                  </button>
                <button className="navButton">
                    <a href='/education' style={mystyle}> Education</a>
                    </button>
                <button className="navButton" >
                   <a href='/projects' style={mystyle}> Project</a>
                </button>
                <button className="navButton">
                   <a href='/contact' style={mystyle}> Contact Me </a>
                </button>
            </div>
            </div>
        </div>
        <div className={isNavExpanded?"sidebar-overlay expanded":"sidebar-overlay"}>
       <aside className={isNavExpanded?"sidebar expanded":"sidebar"}>
        <button className="sidebar-close" onClick={() => {
                setIsNavExpanded(!isNavExpanded)
              }}>
            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"/></svg>
          </button>
          <div className="sidebar-links">
          <button className="navButton">
                    <a href='/' style={{textDecoration:"none"}} >Home</a>
                  </button>
                <button className="navButton">
                    <a href='/education' style={{textDecoration:"none"}}> Education</a>
                    </button>
                <button className="navButton">
                   <a href='/projects' style={{textDecoration:"none"}}> Project</a>
                </button>
                <button className="navButton">
                   <a href='/contact' style={{textDecoration:"none"}}> Contact Me </a>
                </button>
         </div>
       </aside>
       </div>
    </div>
    )
}
export default Navbar;