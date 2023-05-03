import Router from "../src/Routers/Router"
import "./App.css"
import React, { useState, useEffect } from "react";
import Preloader from "./preloader/preloader";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [slowMo, setSlowMo] = useState(false);


  useEffect(() => {
    setTimeout(() => setIsLoading(false),2000); // Simulate a 3-second loading time
  }, []);

  return isLoading ? (
    <Preloader />
  ) : (
    <div className="App">
      <Router />
    </div>


  );

}

export default App;
