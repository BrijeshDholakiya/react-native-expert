/* eslint-disable @next/next/link-passhref */
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import classes from "./Navbar.module.css";
import Logo from "../public/images/logo.svg";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ConnectForm from "../components/Form/ConnectForm";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [width, setWidth] = useState();

  const mobileMenuRef = useRef(null);

  const handleContactForm = () => setIsOpenForm((isOpenForm) => !isOpenForm);
  const handleMenuToggler = () => setMenuToggle((menuToggle) => !menuToggle);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window?.innerWidth));
    if (window.innerWidth > 800) {
      setMenuToggle(false);
    }
  }, [width]);

  return (
    <React.Fragment>
      {isOpenForm ? <ConnectForm handleOnClick={handleContactForm} /> : ""}

      <nav className={classes.navContainer}>
        <div className={classes.navBrand}>
          <Link href="/#">
            <Image src={Logo} alt="React Native Expert" />
          </Link>
        </div>
        <div className={menuToggle ? classes.mobileMenu : ""}>
          <div
            className={menuToggle ? classes.hambMenu : classes.navItems}
            ref={mobileMenuRef}
          >
            <ul>
              <li>
                <Link href="/">
                  <span className="cp link_font">Services</span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="cp link_font">Portfolio</span>
                </Link>
              </li>

              <li>
                <button onClick={handleContactForm}>Hire Us Now</button>
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.hamburg}>
          <button onClick={handleMenuToggler}>
            <span>{menuToggle ? <CloseIcon /> : <MenuIcon />}</span>
          </button>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
