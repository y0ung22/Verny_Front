import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import MenuBar from "./components/MenuBar";
import StartPage from "./pages/StartPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={StartPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
      </Routes>
    </Router>
  );
}

export default App;
