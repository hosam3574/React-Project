



import './App.css';
import Navbar from './components/Navbar';
import Part1 from './components/part1';
import Part2 from './components/part2';
import Part3 from'./components/part3';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';









function App() {
  return (

<Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Part1 />} />
        <Route path="/part2" element={<Part2 />} />
        <Route path="/part3" element={<Part3 />} />
      </Routes>
    </Router>







    
   
     

   
   
        
   
   




  );
}

export default App;
