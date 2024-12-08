import "./App.css";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./Components/info-box/aboutUs/AboutUs";
import Home from "./Components/Home/Home";
import Contact from "./Components/contact/Contact";
import { useContext } from "react";
import { LanguageContext } from "./Contexts/LanguageContext";

const App = () => {
  const { currentLang, dialogues } = useContext(LanguageContext);

  return (
    <div id="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/aboutUs"
          element={<AboutUs currentLang={currentLang} dialogues={dialogues}/>}
        />
        <Route
          path="/menu"
          element={<AboutUs currentLang={currentLang} dialogues={dialogues}/>}
        />
        <Route
          path="/contact"
          element={<Contact currentLang={currentLang} dialogues={dialogues}/>}
        />
        <Route path="/meat-love" element={<MeatLove currentLang={currentLang} dialogues={dialogues}/>}/>
      </Routes>
    </div>
  );
};

export default App;
