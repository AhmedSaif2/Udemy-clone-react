import React, { useState } from "react";
import styles from "./accordionStyles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Accordion({ title, content }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.accordionItem}>
      <div
        className={styles.accordionTitle}
        onClick={() => setIsActive(!isActive)}
      >
        <span>
          {isActive ? (
            <FontAwesomeIcon
              className={styles.icon}
              icon="fa-solid fa-angle-up"
            />
          ) : (
            <FontAwesomeIcon
              className={styles.icon}
              icon="fa-solid fa-angle-down"
            />
          )}
        </span>
        <span>{title}</span>
      </div>
      {isActive && (
        <div className={styles.accordionContent}>
          {content.map((item, index) => (
            <div key={index}>
              <span>
                <FontAwesomeIcon icon="fa-solid fa-circle-play" />
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Accordion;
