import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

// Import Archives.js from location
import Layout from "./components/Layout"
import store from "./store"
import Featured from "./pages/Featured";
import Archives from "./pages/Archives";
import Settings from "./pages/Settings";
import Playground from "./playground/Playground";


const app = document.getElementById('app')

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
<Provider store={store}>
	<Router history={history}>
      <Route path="/" component={Layout}>
	  	  <IndexRoute component={Featured}></IndexRoute>
	      <Route path="archives(/:article)" name="archives" component={Archives}></Route>
	      <Route path="settings" name="settings" component={Settings}></Route>
	      <Route path="playground" name="playground" component={Playground}></Route>
      </Route>
    </Router>
</Provider>, app);
