import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import RealEstate from './RealEstate';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/real-estate" element={<RealEstate />} />
      </Routes>
    </Router>
  );
}

export default App;