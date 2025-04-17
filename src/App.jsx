import React from "react";
import Homepage from "./Pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Swwspage from "./Pages/Swwspage";
import Swwospage from "./Pages/Swwospage";
import Dwwspage from "./Pages/Dwwspage";
import Dwwospage from "./Pages/Dwwospage";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ISFSW" element={<Swwspage />} />
        <Route path="/ISFS" element={<Swwospage />} />
        <Route path="/ISFDW" element={<Dwwspage />} />
        <Route path="/ISFD" element={<Dwwospage />} />
      </Routes>
    </Router>
  );
};

export default App;
