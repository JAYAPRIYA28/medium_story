import React from "react";
import Home from "./Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Profile from "./Profile";

function App(){
    return (
        <div>
          <Router>
          <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Profile/:title"  element={<Profile/>}/>
          </Routes>
          
          </Router>
          
        </div>
    )
}

export default App;