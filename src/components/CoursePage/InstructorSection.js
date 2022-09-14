import React from "react";
import InstructorCard from "./InstructorCard";
import styles from "./instructorSectionStyles.module.css";

function InstructorSection({ course }) {
  return (
    <section id="instructor">
      <div className="container">
        <div className={styles.instructorSection}>
          <h2>Instructor</h2>
          {course &&
            course.instructors.map((instructor) => (
              <InstructorCard key={instructor.id} instructor={instructor} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default InstructorSection;
