import React from "react";
import { Link } from "react-router-dom";
import styles from "./courseStyles.module.css";
import FontAwesomeIconList from "./../General Usage/FontAwesomeIconList";
import { Popover, Whisper, Button } from "rsuite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

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
  const [like, setlike] = useState(0);

  const speaker = (
    <Popover className={styles.popover} arrow={true}>
      <h2>{course.title}</h2>
      <p className={styles.lastUpdated}>
        Updated <strong>{course.last_update_date}</strong>
      </p>
      <p className={styles.details}>
        {course.content_info +
          " • " +
          course.instructional_level +
          " • " +
          (course.caption_languages.length ? "" : "No") +
          "Subtitles"}
      </p>
      <p>{course.headline}</p>
      <ul>
        {course.objectives_summary.map((item, index) => (
          <li key={index}>
            <FontAwesomeIcon className={styles.icon} icon="fa-solid fa-check" />
            {item}
          </li>
        ))}
      </ul>
      <div className={styles.userButtons}>
        <button className={styles.addCart}>Add to Cart</button>
        <button onClick={() => setlike(1 - like)} className={styles.love}>
          <FontAwesomeIcon
            className={styles.icon}
            icon={(like ? "fa-solid" : "fa-regular") + " fa-heart"}
          />
        </button>
      </div>
    </Popover>
  );

  return (
    <>
      <Whisper
        placement="autoHorizontal"
        trigger="hover"
        controlId="control-id-hover"
        speaker={speaker}
        enterable
        delayOpen={500}
      >
        <Button className={styles.popoverTrigger}>
          <Link to={course.url.slice(1)} className={styles.course}>
            <img src={course.image_240x135} alt={course.category + "Course"} />
            <h2>{course.title}</h2>
            <span>{renderInstructors(course.visible_instructors)}</span>
            <br />
            <span className={styles.rating}>
              {roundRate(course.avg_rating)}
            </span>
            <FontAwesomeIconList rate={course.avg_rating}></FontAwesomeIconList>
            <span>({course.num_reviews})</span>
            <h2>E£599.99</h2>
          </Link>
        </Button>
      </Whisper>
    </>
  );
}

export default CourseCard;
