import React, { useContext } from "react";
import "./App.css";
import Navbar from "./components/Header/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import InPlay from "./pages/InPlay";
import Today from "./pages/Today";
import Tomorrow from "./pages/Tomorrow";
import Fullmarket from "./pages/Fullmarket";
import Cricket from "./pages/Cricket";
import { AppContext, AppProvider } from "./Context/AppContext";
import Multimarket from "./pages/Multimarket";
import Soccer from "./pages/Soccer";
import Tennis from "./pages/Tennis";
import ESoccer from "./pages/ESoccer";
import Kabaddi from "./pages/kabaddi";
import VirtualCricket from "./pages/VirtualCricket";
import Login from "./Config/Login";

const App = () => {
  return (
    <AppProvider>
      <MainApp />
    </AppProvider>
  );
};

const MainApp = () => {
  const { loginOpen } = useContext(AppContext);
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="in-play" element={<InPlay />} />
        <Route path="Today" element={<Today />} />
        <Route path="tomorrow" element={<Tomorrow />} />
        <Route path="fullMarket" element={<Fullmarket />} />
        <Route path="cricket" element={<Cricket />} />
        <Route path="multi-markets" element={<Multimarket />} />
        <Route path="Soccer" element={<Soccer />} />
        <Route path="tennis" element={<Tennis />} />
        <Route path="e-soccer" element={<ESoccer />} />
        <Route path="kabaddi" element={<Kabaddi />} />
        <Route path="virtual-cricket" element={<VirtualCricket />} />
      </Routes>

      {loginOpen && <Login />}
    </div>
  );
};

export default App;
