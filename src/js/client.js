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

-- Environment Setup
	$ brew install npm 
	$ npm install 
	$ npm install -S webpack-dev-server
	$ npm install -g webpack-dev-server
	// dev server 'serves' the src folder only. --inline/hot allows for live reload
	$ webpack-dev-server --content-base src --inline --hot
	
	After install, to run server environemnt: 
	$ npm run dev 
	- Made script in package.json to shorten command: "$ npm run dev" == "$ webpack-dev-server --content-base src --inline --hot"  


-- Components 
	Node works using components, similar to how <div>'s or <img>'s work in html.
	Each component returns exactly 1 DOM element  



*/
