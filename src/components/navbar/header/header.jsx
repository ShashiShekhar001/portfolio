import FeelingProud from './feelingPround';
import './header.css';
import Icon from './icon';
import Gicon from './gicon';
const Header = ()=>{
    return (
        <div className="header">
            <div className="hdetail">
               <div className="hNames">
               <span className="hName">Shashi Shekhar Jha</span>
               <span className='lName'>(shashishekharjha)</span>
               </div>
               <div className="hcontent">
                     <p className='content'>A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.</p> 
               </div>
               <div className="hIcons">
                    <div className='icon'> <a href="https://github.com/ShashiShekhar001"><Icon/></a></div>
                    <div className='icon'><a href="mailto: sssshekharjha@gmail.com"><Gicon/></a></div>
               </div>
               <div className="hButton">
                  <button className='star'>⭐ Star Me On Github</button>
               </div>
            </div>
            <div className="hImg">
            <FeelingProud/>
            </div>
        </div>
    )
}
export default Header;