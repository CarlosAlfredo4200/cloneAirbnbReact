import { useState} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
const RegisterPage = () => {

const [name, setName] = useState('');     
const [email, setEmail] = useState('');     
const [password, setPassword] = useState('');    

const registerUser = async (e) => {
  e.preventDefault();
  await axios.post('/register', {
    name,
    email,
    password
  });

  alert('Registration successful!')

}


  return (
    <div className="container-login">
      <form onSubmit={registerUser} className="login-form">
        <h1>Register</h1>
        <input
          className="login-inputs"
          type="text"
          name="name"
          id="name"
          placeholder="Jhon Doe"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          className="login-inputs"
          type="email"
          name="email"
          id="email"
          placeholder="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          className="login-inputs"
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input className="login-btn" type="submit" value="Register" />
        <div className="login-register">
          <p>Dont have account yet?</p>
          <Link to={"/login"}>Login</Link>
        </div>
      </form>
    </div>
  )
}

export default RegisterPage