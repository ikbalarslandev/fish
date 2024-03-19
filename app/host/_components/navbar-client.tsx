"use client";

import Link from "next/link";
import Image from "next/image";
import { LogoutButton } from "@/components/auth/logout-button";
import { useState } from "react";

export const NavbarClient = ({ className }: any) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`relative container m-0 p-0  ${className} `}>
      <div className="flex items-center justify-between mx-3 ">
        <div className="pt-2 text-5xl">Fish</div>

        {/* hamburger icon */}
        <div className="md:hidden">
          <button
            id="menu-btn"
            className={` block hamburger  focus:outline-none ${
              isMenuOpen ? "open" : ""
            }`}
            onClick={toggleMenu}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </div>
      <div
        className={`md:hidden z-50 sticky   ${
          isMenuOpen ? "block " : "hidden"
        }`}
      >
        <div
          id="menu"
          className={` absolute flex-col items-center pb-5  w-full    bg-gray-100 ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          <LogoutButton>Logout</LogoutButton>
        </div>
      </div>
    </nav>
  );
};

export default NavbarClient;
