import React from "react";
import styles from "./courseStyles.module.css";
import FontAwesomeIconList from "./FontAwesomeIconList";

function CourseCard({ course }) {
  return (
    <div className={styles.course}>
      <img
        src={require("../" + course.course_img)}
        alt={course.category + "Course"}
      />
      <h2>{course.title}</h2>
      <span>{course.author}</span>
      <br />
      <span className={styles.rating}>{course.rating} </span>
      <FontAwesomeIconList rate={course.rating}></FontAwesomeIconList>
      <span>({course.students})</span>
      <h2>{course.price}</h2>
    </div>
  );
}

export default CourseCard;
