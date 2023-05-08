import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import store from "./store";
import './App.css';
import { Provider } from "react-redux";
import Additem from './Additem';
function App() {
  return (
    <>
    <Provider store={store}>
    <Additem/>
    </Provider>
    </>
  );
}

export default App;
