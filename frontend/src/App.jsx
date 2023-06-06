import { useState } from "react";

import "./App.css";
import { RouterProvider, createBrowserRouter, Route } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Route>
  )
);
import Button from "@mui/material/Button";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import { Provider } from "react-redux";
import { store } from "./store";
function App() {
  return (
    <>
      {/* <Button variant="outlined">hello</Button> */}
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </>
  );
}

export default App;
