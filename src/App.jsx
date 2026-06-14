import { useState } from "react";

import Login from "./Components/Login/Login.jsx";
import Background from "./Components/Background.jsx";

function App() {
  return (
      <Background>
        <Login />
      </Background>
  );
}

export default App;
