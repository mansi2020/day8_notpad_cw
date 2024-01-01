import { useState, useEffect } from "react";
import "./App.css";
import Landingpage from "./Component/Landingpage/Landingpage"; //landing page
import Notpad from "./Component/Notpad/Notpad";

function App() {
  const [userInfo, setUserInfo] = useState([]);

  return (
    <div className="App">
      {localStorage.getItem("notes") == null ? (
        <Landingpage info={[setUserInfo, userInfo]}></Landingpage>
      ) : (
        <Notpad></Notpad>
      )}
    </div>
  );
}

export default App;
