import Footer from "../components/navbar/footer/footer";
import Header from "../components/navbar/header/header";
import Navbar from "../components/navbar/Navbar";
import Work from "../components/navbar/work/work";

function Home(){
    return (
        <div>
        <Navbar/>
        <Header/>
        <Work/>
        <Footer/>
        </div>
    )
}

export default Home;