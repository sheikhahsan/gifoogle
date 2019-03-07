import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import rootReducer from "./_store/reducers";
import {
  getRandomGif,
  getTrendingGifs,
  getGifsByQuery
} from "./_store/actions";

const middleware = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleware));
store.dispatch(getRandomGif());
store.dispatch(getTrendingGifs());
store.dispatch(getGifsByQuery("cat"));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
