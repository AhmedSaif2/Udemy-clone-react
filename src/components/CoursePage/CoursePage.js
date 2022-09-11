import React, { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CourseContent from "./CourseContent";
import DescriptionSection from "./DescriptionSection";
import InstructorSection from "./InstructorSection";
import OverviewCard from "./OverviewCard";
import OverviewSection from "./OverviewSection";
import ReviewSection from "./ReviewSection";
import SectionsNav from "./SectionsNav";
import TitleSection from "./TitleSection";

const url = "https://ahmedsaif2.github.io/JsonServer/courses_data.json";

const getCourseIndex = (courses, link) => {
  let index = 0;
  courses.forEach((course, i) => {
    if (course.link == link) {
      index = i;
    }
  });
  return index;
};

function CoursePage() {
  const [course, setcourse] = useState("");
  const params = useParams();
  useEffect(() => {
    async function fetchCourses() {
      try {
        const Response = await fetch(url);
        const data = await Response.json();
        let index = getCourseIndex(data.courses, params.course_id);
        setcourse(data.courses[index]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCourses();
  }, []);

  return (
    <>
      <OverviewCard course={course} />
      <TitleSection course={course} />
      <SectionsNav />
      <OverviewSection course={course} />
      <CourseContent course={course} />
      <DescriptionSection course={course} />
      <InstructorSection course={course} />
      <ReviewSection course={course} />
    </>
  );
}

export default CoursePage;
