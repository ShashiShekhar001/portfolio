import ConMail from "../components/navbar/con-mail/Con-mail";
import Conhead from "../components/navbar/conhead/Conhead";
import Footer from "../components/navbar/footer/footer";
import Navbar from "../components/navbar/Navbar";

function Contact(){
    return (
        <div>
        <Navbar/>
        <Conhead/>
        <ConMail/>
        <Footer/>
        </div>
    )
}

export default Contact;