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

import { auth } from "./config/firebase";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);

  return <>{user ? <Main /> : <Login />}</>;
}

function Main() {
  const signUserOut = async () => {
    await signOut(auth);
  };

  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/events" element={<Events />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>

        <h1>fth website</h1>
        <button onClick={signUserOut}>sign out</button>
      </Router>
    </div>
  );
}

export default App;
