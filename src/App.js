import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import React from "react";

const App = () => {
  return (
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
  );
};

export default App;
