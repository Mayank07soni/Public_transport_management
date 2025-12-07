import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage.jsx";
import TrainPage from "./components/TrainPage.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/TrainDetailsPage" element={<TrainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
