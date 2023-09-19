
import { SiAirbnb } from "react-icons/si";
import { IoSearchCircleSharp } from "react-icons/Io5";
import { TbWorld } from "react-icons/tb";
import { FiAlignJustify } from "react-icons/fi";
import { IoPersonCircle } from "react-icons/Io5";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container logo">
        <SiAirbnb className="header-logo" />
        <span className="header-span">airbnb</span>
      </div>

      <div className="header-container ">
        <div className="center-border">
          <div className="header-container-center-box"><p>Anywhere</p></div>

          <div className="header-container-center-box"><p>Any week</p></div>

          <div className="header-container-center-box">
            <div className="header-container-center-box-search">
              <p>Add quests?</p>
              <IoSearchCircleSharp className="header-container-center-box-search-icons" />
            </div>
          </div>
        </div>
      </div>

      <div className="header-container secLogin">
        <div className="header-container-sections">
          <p className="header-container-sections-p">Airbnb your home</p>
          <TbWorld className="header-container-sections-icons"/>
          <div className="header-container-sections-login">
            <FiAlignJustify className="header-container-sections-login-icons" />
            <IoPersonCircle className="header-container-sections-login-icons" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
