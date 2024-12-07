import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home";
import AppLayout from "./components/layout/AppLayout";
import About from "./components/pages/About";
import ErrorPage from "./components/layout/ErrorPage";
import Services from "./components/pages/Services";
import Contact, { contactData } from "./components/pages/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/services", element: <Services /> },
        { path: "/contact", element: <Contact />, action: contactData },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
