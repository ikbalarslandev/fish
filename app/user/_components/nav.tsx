"use client";

import Link from "next/link";
import { UserButton } from "@/components/auth/user-button";
import { useCurrentRole } from "@/hooks/use-current-role";
import { useState } from "react";
import { usePathname } from "next/navigation";

export const Nav = () => {
  const role = useCurrentRole();
  const path = usePathname();

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative container m-0 p-0  ">
      <div className="flex items-center justify-between mx-3 ">
        <div className="pt-2 text-5xl">
          <Link href="/">Fish</Link>
        </div>
        <div className="hidden space-x-6 md:flex">
          <div className="pl-32">
            <UserButton />
          </div>
        </div>

        {/* hamburger icon */}
        <div className="md:hidden">
          <button
            id="menu-btn"
            className={` block hamburger  focus:outline-none ${
              isMenuOpen ? "open" : ""
            }`}
            onClick={toggleMenu}
          >
            {path === "/" ? (
              <div>
                <span className="hamburger-top bg-white"></span>
                <span className="hamburger-middle bg-white"></span>
                <span className="hamburger-bottom bg-white"></span>
              </div>
            ) : (
              <div>
                <span className="hamburger-top bg-cyan-700"></span>
                <span className="hamburger-middle bg-cyan-700"></span>
                <span className="hamburger-bottom bg-cyan-700"></span>
              </div>
            )}
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
          className={` absolute flex-col items-center py-3  w-full  gap-2  bg-gray-100 ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          <UserButton toggleMenu={toggleMenu} />
        </div>
      </div>
    </nav>
  );
};
