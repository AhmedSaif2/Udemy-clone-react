import React from "react";
import { Link } from "react-router-dom";
import styles from "./courseStyles.module.css";
import FontAwesomeIconList from "./../General Usage/FontAwesomeIconList";

const roundRate = (Rate) => Math.round(Rate * 10) / 10;

const renderInstructors = (instructors) => {
  let items = [];
  instructors.forEach((instructor, index) => {
    let curItem = instructor.display_name;
    index === instructors.length - 1 ? (curItem += "") : (curItem += ", ");
    items.push(curItem);
  });
  return items;
};

function CourseCard({ course }) {
  return (
    <Link to={course.url.slice(1)} className={styles.course}>
      <img src={course.image_240x135} alt={course.category + "Course"} />
      <h2>{course.title}</h2>
      <span>{renderInstructors(course.visible_instructors)}</span>
      <br />
      <span className={styles.rating}>{roundRate(course.avg_rating)}</span>
      <FontAwesomeIconList rate={course.avg_rating}></FontAwesomeIconList>
      <span>({course.num_reviews})</span>
      <h2>E£599.99</h2>
    </Link>
  );
}

export default CourseCard;
