import React from "react";
import "./Header.css";
const Header = (props) => {
  return (
    <div>
      <nav>
        <div className="logo">
          <a href="">LOGO</a>
        </div>
        <div className="menu">
          <a href="">Home</a>
          <a href="">Contact</a>
          <a href="">
            Cart <span>{props.count}</span>
          </a>
          <a href="">Login</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
