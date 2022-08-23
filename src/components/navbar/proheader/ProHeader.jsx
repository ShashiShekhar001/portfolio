import './proheader.css';
import Icon1 from './Icon1';
function ProHeader() {
    return(
        <div className="proheader">
           <div className="prohead-cont">
              <div className="prohead-img">
                <Icon1/>
              </div>
              <div className="prohead-detail">
                <div className="detail-cont">
                    <div className="detail-title">
                      <h1 className="pro-title">Projects</h1>
                    </div>
                    <div className="detail-info">
                      <p className="pro-info">My projects makes use of vast variety of latest technology tools. My best experience is to create Web Development projects and deploy them using cloud infrastructure.</p>
                    </div>
                </div>
              </div>
           </div>
        </div>
    )
}
export default ProHeader;