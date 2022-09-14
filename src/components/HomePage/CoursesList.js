import React, { useState, useEffect, useRef } from "react";
import CourseCard from "./CourseCard";
import styles from "./coursesListStyles.module.css";
import { Oval } from "react-loader-spinner";
import { useSearchParams } from "react-router-dom";

let coursesData, pythonCourses;
const url = "https://ahmedsaif2.github.io/JsonServer/HomePageCourses.json";

function CoursesList() {
  const [post, setPost] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchParams] = useSearchParams();
  const isMounted = useRef(false);

  useEffect(() => {
    async function fetchCourses() {
      setIsLoading(true);
      try {
        const Response = await fetch(url);
        coursesData = await Response.json();
        pythonCourses = coursesData.data.python_res.items;
        let Cards = pythonCourses.map((item) => {
          return <CourseCard key={item.id} course={item}></CourseCard>;
        });
        setIsLoading(false);
        setPost(Cards);
      } catch (error) {
        setIsLoading(false);
        setError(error);
      }
      isMounted.current = true;
    }
    fetchCourses();
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      function filterCoursesWithTitle() {
        let Cards = [];
        pythonCourses.forEach((item) => {
          let { title } = item,
            searchText = searchParams.get("title")
              ? searchParams.get("title")
              : " ",
            searchTextFound = false;
          for (let i = 0; i < title.length - searchText.length + 1; i++) {
            let curWord = title.substr(i, searchText.length);
            if (curWord.toLowerCase() === searchText.toLowerCase()) {
              searchTextFound = true;
              break;
            }
          }
          if (searchTextFound)
            Cards.push(<CourseCard key={item.id} course={item}></CourseCard>);
        });
        setPost(Cards);
      }
      filterCoursesWithTitle();
    }
  }, [isMounted.current, searchParams]);

  const renderCourses = () => {
    if (isLoading) {
      return (
        <Oval
          height={40}
          width={40}
          color="#000"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#fff"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      );
    } else {
      return error ? <h2>Something Went Wrong</h2> : post;
    }
  };

  return <div className={styles.coursesFlexBox}>{renderCourses()}</div>;
}

export default CoursesList;
