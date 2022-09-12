import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./instructorSectionStyles.module.css";
import ShowMore from "react-show-more-button/dist/module";
import { HashLink } from "react-router-hash-link";

function InstructorCard({ instructor }) {
  return (
    <div className={styles.instructorCard}>
      <h3>
        <HashLink to={"#" + instructor.name}>{instructor.name}</HashLink>
      </h3>
      <h4>{instructor.job}</h4>
      <div className={styles.instructorDetails}>
        <img src={instructor.img} />
        <ul>
          <li>
            <FontAwesomeIcon icon="fa-solid fa-star" className={styles.icon} />
            {instructor.rating} Instructor Rating
          </li>
          <li>
            <FontAwesomeIcon icon="fa-solid fa-medal" className={styles.icon} />
            {instructor.reviews} Reviews
          </li>
          <li>
            <FontAwesomeIcon icon="fa-solid fa-users" className={styles.icon} />
            {instructor.students} Students
          </li>
          <li>
            <FontAwesomeIcon
              icon="fa-solid fa-circle-play"
              className={styles.icon}
            />
            {instructor.courses} Courses
          </li>
        </ul>
      </div>
      {
        <ShowMore
          classNameButtonDiv={styles.showMoreDiv}
          classNameButton={styles.showMoreButton}
          maxHeight={100}
        >
          <p>{instructor.description}</p>
        </ShowMore>
      }
    </div>
  );
}

export default InstructorCard;
