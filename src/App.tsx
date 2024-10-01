import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MusicalPortfolio from './pages/MusicalPortfolio';
import ProgrammingPortfolio from './pages/ProgrammingPortfolio';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/musical-portfolio" element={<MusicalPortfolio />} />
        <Route path="/portfolio/programming-portfolio" element={<ProgrammingPortfolio />} />
      </Routes>
    </Router>
  );
};

export default App;
