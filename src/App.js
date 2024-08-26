import React, { useRef, useState } from "react";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar";

import Jobs from "./components/Main/Jobs";
import Applications from "./components/Main/Applications"
import './App.css';
import { Fragment } from 'react';
// import Jobs from "./components/Main/Jobs";
function App() {
  return (
    
  <div className="Container">
{/*  
  <Sidebar/>
  <Jobs /> */}
  <Router>
  <Routes>
  <Route path="/jobs" element={
  <Fragment>
    <Sidebar />
    <Jobs />
  </Fragment>
} />
  <Route path="/applications" element={
  <Fragment>
    <Sidebar />
    <Applications />
  </Fragment>
} />
  
  </Routes>

  </Router>
  </div>

  
  )
}


export default App;
