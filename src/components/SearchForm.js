import React from "react";
import styles from "./NavbarStyles.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { far } from "@fortawesome/free-regular-svg-icons";
import { useSearchParams } from "react-router-dom";
import { useRef } from "react";

library.add(fas, far);

function SearchForm() {
  const [, setSearchParams] = useSearchParams();
  const inputRef = useRef(null);
  const handleSearch = (event) => {
    event.preventDefault();
    setSearchParams({ title: inputRef.current.value });
  };

  return (
    <div className={styles.searchForm}>
      <button
        onClick={(event) => handleSearch(event)}
        className={styles.searchButton}
      >
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass"></FontAwesomeIcon>
      </button>
      <input
        ref={inputRef}
        className={styles.searchInput}
        type="text"
        placeholder="Search for anything"
      />
    </div>
  );
}

export default SearchForm;
