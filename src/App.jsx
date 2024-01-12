import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import AppLayout from "./Components/AppLayout/AppLayout";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element = {<AppLayout />} path="/">
        
    </Route>
  )
);


function App() {
  return (
    <div className="app-container">
       <RouterProvider router={routes} />
    </div>
  );
}

export default App;
