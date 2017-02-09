import { createStore } from "redux";
//	  reduced = (state,action)
const reducer = (initialState=0, action) => {
  if (action.type === "INC") {
    return initialState + action.payload;
  } else if (action.type === "DEC") {
    return initialState - action.payload;
  }
  return initialState;
}

const store = createStore(reducer, 1)

store.subscribe(() => {
  console.log("store changed", store.getState());
})

store.dispatch({type: "INC", payload: 1})
store.dispatch({type: "INC", payload: 2})
store.dispatch({type: "INC", payload: 3})
store.dispatch({type: "INC", payload: 4})
store.dispatch({type: "INC", payload: 5})

