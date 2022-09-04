import "./App.css";
import CoursesSection from "./components/CoursesSection";
import Navbar from "./components/Navbar";
import OffersSection from "./components/OffersSection";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <OffersSection></OffersSection>
      <CoursesSection></CoursesSection>
    </div>
  );
}

export default App;
