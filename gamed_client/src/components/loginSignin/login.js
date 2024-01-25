import React,{useState} from 'react';
import axios from '../../axios';
import './loginstyle.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Signin from './signup'
import ForgotPass from './forgotpass';
import BackButton from '../back';

const LoginPage = () => {
  const logo = require('./logo.png');
  <Router>
  <Routes>
  <Route path="/signin" element={<Signin />} />
  <Route path="/forgotpassword" element={<ForgotPass />} /> 
  </Routes>
  </Router>

  
  
    
//sahi
  const [formData, setFormData] = useState({
    userEmail: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('/login', formData);
  //     console.log(response.data);
  //     // Handle successful login, e.g., redirect to a dashboard
  //   } catch (error) {
  //     console.error('Login failed:', error);
  //     // Handle login failure, e.g., show an error message
  //   }
  // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
// // Send the form data to the server using Axios.
// const response = await axios.post("/api/user", formData);

// // Handle the response from the server.
// if (response.status === 200) {
//   // The form data was successfully submitted.
// } else {
//   // The form data submission failed.
// }
// };

//change this
const handleSubmit = async (e) => {
  e.preventDefault();

  // Send the form data to the server using Axios.
  try {
    const response = await axios.post('/api/login', formData);
    console.log(response.data);
    // res.cookie('username', "user'sname");
    
    // Handle successful login, e.g., redirect to a dashboard
window.location.href='/profile';
  } catch (error) {
    console.error('Login failed:', error);
    // Handle login failure, e.g., show an error message
  }
};

  return (
    <div><BackButton/>
    <div className="alignlogin box1">
      <form className="form login" onSubmit={handleSubmit}>
        <img src={logo} alt="logo" className="centerlogin" />
        <h1 className="centerlogin" style={{ color: '#D4FF59' }}>
          <pre>Log In</pre>
        </h1>

        <div className="form__field">
          <label for="username">
            <svg className="iconlogin">
            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#user" />
            </svg>
            <span className="hiddenlogin">Username</span>
          </label>
        




          <input
            id="username"
            type="text"
            name="username"
            className="form__input"
            placeholder="Username"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form__field">
          <label htmlFor="password">
            <svg className="iconlogin">
              <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#lock"></use>
            </svg>
            <span className="hiddenlogin">Password</span>
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="form__input"
            placeholder="Password"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form__field">
          <input type="submit" value="Log in" />
        </div>
      </form>

      <p className="text--centerlogin">
        Not a member? <Link to="/signin">
        <button>Sign Up</button>
      </Link>{' '}
        {/* Not a member? <a href="signup.html">Sign up now</a>{' '} */}
        <svg className="iconlogin">
          <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="assets/images/iconslogin.svg#arrow-right"></use>
        </svg>
      </p>
      <p className="text--centerlogin">
        {/* <a href="forgot password.html">Forgot Password?</a>{' '} */}
        {/* <Link to="/forgotpassword">
        <button>Forgot Password?</button>
      </Link>{' '} */}
        <svg className="iconlogin">
          <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="assets/images/iconslogin.svg#arrow-right"></use>
        </svg>
      </p>
    </div></div>
  );
};

export default LoginPage;
