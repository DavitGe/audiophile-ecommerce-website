import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./helpers/ScrollToTop";
import Header from "./components/header";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage";
import CheckoutPage from "./pages/CheckoutPage";
import data from "./data.json";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Header data={data} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/category/:category"
          element={<CategoryPage data={data} />}
        />
        <Route path="/product/:id" element={<ProductPage data={data} />} />
        <Route path="/checkout" element={<CheckoutPage data={data} />} />
      </Routes>
    </Router>
  );
}

export default App;
