import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import LanguageProvider from "./Contexts/LanguageContext.jsx";
import FormProvider from "./Contexts/FormContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LanguageProvider>
      <FormProvider>
        <App />
      </FormProvider>
    </LanguageProvider>
  </BrowserRouter>
);
