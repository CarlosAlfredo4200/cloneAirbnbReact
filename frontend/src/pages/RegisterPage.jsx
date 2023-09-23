import { useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../components/Alert";

import axios from "axios";
console.log(import.meta.env.VITE_BACKENDURL);
const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [alert, setAlert] = useState({});
  
  const registerUser = async (e) => {
    e.preventDefault();
     
    

    if ([name, email, password, repeatPassword].includes("")) {
      setAlert({
        msg: "Todos los campos son obligatorios!",
        error: true,
      });
      return;
    }

    if (password !== repeatPassword) {
      setAlert({
        msg: "Los password deben ser iguales!",
        error: true,
      });
      return;
    }

    if (password.length < 6) {
      setAlert({
        msg: "Los password deben ser de minimo 6 caracteres",
        error: true,
      });
      return;
    }

    setAlert({});

    try {
      const { data } = await axios.post(`${import.meta.env.VITE_BACKENDURL}/api/users`, {
        name,
        email,
        password,
      });

      setAlert({
        msg: data.msg,
        error: false,
      });

      setName('');
      setEmail('');
      setPassword('');
      setRepeatPassword('');
      
    } catch (error) {
      setAlert({
        msg: error.response.data.msg,
        error: true,
      });
    }

    // alert("Registration successful!");
  };

  const { msg } = alert;
  return (
    <div className="container-login">
      <form onSubmit={registerUser} className="login-form">
        <h1>Register</h1>

        {msg && <Alert alert={alert} />}
        <input
          className="login-inputs"
          type="text"
          name="name"
          id="name"
          placeholder="Jhon Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="login-inputs"
          type="email"
          name="email"
          id="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="login-inputs"
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          className="login-inputs"
          type="password"
          name="password"
          id="repeatPassword"
          placeholder="repeat password"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
        />
        <input className="login-btn" type="submit" value="Register" />
        <div className="login-register">
          <p>Dont have account yet?</p>
          <Link to={"/login"}>Login</Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
