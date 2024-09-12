import React, { useState, useEffect } from "react";
import Home from "./routes/home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* <Preloader load={load} /> */}
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        {/* <Navbar /> */}
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} /> */}
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
