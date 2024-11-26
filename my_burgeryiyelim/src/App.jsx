import "./App.css";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./Components/aboutUs/AboutUs";
import Home from "./Components/Home/Home";
import Contact from "./Components/contact/Contact"

const App = () => {
  return (
    <div id="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/menu" element={<AboutUs />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
