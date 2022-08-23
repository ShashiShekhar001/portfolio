import './work.css';
import HeatingMap from './heatingMap'
import Icon1 from './Icon-1';
import UIUX from './uiux';
function Work(){
    return(
      <div className="work">
        <div className="work-container">
         <div className="workTitle">
            <span className="wtitle">What I Do?</span>
         </div>
         <div className="workCont">
            <div className="workImg">
               <HeatingMap/>
            </div>
            <div className="workDet">
               <div className="DetHeader">
               <span className="DetTitle">Full Stack Web Development</span>
               <div className="icon-list">
                    <div className="icon">
                        <Icon1/>
                    </div>
                    <div className="icon">
                        <Icon1/>
                    </div>
                    <div className="icon">
                        <Icon1/>
                    </div>
                    <div className="icon">
                        <Icon1/>
                    </div>
                    <div className="icon">
                        <Icon1/>
                    </div>
                    <div className="icon">
                        <Icon1/>
                    </div>
                    <div className="icon">
                        <Icon1/>
                    </div>
                </div>
               </div>
               <div className='item'><span className="DetItem">⚡ Building resposive front end using NextJs, React-Redux</span>
               </div>
               <div className='item'><span className="DetItem">⚡ Creating backend in Firebase, Node & Express</span></div>
            </div>
         </div>
         <div className="workCont">
            <div className="workImg">
               <UIUX/>
            </div>
            <div className="workDet">
               <div className="DetHeader">
               <span className="DetTitle">UI/UX Design</span>
               <div className="icon-list">
                    <div className="icon">
                        <Icon1/>
                    </div>
                    <div className="icon">
                        <Icon1/>
                    </div>
                    <div className="icon">
                        <Icon1/>
                    </div>
                    <div className="icon">
                        <Icon1/>
                    </div>
                    <div className="icon">
                        <Icon1/>
                    </div>
                    <div className="icon">
                        <Icon1/>
                    </div>
                    <div className="icon">
                        <Icon1/>
                    </div>
                </div>
               </div>
               <div className='item'><span className="DetItem">⚡ Designing highly attractive user interface for mobile and web applications</span>
               </div>
               <div className='item'><span className="DetItem">⚡ Creating the flow of application functionalities to optimize user experience</span></div>
            </div>
         </div>
         </div>
      </div>
    )
}
export default Work;