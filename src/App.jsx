import {  Route, Routes } from "react-router-dom";

import UserDashboard from "./Components/User/UserDashboard.jsx";
import RouteProtected from "./Components/RouteNav/RouteProtected.jsx";
import Login from "./Components/Login/Login.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>

      <Route
      path="/dashboard"
      element={
          <RouteProtected allowedRoles={["editor"]}>
            <UserDashboard/>
          </RouteProtected>
      }/>
      
      <Route
      path="/viewer"
      element={
          <RouteProtected>
          </RouteProtected>
      }/>
      
      <Route
      path="/admin"
      element={
          <RouteProtected>
          </RouteProtected>
      }/>
    </Routes>
  );
}

export default App;
