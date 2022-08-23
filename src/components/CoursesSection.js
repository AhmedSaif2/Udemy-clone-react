import React from "react";
import CourseCard from "./CourseCard";
import styles from "./coursesSectionStyles.module.css";

const courses = [
  {
    id: 1,
    category: "python",
    course_img: "images/python_course_1.PNG",
    title: "Learn Python: The Complete Python Programming Course",
    author: "Avinash Jain, The Codex",
    rating: 4.4,
    students: "2,916",
    price: "E£679.99",
  },
  {
    id: 2,
    category: "python",
    course_img: "images/python_course_2.PNG",
    title: "Learning Python for Data Analysis and Visualization",
    author: "Jose Portilla",
    rating: 4.4,
    students: "17,984",
    price: "E£1,599.99",
  },
  {
    id: 3,
    category: "python",
    course_img: "images/python_course_3.PNG",
    title: "Python for Beginners - Learn Programming from scratch",
    author: "Edwin Diaz, Coding Faculty Solutions",
    rating: 4.4,
    students: "1,766",
    price: "E£679.99",
  },
  {
    id: 4,
    category: "python",
    course_img: "images/python_course_4.PNG",
    title: "Learn Python: Python for Beginners",
    author: "Abrar Hussain",
    rating: 4.3,
    students: "2,767",
    price: "E£319.99",
  },
  {
    id: 5,
    category: "python",
    course_img: "images/python_course_5.PNG",
    title: "Python Beyond the Basics - Object-Oriented Programming",
    author: "Infinite Skills",
    rating: 4.4,
    students: "2,929",
    price: "E£519.99",
  },
  {
    id: 6,
    category: "excel",
    course_img: "images/excel_course_1.PNG",
    title: "Microsoft Excel 2013 Course Beginners/ Intermediate Training",
    author: "Infinite Skills",
    rating: 4.6,
    students: "1,617",
    price: "E£199.99",
  },
  {
    id: 7,
    category: "excel",
    course_img: "images/excel_course_2.PNG",
    title: "Microsoft Excel 2013 Advanced. Online Excel Training Course",
    author: "Infinite Skills",
    rating: 4.5,
    students: "3,501",
    price: "E£219.99",
  },
];

const renderCourse = () => {
  let Cards = courses.map((item) => (
    <CourseCard key={item.id} course={item}></CourseCard>
  ));
  return Cards;
};

function CoursesSection(props) {
  return (
    <div className={styles.courses_section}>
      <h2>Expand your career opportunities with Python</h2>
      <p>
        Take one of Udemy's range of Python courses and learn how to code using
        this incredibly useful language. Its simple syntax and readability makes
        Python perfect for Flask, Django, data science, and machine learning.
        You'll learn how to build everything from games to sites to apps. Choose
        from a range of courses that will appeal to both beginners and advanced
        developers alike...
      </p>
      <button className={styles.explore}>Explore Python</button>
      <div className={styles.coursesFlexBox}>{renderCourse()}</div>
    </div>
  );
}

export default CoursesSection;
