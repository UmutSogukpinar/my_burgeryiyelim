import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    tel: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [cleanedTask, setCleanedTask] = useState({
    userName: "",
    email: "",
    tel: "",
    subject: "",
    message: "",
  });
  const resetedFormData = {
    userName: "",
    email: "",
    tel: "",
    subject: "",
    message: "",
  };

  useEffect(() => {
    if (isSubmitted) {
      createForm();
    }
  }, [isSubmitted]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitForm = (event) => {
    event.preventDefault();
    setCleanedTask(cleanTaskData()); // Temiz verileri ayarla
    setIsSubmitted(true);
  };

  const createForm = async () => {
    try {
      const response = await axios.post(
        `http://localhost:2244/contactFormList`, // API endpoint
        cleanedTask
      );
      console.log("Response: ", response.data);
    } catch (error) {
      console.error(
        "Error creating task:",
        error.response ? error.response.data : error.message
      );
    } finally {
      setIsSubmitted(false);
      setFormData(resetedFormData); // Formu sıfırla
    }
  };

  // Verileri temizleme fonksiyonu
  const cleanTaskData = () => {
    const { userName, email, tel, subject, message } = formData;

    const cleanedUserName = userName.replace(/[\x00-\x1F\x7F]/g, "");
    const cleanedEmail = email.replace(/[\x00-\x1F\x7F]/g, "");
    const cleanedTel = tel.replace(/[\x00-\x1F\x7F]/g, "");
    const cleanedSubject = subject.replace(/[\x00-\x1F\x7F]/g, "");
    const cleanedMessage = message.replace(/[\x00-\x1F\x7F]/g, "");

    return {
      userName: cleanedUserName,
      email: cleanedEmail,
      tel: cleanedTel,
      subject: cleanedSubject,
      message: cleanedMessage,
    };
  };

  return (
    <FormContext.Provider value={{ handleChange, submitForm }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
