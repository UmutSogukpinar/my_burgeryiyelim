import "./App.css";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./aboutUs/AboutUs";
import Home from "./Home/Home";

function App() {
  return (
    <div id="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
