import './projects.css';

function Project(){
    const mystyle={
        color:"#14213D",
        textDecoration:"none"
    }
  return (
    <div className="project">
      <div className="grid-container">
        
      <a href="https://github.com/ShashiShekhar001/Netflix-clone" style={mystyle}>
         <div className="grid-item">
            <div className="item-cont">
                <h1 className="item-name">NETFLIX-CLONE</h1>
                <p className="item-detail">Hello 👋 Take a look at 🎥NETFLIX (Movie/TV Series Info Web App)🎥 and Enjoy Your Favourites Anytime Anywhere.</p>
                <p className="item-date">Created on 2021-03-29</p>
            </div>
         </div></a>
         <a href="https://github.com/ShashiShekhar001/mytunes-clone" style={mystyle}>
         <div className="grid-item">
            <div className="item-cont">
                <h1 className="item-name">MYTUNES-CLONE</h1>
                <p className="item-detail">Hello 👋 Take a look at 🎵 MYTUNES (Music/Series Theme Web App)
🎵 and Enjoy Your Favourites Anytime Anywhere.</p>
                <p className="item-date">Created on 2021-03-29</p>
            </div>
         </div></a>
         <a href="https://github.com/ShashiShekhar001/Creative-Agency" style={mystyle}>
         <div className="grid-item">
            <div className="item-cont">
                <h1 className="item-name">CREATIVE-AGENCY</h1>
                <p className="item-detail">Hello 👋 Take a look at this site ( Web App) and Enjoy Your Favourites Anytime Anywhere.</p>
                <p className="item-date">Created on 2021-03-29</p>
            </div>
         </div></a>
         <div className="grid-item">
            <div className="item-cont">
                <h1 className="item-name">PROJECT-NAME</h1>
                <p className="item-detail">Hello 👋 Take a look at 🎥SHWETFLIX (Movie/TV Series Info Web App)🎥 and Enjoy Your Favourites Anytime Anywhere.</p>
                <p className="item-date">Created on 2021-03-29</p>
            </div>
         </div>
         <div className="grid-item">
            <div className="item-cont">
                <h1 className="item-name">PROJECT-NAME</h1>
                <p className="item-detail">Hello 👋 Take a look at 🎥SHWETFLIX (Movie/TV Series Info Web App)🎥 and Enjoy Your Favourites Anytime Anywhere.</p>
                <p className="item-date">Created on 2021-03-29</p>
            </div>
         </div>
         <div className="grid-item">
            <div className="item-cont">
                <h1 className="item-name">PROJECT-NAME</h1>
                <p className="item-detail">Hello 👋 Take a look at 🎥SHWETFLIX (Movie/TV Series Info Web App)🎥 and Enjoy Your Favourites Anytime Anywhere.</p>
                <p className="item-date">Created on 2021-03-29</p>
            </div>
         </div>
</div>

    </div>
  );
}
export default Project;