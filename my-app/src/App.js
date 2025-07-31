



import './App.css';
import Navbar from './components/Navbar';
import Part1 from './components/part1';
import Part2 from './components/part2';
import Part3 from'./components/part3';
import Part4 from './components/part4';
import Part5 from './components/part5';

import { BrowserRouter, Routes, Route } from 'react-router-dom';






function App() {
  return (

  <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path='/part2' element={<Part1/>}/>
          <Route path='/part2' element={<Part2/>}/>
          <Route path='/part3' element={<Part3/>}/>

      </Routes>
        {/* <Part1 />
       <Part2 />
        <Part3 /> */}
      <Part4/>
    <Part5/>
    </BrowserRouter>






    
   
     

   
   
        
   
   




  );
}

export default App;
