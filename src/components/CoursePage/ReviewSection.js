import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ReviewCard from "./ReviewCard";
import styles from "./reviewSectionStyles.module.css";
function ReviewSection({ course }) {
  return (
    <section id="reviews">
      <div className="container">
        <div className={styles.reviewSection}>
          <h2>
            <FontAwesomeIcon icon="fa-solid fa-star" className={styles.icon} />{" "}
            {course.rating} course rating • {course.totalreviews} reviews
          </h2>
          <div className={styles.reviewsContent}>
            {course &&
              course.reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewSection;
