import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  NavLink,
} from "react-router-dom";

// layout
import MainLayout from "./layout/MainLayout";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import News from "./pages/News";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/news",
          element: <News />,
        },
      ],
    },
  ]);

  return (
    <div className="container">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
