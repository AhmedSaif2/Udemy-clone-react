import React from "react";
import styles from "./descriptionSectionStyles.module.css";
import ShowMore from "react-show-more-button";

function DescriptionSection({ course }) {
  return (
    <section>
      <div className="container">
        <div className={styles.descriptions}>
          <h2>Description</h2>
          {course &&
            course.descriptions.map((item, index) => <p key={index}>{item}</p>)}
          <h2>Who this course is for:</h2>
          <ul>
            {course &&
              course.whoFor.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default DescriptionSection;
