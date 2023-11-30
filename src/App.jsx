import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../public/style/index.css';
import Home from './pages/Home';
import Team from './pages/Team';
import Service from './pages/Service';
import Project from './pages/Project';
import Testimonial from './pages/Testimonial';


const App = () => {
  return (
    <>
      {/* <Header/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/testimonial' element={<Testimonial/>}/>
      </Routes>
      {/* <Footer/> */}
    </>
  );
};

export default App;