import React from 'react';

import Places from "../src/Componets/Screens/Places";
import Place from "../src/Componets/Screens/Place";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        
        <Routes>
          <Route path="/" element={<Places />} />
          <Route path="/Place/:id" element={<Place />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
