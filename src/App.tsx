import React from "react";
import "./App.css";

import { Login } from "./pages/login/login";

import { auth } from "./config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);

  return <>{user ? <div className="App"> fth website</div> : <Login />}</>;
}

export default App;
