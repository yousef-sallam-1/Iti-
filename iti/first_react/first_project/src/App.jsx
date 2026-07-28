

import "./App.css";
import Parent from "./components/parent/parent";
import Chaild from "./components/chaild/chaild";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Parent />,
    children: [
      {
        path: "chaild",
        element: <Chaild />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes}  />;
}

export default App;