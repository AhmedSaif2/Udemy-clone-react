import React from "react";
import styles from "./sectionsNavStyles.module.css";

function SectionsNav() {
  return (
    <nav className={styles.navSection}>
      <div className="container">
        <div className={styles.navTabs}>
          <a className={styles.anchor} href="#overview">
            <button>Overview</button>
          </a>
          <a className={styles.anchor} href="#curriculum">
            <button>Curriculum</button>
          </a>
          <a className={styles.anchor} href="#instructor">
            <button>Instructor</button>
          </a>
          <a className={styles.anchor} href="#reviews">
            <button>Reviews</button>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default SectionsNav;
