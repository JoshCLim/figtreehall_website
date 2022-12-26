import "./login.css";

import { useEffect, useState } from "react";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { TextField, Alert } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { FastArrowRight } from "iconoir-react";

const EMAIL_DEFAULT = "figfixations@gmail.com";
const ERROR_CODE_WRONG_PASSWORD = "auth/wrong-password";
const ERROR_CODE_TOO_MANY_INCORRECT = "auth/too-many-requests";
const ERROR_CODE_NOT_CONNECTED = "auth/network-request-failed";

function Login() {
  // keep track of user's current password input
  const [inputPassword, setInputPassword] = useState<string>("");
  // error message to show
  const [errorMessage, setErrorMessage] = useState<string>("");
  // whether to show error message or not
  const [showError, setShowError] = useState<boolean>(false);
  // whether to show loading button animation
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const auth = getAuth();

  // when the component renders, and whenever the user types, hide the error message
  useEffect(() => {
    setShowError(false);
  }, [inputPassword]);

  // try to sign in the user using the value of `inputPassword`
  const signIn = () => {
    if (inputPassword === "") {
      setErrorMessage("please enter a password to continue.");
      setShowError(true);
      setIsLoading(false);
      return;
    }

    signInWithEmailAndPassword(auth, EMAIL_DEFAULT, inputPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);

        setIsLoading(false);
      })
      .catch((error) => {
        console.table(error);

        setShowError(true);

        console.log(error.message);
        setErrorMessage(error.message);

        if (error.code === ERROR_CODE_WRONG_PASSWORD) {
          setErrorMessage("incorrect password, please try again.");
        } else if (error.code === ERROR_CODE_TOO_MANY_INCORRECT) {
          setErrorMessage("too many incorrect password attempts.");
        } else if (error.code === ERROR_CODE_NOT_CONNECTED) {
          setErrorMessage("you are not connected to the internet.");
        } else {
          setErrorMessage(
            "server issue. please contact HC if problem persists."
          );
        }

        setIsLoading(false);
      });
  };

  return (
    <div className="Login">
      <p className="LoginPrompt">enter a password to access the site:</p>

      <div className="LoginInputContainer">
        <TextField
          className="LoginInputText"
          color="success"
          error={showError}
          label="password"
          variant="outlined"
          onChange={(e) => setInputPassword(e.target.value)}
        />

        <LoadingButton
          loading={isLoading}
          variant="contained"
          onClick={() => {
            setIsLoading(true);
            signIn();
          }}
          className="LoginInputButton"
          color={showError ? "error" : "success"}
        >
          <FastArrowRight />
        </LoadingButton>
      </div>

      <Alert
        severity="error"
        className="errorMessage"
        sx={{ opacity: showError ? 100 : 0, userSelect: "none" }}
      >
        {errorMessage}
      </Alert>
    </div>
  );
}

export { Login };
