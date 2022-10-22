import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/header";
import HomePage from "./pages/HomePage";

const HelloWorld = () => {
  return (
    <div>
      <p>HOME</p>
    </div>
  );
};
function App() {
  return (
    <Router>
      <Header />
      {/* <div>
        <Link to="/">home</Link>
        <Link to="/notes">notes</Link>
        <Link to="/users">users</Link>
      </div> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
