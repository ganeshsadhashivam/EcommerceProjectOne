import React from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Carousel from "./Carousel";
import { Outlet } from "react-router";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});
const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header></Header>
      <Carousel></Carousel>

      <Outlet />

      <Footer></Footer>
    </ThemeProvider>
  );
};

export default Layout;
