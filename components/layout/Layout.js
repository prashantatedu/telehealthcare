import Link from "next/link";
import React from "react";
import navstyles from "./Layout.module.css";

const Layout = ({ children }) => {
  const handleLogout = () => {
    console.log("logout");
  };
  return (
    <>
      <header>
        <nav>
          <ul className={navstyles.header__links}>
            <div className={navstyles.header__navlink}>
              <li>
                <Link href={"/"}>
                  <h2>Telehealth</h2>
                </Link>
              </li>
            </div>
            <div className={navstyles.header__navlink}>
              <li>
                <Link href={"/auth"}>SignIn</Link>
              </li>
              <li>
                <button type="button" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </div>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
