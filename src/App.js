import React, { useRef, useState } from "react";

import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import './App.css';
function App() {
  return (
  <div className="Container">
  <Sidebar/>
  <Main />
  </div>
  
  )
}


export default App;
