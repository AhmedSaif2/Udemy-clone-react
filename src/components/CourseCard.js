import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { far } from "@fortawesome/free-regular-svg-icons";
import styles from "./courseStyles.module.css";

library.add(fas, far);

function CourseCard(props) {
  let course = props.course;
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

      <FontAwesomeIcon
        className={styles.star}
        icon="fa-solid fa-star"
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        className={styles.star}
        icon="fa-solid fa-star"
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        className={styles.star}
        icon="fa-solid fa-star"
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        className={styles.star}
        icon="fa-solid fa-star"
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        className={styles.star}
        icon="fa-regular fa-star"
      ></FontAwesomeIcon>
      <span>({course.students})</span>
      <h2>{course.price}</h2>
    </div>
  );
}

export default CourseCard;
