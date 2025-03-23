import "./App.css"
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import DashbordPage from "./pages/dashbordPage/DashbordPage";
import LoginPage from "./pages/loginPage/LoginPage"
import RegisterPage from "./pages/registerPage/RegisterPage"



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
