import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import data from "./data.json";

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
        <Route
          path="/category/:category"
          element={<CategoryPage data={data} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
