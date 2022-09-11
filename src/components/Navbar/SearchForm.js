import React from "react";
import styles from "./NavbarStyles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useRef } from "react";

function SearchForm() {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate({
      pathname: "",
      search: `?title=${inputRef.current.value}`,
    });
  };

  const [, setSearchParams] = useSearchParams();
  const inputRef = useRef(null);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchParams({ title: inputRef.current.value });
    goToHome();
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
