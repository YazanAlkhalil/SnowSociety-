import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './signup';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Signup/>}></Route>
        constole
   
      </Routes>
    </BrowserRouter>
  );
}

export default App;