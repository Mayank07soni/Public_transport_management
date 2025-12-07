import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Screens/MainPage";
import TrainPage from "./Screens/TrainPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/TrainDetailsPage" element={<TrainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
