import React, { useState } from "react";
import fire from "../firebase";
import firebase from "firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [check, setCheck] = useState(0);

  const config = {
    databaseURL: "https://test-a00f0.firebaseio.com",
    projectId: "test-a00f0",
  };

  const loginFirebase = (email, password) => {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        let d = new Date();
        if (!firebase.apps.length) {
          firebase.initializeApp(config);
        }
        firebase
          .database()
          .ref("user/")
          .push({
            email,
            password,
            date:
              d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear(),
            time: d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds(),
          })
          .then((data) => {
            setError("Login Successfully !!!");
            setEmail("");
            setPassword("");
          })
          .catch((error) => {
            setError("ERROR: " + error.message);
          });
      })
      .catch((error) => {
        if (check > 3) {
          setError("Your account is locked !");
          setEmail("");
          setPassword("");
        } else {
          setError("ERROR: " + error.message);
        }
        setCheck(check + 1);
      });
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "email") {
      setEmail(value);
      setError("");
    } else if (name === "password") {
      setPassword(value);
      setError("");
    }
  };

  return (
    <div className="App">
      <h1>Login with Firebase</h1>
      <div>
        {error !== null && <div>{error}</div>}
        <table>
          <tr>
            <td>
              <label htmlFor="email">Email:</label>
            </td>
            <td>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Your Email"
                id="email"
                onChange={(event) => onChangeHandler(event)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="password">Password:</label>
            </td>
            <td>
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Your Password"
                id="password"
                onChange={(event) => onChangeHandler(event)}
              />
            </td>
          </tr>
        </table>
        <button
          onClick={(event) => {
            loginFirebase(email, password);
          }}
        >
          Sign in
        </button>
      </div>
    </div>
  );
};
export default Login;
