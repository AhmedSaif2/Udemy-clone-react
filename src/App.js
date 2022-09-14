import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import CoursePage from "./components/CoursePage/CoursePage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/course/:course_id" element={<CoursePage />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
