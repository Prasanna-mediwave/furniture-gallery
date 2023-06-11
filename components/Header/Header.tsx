import React, { useState } from "react";
import { Logo } from "./assest/Logo";
import { MenuIcon } from "./assest/Menu";
import { CartIcon } from "./assest/Cart";
import OnCart from "@/assest/icons/OnCart";

interface HeaderProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ open, setOpen }) => {
  return (
    <div className="header-container">
      <div className="p-2">
        <Logo />
      </div>
      <div className="p-2">
        <button type="button" className="sm:mr-7 mr-3">
          <MenuIcon />
        </button>
        <button type="button" onClick={() => setOpen(!open)}>
          {!open ? <CartIcon /> : <OnCart />}
        </button>
      </div>
    </div>
  );
};
