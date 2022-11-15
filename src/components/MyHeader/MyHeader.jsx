import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./MyHeader.css";




const MyHeader = ({ btnText, navigatePath }) => {
  const logoRef = useRef(null);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    // console.log(logoRef.current.classList);
    // logoRef.current.classList.toggle("rotate");
    navigate('/')
  };

  return (
    <nav className="nav-container">
      <div className="left">
        <img
          className="logo"
          ref={logoRef}
          onClick={handleLogoClick}
          src={require("../../images/logo.png")}
          alt="logo"
        />
      </div>

      <div className="right">
        <button
          onClick={() => {
            navigate(`${navigatePath}`);
          }}
          className="right-btn"
        >
          {btnText}
        </button>
      </div>
    </nav>
  );
};

MyHeader.defaultProps = {
  btnText: "enter title",
};

export default MyHeader;
