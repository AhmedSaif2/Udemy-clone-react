import React from "react";
import styles from "./overviewSectionStyles.module.css";

const renderOverview = (overview) => {
  let items = [];
  overview.forEach((item, index) => {
    items.push(<li key={index}>{item}</li>);
  });
  return items;
};

function OverviewSection({ course }) {
  const { overview } = course;
  const overviewList = overview ? renderOverview(overview) : "";
  return (
    <section id="overview" className="container">
      <div className={styles.overviewSection}>
        <h2>What you'll learn</h2>
        <ul>{overviewList}</ul>
      </div>
    </section>
  );
}

export default OverviewSection;
