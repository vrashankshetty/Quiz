// import { useEffect,useState } from 'react';
import './App.css';
import Home from './pages/Home/Home';
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Register from './pages/register/Register';







function App() {

  return (
    <BrowserRouter>
    <Routes >
     <Route path='/quiz' element={<Home/>}/>
     <Route path='/' element={<Register/>}/>
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
