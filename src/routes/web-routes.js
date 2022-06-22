import AboutUs from "../components/pages/Aboutus";
import ContactUs from "../components/pages/Contactus";
import Home from "../components/pages/Home";
import PageNotFound from "../components/pages/Notfound";
import Services from "../components/pages/Services";
import ImageGallary from "../components/pages/FileUpload";

export const webRoutes = [
  { path: "/aboutus", element: <AboutUs /> },
  { path: "/contactus", element: <ContactUs /> },
  { path: "/", element: <Home /> },
  { path: "/services", element: <Services /> },
  { path: "/gallery", element: <ImageGallary /> },
  { path: "*", element: <PageNotFound /> },
];
