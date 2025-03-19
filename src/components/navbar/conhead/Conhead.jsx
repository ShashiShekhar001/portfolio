import './conhead.css';

function Conhead(){
  return (
    <div className="contact-head">
        <div className="con-cont">
            <div className="contact-img">
            <img src="https://hackwittechnologies.com/assets/imgs/service/hackwit-marketing.png" alt="Image not available" style={{maxWidth:'500px'}} />
            </div>
            <div className="contact-detail">
                <h1 className="con-name">Contact Me</h1>
                <p className="con-info">I am available on many social media platforms. Feel free to message me, I will reply within 24 hours. I can help you with React, Node and Opensource Development.</p>
                <button className="con-but">See My Resume</button>
            </div>
        </div>
    </div>
  )
}
export default Conhead;
