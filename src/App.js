import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages and components
import Dashboard from "../src/pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Create from "../src/pages/create/Create";
import Signup from "./pages/signup/Signup";
import ProjectDetails from "./pages/project_details/ProjectDetails";


import "./App.css";
import Navbar from "./components/Navbar";

function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <div className="container">
            <Navbar/>
               <Routes>
                  <Route exact path="/" element={<Dashboard/>}/> 
                  <Route path="/create" element={<Create/>} />
                  <Route path="/project/:id" element={<ProjectDetails/>}/>
                  <Route path="/login" element={<Login/>} />
                  <Route path="/signup" element={<Signup/>} />
               </Routes>
            </div>
         </BrowserRouter>
      </div>
   );
}

export default App;
