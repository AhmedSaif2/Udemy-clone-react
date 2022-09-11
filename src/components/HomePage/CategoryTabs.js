import React from "react";
import styles from "./coursesSectionStyles.module.css";

function CategoryTabs() {
  return (
    <ul className={styles.categoryList}>
      <li>
        <button className={styles.categories}>All</button>
      </li>
      <li>
        <button className={styles.categories}>Python</button>
      </li>
      <li>
        <button className={styles.categories}>Excel</button>
      </li>
      <li>
        <button className={styles.categories}>Web Development</button>
      </li>
      <li>
        <button className={styles.categories}>JavaScript</button>
      </li>
      <li>
        <button className={styles.categories}>Data Science</button>
      </li>
      <li>
        <button className={styles.categories}>AWS Certification</button>
      </li>
      <li>
        <button className={styles.categories}>Drawing</button>
      </li>
    </ul>
  );
}

export default CategoryTabs;
