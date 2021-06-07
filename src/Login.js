import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // console.log(result.user);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="http://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo%282019%29.svg.png"
          alt="facebook logo"
        />
        <img
          src="http://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt="facebook"
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
