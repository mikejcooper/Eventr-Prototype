import React from "react";
// Rendering Engine - active webpage
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
// Import Archives.js from location
import Archives from "./pages/Archives";
import Featured from "./pages/Featured";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";
import Playground from "./playground/Playground";

// Get app element from index.html
const app = document.getElementById('app');
// Render Layout into app
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured}></IndexRoute>
      <Route path="archives(/:article)" name="archives" component={Archives}></Route>
      <Route path="settings" name="settings" component={Settings}></Route>
      <Route path="playground" name="playground" component={Playground}></Route>
    </Route>
  </Router>,
app);



/*
------------------ NodeJS Notes ---------------------------------

-- Components 
	Node works using components, similar to how <div>'s or <img>'s work in html.
	Each component returns exactly 1 DOM element  



*/
