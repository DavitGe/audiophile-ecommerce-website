import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage";
import data from "./data.json";

function App() {
  return (
    <Router>
      <Header data={data} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/category/:category"
          element={<CategoryPage data={data} />}
        />
        <Route path="/product/:id" element={<ProductPage data={data} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
