import React, { Component } from "react";
import {
     HashRouter, Routes, Route, NavLink
} from "react-router-dom";
import Koti from "./Koti";
import Tarina from "./Tarina";
import Yhteys from "./Yhteys";
 
class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <h1>Perus Single Page Application (SPA)</h1>
            <ul className="header">
              <li><NavLink exact to="/">Koti</NavLink></li>
              <li><NavLink to="/tarina">Tarinaa</NavLink></li>
              <li><NavLink to="/yhteys">Yhteys</NavLink></li>
            </ul>
            <div className="content">
            <Routes>
              <Route path="/" element={<Koti />}/>
              <Route path="/tarina" element={<Tarina/>}/>
              <Route path="/yhteys" element={<Yhteys/>}/>
            </Routes>
            </div>
          </div>
        </HashRouter>
      );
    }
  }
 
export default Main;
