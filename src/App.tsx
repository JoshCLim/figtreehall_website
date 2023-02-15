import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import { Login } from "./pages/login/login";
import { Home } from "./pages/home/home";
import { News } from "./pages/news/news";
import { Events } from "./pages/events/events";
import { Faqs } from "./pages/faqs/faqs";
import { Feedback } from "./pages/feedback/feedback";

import { Navbar } from "./components/navbar";
import { OWeek } from "./components/oweek";

import { Button } from "@mui/material";
import { ExitToApp } from "@mui/icons-material";

import { auth } from "./config/firebase";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <OWeek />
    </div>
  );

  const [user] = useAuthState(auth);

  return <>{user ? <Main /> : <Login />}</>;
  // return <>{user ? <Main /> : <Main />}</>;
}

function Main() {
  const signUserOut = async () => {
    await signOut(auth);
  };

  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/events" element={<Events />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>

        <footer>
          <h1>fth website</h1>
          <Button
            variant="contained"
            onClick={signUserOut}
            startIcon={<ExitToApp />}
          >
            Exit Site
          </Button>
        </footer>
      </Router>
    </div>
  );
}

export default App;
