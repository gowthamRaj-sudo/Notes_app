"use client";

import Link from "next/link";
import React, { useState } from "react";
import "../styles/navbar.css";
import { usePathname, useRouter } from "next/navigation";
import { useStore } from "@/store/useStore";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const pathname = usePathname();
  const router = useRouter();
  const logout = useStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    localStorage.removeItem("user");
    router.push("/signin");
  };
  const isHomePage = pathname === "/homepage";
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <h1>Keep Notes</h1>
        </div>

        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="bar top"></span>
          <span className="bar middle"></span>
          <span className="bar bottom"></span>
        </button>

        <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
          <Link href="/about">About</Link>
          <Link href="/notes">Notes</Link>
          <Link href="/account">Account</Link>
          {isHomePage ? (
            <Link href="/homepage" onClick={handleLogout}>
              Logout
            </Link>
          ) : (
            <Link href="/signin">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
