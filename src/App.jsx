import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home.jsx";
import Cart from "../src/pages/Cart.jsx";
import Navbar from "../src/components/Navbar.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";

const App = () => {
  return (
    <>
      <div className="App">
        <Provider store={store}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route element={<Home />} path="/"></Route>
              <Route element={<Cart />} path="/cart"></Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </div>
    </>
  );
};

export default App;
