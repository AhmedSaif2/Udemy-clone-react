import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./overviewCardStyles.module.css";

function OverviewCard({ course }) {
  return (
    <div className={styles.overviewCard}>
      <div className={styles.stickyCard}>
        <img src={course.img} alt={course.title + "Course"} />
        <div className={styles.content}>
          <h2>E£{course.price}</h2>
          <button className={styles.addCart}>Add to Cart</button>
          <button className={styles.buyNow}>Buy now</button>
          <div className={styles.listHeader}>This course includes:</div>
          <ul>
            <li>
              <FontAwesomeIcon className={styles.icon} icon="fa-solid fa-tv" />
              {course.hoursCount} hours on-demand video
            </li>
            <li>
              <FontAwesomeIcon
                className={styles.icon}
                icon="fa-regular fa-file"
              />
              {course.articlesCount} articles
            </li>
            <li>
              <FontAwesomeIcon
                className={styles.icon}
                icon="fa-solid fa-download"
              />
              {course.downloadableResource} downloadable resources
            </li>
            <li>
              <FontAwesomeIcon
                className={styles.icon}
                icon="fa-solid fa-mobile-screen-button"
              />
              Access on mobile and TV
            </li>
            <li>
              <FontAwesomeIcon
                className={styles.icon}
                icon="fa-solid fa-infinity"
              />
              Full lifetime access
            </li>
            <li>
              <FontAwesomeIcon
                className={styles.icon}
                icon="fa-solid fa-trophy"
              />
              Certificate of completion
            </li>
          </ul>
          <div className={styles.share}>
            <a href="#share">Share</a>
            <a href="#gift">Gift This Course</a>
            <a href="#apply">Apply coupon</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewCard;
