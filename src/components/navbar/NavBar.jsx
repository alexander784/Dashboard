import "./navbar.scss";
import Dash from "../../assets/dash.jpg"
import Logo from "../../assets/Logo.jpg"



const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        {/* <img src={Logo} alt="" /> */}
        <span>Lexander</span>
        </div>
        <div className="icons">
          <img src="" alt="" className="icon" />
          <img src="" alt="" className="icon" />
          <img src="" alt="" className="icon" />
          <div className="notification">
            <img src="/notification.svg" alt="" />
            <span>1</span>
          </div>
          <div className="user">
          <img src={Dash} alt="" />
          <span>Alexander</span>
          </div>

          <img src="/settings.svg" alt="" className="icon" />
        </div>
    </div>
  )
}

export default NavBar;