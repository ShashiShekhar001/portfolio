import Degree from "../components/navbar/degree/Degree";
import EduHeader from "../components/navbar/eduHeader/EduHeader";
import Footer from "../components/navbar/footer/footer";
import Navbar from "../components/navbar/Navbar";

function Education(){
    return (
        <div>
        <Navbar/>
        <EduHeader/>
        <Degree/>
        <Footer/>
        </div>
    )
}

export default Education;