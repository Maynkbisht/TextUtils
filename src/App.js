import "./App.css";
import React, { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import TextForm from "./components/TextForm.js";
import Alert from "./components/Alert.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");


  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {


    setAlert({
      msg: message,
      type: type,
    });

  

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const togglemode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.background =
        "linear-gradient(45deg, rgb(241, 241, 241) 50%, rgb(158, 232, 255) 50%)";
      showAlert("Light mode has been enabled", "success");

    } else {
      setMode("dark");
      document.body.style.background =
        "linear-gradient(45deg, rgb(92, 92, 92) 50%, rgb(27, 27, 27) 50%)";
      showAlert("Dark mode has been enabled", "success");
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="CodeHeave"
          about="About Us"
          mode={mode}
          togglemode={togglemode}
        />

        <Alert alert={alert} />

        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                heading="Text Editor"
            
                mode={mode}
                showAlert={showAlert}
              />
            }
          />

          <Route path="/about" element={<About mode={mode} />} />
        </Routes>

        <Footer creatername="@CodeHeave" mode={mode} />
      </BrowserRouter>
    </>
  );
}

export default App;
