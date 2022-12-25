import React from "react";
import "./App.css";

import { Login } from "./pages/login/login";

import { auth } from "./config/firebase";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  };

  return (
    <>
      {user ? (
        <div className="App">
          <h1>fth website</h1>
          <button onClick={signUserOut}>sign out</button>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
