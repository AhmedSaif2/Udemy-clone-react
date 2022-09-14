import React from "react";
import Accordion from "./../General Usage/Accordion";
import styles from "./courseContentStyles.module.css";

function countLessons(lectures) {
  let cnt = 0;
  lectures.forEach((lecture) => (cnt += lecture.lessons.length));
  return cnt;
}

function renderContent(course) {
  if (course) {
  }
}

function CourseContent({ course }) {
  return (
    <section id="curriculum">
      <div className="container">
        <div className={styles.courseContent}>
          <h2>Course content</h2>
          {course && (
            <div className={styles.courseDetails}>
              {course.lectures.length} sections •{" "}
              {countLessons(course.lectures)} lectures • {course.hoursCount}h
              total length
            </div>
          )}
          {course &&
            course.lectures.map((lecutre) => (
              <Accordion
                key={lecutre.id}
                title={lecutre.title}
                content={lecutre.lessons}
              />
            ))}
          <h2>Requirements</h2>
          <ul>
            {course &&
              course.requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CourseContent;
