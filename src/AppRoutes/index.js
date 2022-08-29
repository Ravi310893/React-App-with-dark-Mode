import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import About from '../Pages/About/index';
import Home from '../Pages/Home/index';


const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
      </BrowserRouter>

    </>
  )
}

export default AppRoutes