import React, { useState } from "react";
import styles from "./reviewSectionStyles.module.css";
import FontAwesomeIconList from "../General Usage/FontAwesomeIconList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ReviewCard({ review }) {
  const [feedback, setFeedback] = useState(-1);

  return (
    <div className={styles.reviewCard}>
      <div className={styles.details}>
        <div className={styles.profilePic}>{review.name[0]}</div>
        <div className={styles.nameAndRate}>
          <div>{review.name}</div>
          <div>
            <FontAwesomeIconList rate={review.rate}></FontAwesomeIconList>
          </div>
        </div>
      </div>
      <p>{review.content}</p>
      <div className={styles.feedback}>
        Helpful?
        <FontAwesomeIcon
          onClick={() => (feedback === 1 ? setFeedback(-1) : setFeedback(1))}
          className={styles.feedbackIcon}
          icon={(feedback === 1 ? "fa-solid" : "fa-regular") + " fa-thumbs-up"}
        />
        <FontAwesomeIcon
          onClick={() => (feedback === 0 ? setFeedback(-1) : setFeedback(0))}
          className={styles.feedbackIcon}
          icon={
            (feedback === 0 ? "fa-solid" : "fa-regular") + " fa-thumbs-down"
          }
        />
      </div>
    </div>
  );
}

export default ReviewCard;
