// import React from "react";
import "./header.scss";

const Header = (props) => {
  return (
    <header className="header__bar">
      <img
        src="https://www.belikesoftware.com/wp-content/uploads/2018/09/belikelogo_.png"
        alt="Logo de Belike"
        className="header__bar--logo"
      />
    </header>
  );
};

export default Header;
