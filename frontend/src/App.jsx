import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage.jsx";
import TrainPage from "./components/TrainPage.jsx";
import BusPage from "./components/BusPage.jsx";
import MetroPage from "./components/MetroPage.jsx";
import FlightPage from "./components/FlightPage.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/TrainDetailsPage" element={<TrainPage />} />
        <Route path="/BusDetailsPage" element={<BusPage />} />
        <Route path="/MetroDetailsPage" element={<MetroPage />} />
        <Route path="/FlightDetailsPage" element={<FlightPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;