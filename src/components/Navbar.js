import React from "react";
import styles from "./NavbarStyles.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { far } from "@fortawesome/free-regular-svg-icons";
import SearchForm from "./SearchForm";
import { Link } from "react-router-dom";

library.add(fas, far);

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <FontAwesomeIcon
        className={styles.dropdownMenu}
        icon="fa-soild fa-bars"
      ></FontAwesomeIcon>
      <Link to="/Udemy-Clone-React">
        <img
          src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
          alt="Udemy logo"
        />
      </Link>
      <button className={styles.navLink}>Categories</button>
      <SearchForm></SearchForm>
      <div className={styles.collapseLinks}>
        <button className={styles.navLink}>Udemy Business</button>
        <button className={styles.navLink}>Teach On Udemy</button>
      </div>
      <button className={styles.navLink}>
        <FontAwesomeIcon icon="fa-soild fa-cart-shopping"></FontAwesomeIcon>
      </button>

      <div className={styles.smallScreenSearch}>
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass"></FontAwesomeIcon>
        <FontAwesomeIcon icon="fa-solid fa-cart-shopping"></FontAwesomeIcon>
      </div>

      <div className={styles.userAccount}>
        <button className={styles.loginButton}>Log in</button>
        <button className={styles.signupButton}>Sign up</button>
        <button className={styles.loginButton}>
          <FontAwesomeIcon icon="fa-solid fa-globe"></FontAwesomeIcon>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
