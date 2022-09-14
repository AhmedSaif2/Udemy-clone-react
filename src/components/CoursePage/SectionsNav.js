import React from "react";
import styles from "./sectionsNavStyles.module.css";
import { Link, animateScroll as scroll } from "react-scroll";

function SectionsNav() {
  return (
    <nav className={styles.navSection}>
      <div className="container">
        <div className={styles.navTabs}>
          <Link className={styles.anchor} to="overview">
            <button>Overview</button>
          </Link>
          <Link className={styles.anchor} offset={-70} to="curriculum">
            <button>Curriculum</button>
          </Link>
          <Link className={styles.anchor} offset={-70} to="instructor">
            <button>Instructor</button>
          </Link>
          <Link className={styles.anchor} offset={-70} to="reviews">
            <button>Reviews</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default SectionsNav;
