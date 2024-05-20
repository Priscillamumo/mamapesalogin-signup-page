import React from "react";
import "./style.css";
import Login from "./components/login.jsx";
import Signup from "./components/signup.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
