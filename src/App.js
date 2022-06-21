import "./sources/css/animated.css";
// import './sources/css/wow.css';
import "./sources/css/style.css";
// import "./sources/css/font-awesome.min.css";
import {
  BrowserRouter,
  Routes,
  Route,
  //  Link, NavLink,  Navigate, useParams, Outlet
} from "react-router-dom";
import { useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { webRoutes } from "./routes/web-routes";
  

function App() {


  const MyLinkPages = webRoutes.map((route, index) => (
    <Route exact path={route.path} element={route.element} key={index} />
  ));

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>{MyLinkPages}</Routes>
        <Footer />
      </BrowserRouter>

     
    </>
  );
}

export default App;
