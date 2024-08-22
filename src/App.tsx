
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider
    router={router}
    fallbackElement={<>loading</>}
  />
  );
}

export default App;
