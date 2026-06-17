import { Routes, Route } from "react-router-dom";

import Login from "./Components/Login/Login.jsx";
import Background from "./Components/Background.jsx";
import UserDashboard from "./Components/User/UserDashboard.jsx";

function App() {
  return (
      <Background>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/dashboard" element={<UserDashboard />}></Route>
        </Routes>
      </Background>
  );
}

export default App;
