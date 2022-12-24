import "./login.css";

import { useState } from "react";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { TextField, Button } from "@mui/material";

const EMAIL_DEFAULT = "figfixations@gmail.com";
const ERROR_CODE_WRONG_PASSWORD = "auth/wrong-password";

function Login() {
  const [inputPassword, setInputPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const auth = getAuth();

  const signIn = () => {
    signInWithEmailAndPassword(auth, EMAIL_DEFAULT, inputPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.table(error);
        setErrorMessage(error.message);
        if (error.code === ERROR_CODE_WRONG_PASSWORD) {
          setErrorMessage("incorrect password, please try again.");
        } else {
          setErrorMessage(
            "server issue. please contact HC if problem persists."
          );
        }
      });
  };

  return (
    <div className="Login">
      <p>enter a password to continue:</p>

      <TextField
        id="outlined-basic"
        label="password"
        variant="outlined"
        onChange={(e) => setInputPassword(e.target.value)}
      />

      <Button variant="contained" onClick={signIn}>
        continue
      </Button>

      <p>{errorMessage}</p>
    </div>
  );
}

export { Login };
