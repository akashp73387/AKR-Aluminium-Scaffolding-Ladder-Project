import React from "react";
import Homepage from "./Pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Swwspage from "./Pages/Swwspage";
import Swwospage from "./Pages/Swwospage";
import Dwwspage from "./Pages/Dwwspage";
import Dwwospage from "./Pages/Dwwospage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home-page" element={<Homepage />} />
        <Route
          path="/single-width-scaffolding-with-stairway"
          element={<Swwspage />}
        />
        <Route
          path="/single-width-scaffolding-without-stairway"
          element={<Swwospage />}
        />
        <Route
          path="/double-width-scaffolding-with-stairway"
          element={<Dwwspage />}
        />
        <Route
          path="/double-width-scaffolding-without-stairway"
          element={<Dwwospage />}
        />
      </Routes>
    </Router>
  );
};

export default App;
