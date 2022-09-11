import React from "react";
import FontAwesomeIconList from "./../General Usage/FontAwesomeIconList";
import styles from "./titleSectionStyles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const renderInstructors = (instructors) => {
  let items = [];
  instructors.forEach((instructor, index) => {
    let curItem = instructor.name;
    index === instructors.length - 1 ? (curItem += "") : (curItem += ", ");
    items.push(curItem);
  });
  return items;
};

function TitleSection({ course }) {
  const { instructors } = course;
  const instructorList = instructors ? renderInstructors(instructors) : "";
  return (
    <section className={styles.titleSection}>
      <div className="container">
        <div className={styles.main}>
          <div className={styles.path}>
            {"Development > Programming Languages > Python"}
          </div>
          <img
            className={styles.smallScreen}
            src={course.img}
            alt={course.title}
          />
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          <div className={styles.notes}>
            <div>
              <span className={styles.rate}>
                {course.rating}
                <FontAwesomeIconList rate={4} />
              </span>
              &nbsp;
              <span className={styles.link}>
                ({course.totalreviews} ratings)&nbsp;
              </span>
              {course.enrollments}
              &nbsp;students
            </div>
            <div>
              Created by&nbsp;
              <span className={styles.link}>{instructorList}</span>
            </div>
            <div className={styles.updateDetails}>
              <span>
                <FontAwesomeIcon icon="fa-solid fa-circle-exclamation" />
                &nbsp; Last Updated {course.lastupdated}
              </span>
              <span>
                <FontAwesomeIcon icon="fa-solid fa-globe" />
                &nbsp; English
              </span>
              <span>
                <FontAwesomeIcon icon="fa-solid fa-closed-captioning" />
                &nbsp; English
              </span>
            </div>
            <h2 className={styles.smallScreen}>E£{course.price}</h2>
            <button className={styles.smallScreen + " " + styles.addCart}>
              Add to Cart
            </button>
            <div className={styles.smallScreen + " " + styles.share}>
              <a href="#share">Share</a>
              <a href="#gift">Gift This Course</a>
              <a href="#apply">Apply coupon</a>
            </div>
          </div>
        </div>
      </div>
      <div id="overview"></div>
    </section>
  );
}

export default TitleSection;
