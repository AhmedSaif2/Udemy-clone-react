import React from "react";
import styles from "./NavbarStyles.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, far);

function SearchForm() {
  return (
    <form className={styles.searchForm}>
      <button className={styles.searchButton}>
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass"></FontAwesomeIcon>
      </button>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search for anything"
      />
    </form>
  );
}

export default SearchForm;
