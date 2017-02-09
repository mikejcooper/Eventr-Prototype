// import React from "react";
// import ReactDOM from "react-dom";
// import { Router, Route, IndexRoute, hashHistory } from "react-router";

// import Favorites from "./pages/Favorites";
// import Todos from "./pages/Todos";
// import Layout from "./pages/Layout";
// import Settings from "./pages/Settings";

// const app = document.getElementById('app');

// ReactDOM.render(
//   <Router history={hashHistory}>
//     <Route path="/" component={Layout}>
//       <IndexRoute component={Todos}></IndexRoute>
//       <Route path="favorites" component={Favorites}></Route>
//       <Route path="settings" component={Settings}></Route>
//     </Route>
//   </Router>,
// app);

import { applyMiddleware, createStore } from "redux";

const reducer = (initialState=0, action) => {
  if (action.type === "INC") {
    return initialState + 1;
  } else if (action.type === "DEC") {
    return initialState - 1;
  } else if (action.type === "MULT") {
    throw new Error("AHHHH!!");
  }
  return initialState;
}

const logger = (store) => (next) => (action) => {
  console.log("Logged", action);
  return next(action);
};


const errorHandler = (store) => (next) => (action) => {
  try {
    return next(action);
  } catch(e) {
    console.log("ERROR!", e);
  }
};

const middleware = applyMiddleware(
  logger,
  errorHandler
)
const store = createStore(reducer, middleware)

store.subscribe(() => {
  console.log("store changed", store.getState());
})

store.dispatch({type: "INC"})
store.dispatch({type: "INC"})
store.dispatch({type: "INC"})
store.dispatch({type: "DEC"})
store.dispatch({type: "DEC"})
store.dispatch({type: "DEC"})
store.dispatch({type: "MULT"})
store.dispatch({type: "DEC"})
