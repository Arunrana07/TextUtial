import "./App.css";
import React, { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar"; // Fixed: lowercase 'navbar' to match file name
import TextForm from "./TextForm";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Alert from "./components/Alert";

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState("light");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500); // Clear alert after 1.5 seconds
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#184a7cff";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtial - Dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtial - Light mode";
    }
  };

  // Button styles based on mode
const buttonStyles = {
  backgroundColor: mode === 'dark' ? '#63d3e2ff' : '#1d0ef148',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  borderRadius: 'none',
  cursor: 'pointer',
  margin: '0 10px',
};


  return (
    // <BrowserRouter>
      <div>
        <Navbar
          mode={mode}
          title="TextUtials"
          About="About"
          Services="Our Services"
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container mx-auto mt-4">
          <TextForm mode={mode} />
          {/* <About mode={mode}/> */}
          <Services mode={mode} />
          <Contact mode={mode} />
          {/* <Routes>
          
            <Route path="/" element={<TextForm mode={mode} />} />
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/services" element={<Services mode={mode} />} />
            <Route path="/contact" element={<Contact mode={mode} />} />
          </Routes> */}
        </div>
      </div>
    // </BrowserRouter>
  );
}

export default App;
