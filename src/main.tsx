import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import UserDetails from "./pages/UserDetails";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorPage from "./pages/Error";
import Auth from "./pages/Auth";
import { GlobalStyle } from "./components/GlobalStyles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth/",
    element: <Auth />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user-details/",
    element: <UserDetails />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <GlobalStyle />
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </>
);
