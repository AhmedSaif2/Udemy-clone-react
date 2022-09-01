import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { far } from "@fortawesome/free-regular-svg-icons";
import styles from "./courseStyles.module.css";

library.add(fas, far);
const maxRate = 5;

const renderStars = (rate) => {
  rate = Math.floor(rate);
  let stars = [];
  for (let i = 0; i < maxRate; i++) {
    if (i < rate) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          className={styles.star}
          icon="fa-solid fa-star"
        />
      );
    } else {
      stars.push(
        <FontAwesomeIcon
          key={i}
          className={styles.star}
          icon="fa-regular fa-star"
        />
      );
    }
  }
  return stars;
};

function FontAwesomeIconList(props) {
  return <span>{renderStars(props.rate)}</span>;
}

export default FontAwesomeIconList;
