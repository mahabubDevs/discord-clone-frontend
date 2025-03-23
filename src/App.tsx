import "./App.css"
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import DashbordPage from "./pages/DashbordPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route > 
        <Route path="/" element={<DashbordPage />}>  </Route >
        <Route path="/login" element={<LoginPage />}>  </Route >
        <Route path="/register" element={<RegisterPage />}>  </Route >
     </Route >
    
      
  )
);


const App = () => {
  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  )
}

export default App
