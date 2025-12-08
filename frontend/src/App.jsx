import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Screens/MainPage.jsx";
import TrainPage from "./Screens/TrainPage.jsx";
import BusPage from "./Screens/BusPage.jsx";
import MetroPage from "./Screens/MetroPage.jsx";
import FlightPage from "./Screens/FlightPage.jsx";
import Login from "./Screens/Login.jsx";
import SignUp from "./Screens/SignUp.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/TrainDetailsPage" element={<TrainPage />} />
        <Route path="/BusDetailsPage" element={<BusPage />} />
        <Route path="/MetroDetailsPage" element={<MetroPage />} />
        <Route path="/FlightDetailsPage" element={<FlightPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;