import "./sources/css/animated.css";
// import './sources/css/wow.css';
import "./sources/css/style.css";
import {
  BrowserRouter,
  Routes,
  Route,
  //  Link, NavLink,  Navigate, useParams, Outlet
} from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { webRoutes } from "./routes/web-routes";

function App() {
  const MyLinkPages = webRoutes.map((route, index) => (
    <Route path={route.path} element={route.element} key={index} />
  ));

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>{MyLinkPages}</Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
