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
            </div>
         </div></a>
         <a href="https://github.com/ShashiShekhar001/mytunes-clone" style={mystyle}>
         <div className="grid-item">
            <div className="item-cont">
                <h1 className="item-name">MYTUNES-CLONE</h1>
                <p className="item-detail">Hello 👋 Take a look at 🎵 MYTUNES (Music/Series Theme Web App)
🎵 and Enjoy Your Favourites Anytime Anywhere.</p>
            </div>
         </div></a>
         <a href="https://github.com/ShashiShekhar001/Creative-Agency" style={mystyle}>
         <div className="grid-item">
            <div className="item-cont">
                <h1 className="item-name">CREATIVE-AGENCY</h1>
                <p className="item-detail">Hello 👋 Take a look at this site ( Web App) and Enjoy Your Favourites Anytime Anywhere.</p>
            </div>
         </div></a>
         <a href="https://github.com/ShashiShekhar001/Roadmap_shop" style={mystyle}>
         <div className="grid-item">
            <div className="item-cont">
                <h1 className="item-name">ROADMAP-SHOP</h1>
                <p className="item-detail">Hello 👋 Take a look at this site and Choose the path that is correct for you</p>
            </div>
         </div>
         </a>
</div>

    </div>
  );
}
export default Project;
