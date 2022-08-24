import React from "react";
import CourseCard from "./CourseCard";
import CoursesList from "./CoursesList";
import styles from "./coursesSectionStyles.module.css";

function CoursesSection(props) {
  return (
    <div className={styles.courses_section}>
      <h2>Expand your career opportunities with Python</h2>
      <p>
        Take one of Udemy's range of Python courses and learn how to code using
        this incredibly useful language. Its simple syntax and readability makes
        Python perfect for Flask, Django, data science, and machine learning.
        You'll learn how to build everything from games to sites to apps. Choose
        from a range of courses that will appeal to both beginners and advanced
        developers alike...
      </p>
      <button className={styles.explore}>Explore Python</button>
      <CoursesList></CoursesList>
    </div>
  );
}

export default CoursesSection;
