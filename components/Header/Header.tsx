import React from "react";
import { Logo } from "./assest/Logo";
import { MenuIcon } from "./assest/Menu";
import { CartIcon } from "./assest/Cart";

const Header = () => {
  return (
    <div className="header-container">
      <div className="p-2">
        <Logo />
      </div>
      <div className="p-2">
        <button type="button" className="sm:mr-7 mr-3">
          <MenuIcon />
        </button>
        <button type="button">
          <CartIcon />
        </button>
      </div>
    </div>
  );
};

export default Header;
