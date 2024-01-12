import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
const routes = createBrowserRouter(
  createRoutesFromElements(
    
  )
);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;