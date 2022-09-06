import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/Udemy-Clone-React" element={<HomePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
