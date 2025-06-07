import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Header} from "./components/Header";
import { Education } from "./components/Education";
import { Projects } from "./components/Projects";
import { Home} from "./components/Home";
import { Contact } from "./components/Contact";


function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/education" element={<Education />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
