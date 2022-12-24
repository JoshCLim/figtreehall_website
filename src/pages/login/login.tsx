import { useState } from "react";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const EMAIL_DEFAULT = "figfixations@gmail.com";

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
      });
  };

  return (
    <div className="Login">
      <p>enter a password to continue:</p>
      <input
        type="text"
        placeholder="password"
        onChange={(e) => setInputPassword(e.target.value)}
      />
      <button onClick={signIn}>continue</button>

      <p>{errorMessage}</p>
    </div>
  );
}

export { Login };
