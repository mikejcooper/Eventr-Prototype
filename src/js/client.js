import React from "react";
// Rendering Engine - active webpage
import ReactDOM from "react-dom";

import Layout from "./components/Layout";

// Get app element from index.html
const app = document.getElementById('app');
// Render Layout into app
ReactDOM.render(<Layout/>, app);




/*
------------------ NodeJS Notes ---------------------------------

-- Components 
	Node works using components, similar to how <div>'s or <img>'s work in html.
	Each component returns exactly 1 DOM element  



*/
