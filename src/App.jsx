import React from "react";
import "./App.css";
import Navbar from "./components/Header/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import InPlay from "./pages/InPlay";
import Today from "./pages/Today";
import Tomorrow from "./pages/Tomorrow";
import Fullmarket from "./pages/Fullmarket";
import Cricket from "./pages/Cricket";
import { AppProvider } from "./Context/AppContext";

const App = () => {
  return (
    <div>
      <AppProvider>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="in-play" element={<InPlay />} />
          <Route path="Today" element={<Today />} />
          <Route path="tomorrow" element={<Tomorrow />} />
          <Route path="fullMarket" element={<Fullmarket />} />
          <Route path="cricket" element={<Cricket />} />
        </Routes>
      </AppProvider>
    </div>
  );
};

export default App;
