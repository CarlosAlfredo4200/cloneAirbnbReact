import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="container-login">
      <form className="login-form">
        <h1>Login</h1>
        <input
          className="login-inputs"
          type="email"
          name="email"
          id="email"
          placeholder="email"
        />
        <input
          className="login-inputs"
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <input className="login-btn" type="button" value="Login" />
        <div className="login-register">
          <p>Dont have account yet?</p>
          <Link to={"/register"}>Register now</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
