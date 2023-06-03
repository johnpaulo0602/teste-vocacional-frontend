import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Home } from "./pages/home";

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  }, {
    path: '/home',
    element: <Home />
  }
])