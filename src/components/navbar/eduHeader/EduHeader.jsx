import './eduheader.css';
import EduImg from './EduImg';
import Icon from './Icon';
function EduHeader(){
    return (
        <div className="education">
            <div className="eduImg">
             <EduImg/>
            </div>
            <div className="educont">
               <span className='edu-title'>Education</span> 
               <span className="edu-det">Basic Qualification and Certifications</span>
               <div className="comp-sites">
                <Icon/>
                <Icon/>
                </div>  
            </div>
        </div>
    )
}
export default EduHeader;