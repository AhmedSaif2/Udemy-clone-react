import React from "react";
import styles from "./OffersSectionStyles.module.css";

function OffersSection() {
  return (
    <section className={"container " + styles.offers}>
      <div className={styles.offersCard}>
        <h2>New to Udemy? Lucky you.</h2>
        <p>
          Courses start at E£169.99. Get your new-student offer before it
          expires.
        </p>
      </div>
    </section>
  );
}

export default OffersSection;
