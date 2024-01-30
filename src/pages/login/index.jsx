import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  setEmail,
  setPassword,
  setRememberMe,
  setAuthToken,
} from "../../slices/signInSlice";
import { useLoginMutation } from "../../slices/apiSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;
    const rememberMeCheckbox = document.getElementById("remember-me").checked;

    // Store the input values in the Redux store
    dispatch(setEmail(usernameInput));
    dispatch(setPassword(passwordInput));
    dispatch(setRememberMe(rememberMeCheckbox));

    // Call the login mutation to authenticate the user and get the JWT token
    login({ email: usernameInput, password: passwordInput })
      .unwrap()
      .then((data) => {
        // Store the JWT token in the Redux store
        const jwtToken = data.body.token;
        dispatch(setAuthToken(jwtToken));

        // Save the token in local storage to persist the user's login session
        localStorage.setItem("token", jwtToken);

        // Reset the input fields after storing data in the Redux store
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";

        jwtToken && navigate("/profile");
      })
      .catch((error) => {
        console.error("Login failed : ", error);
      });
  };

  return (
    <>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fas fa-user-circle"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <Link
              to="/profile"
              className="sign-in-button"
              onClick={handleSubmit}
            >
              Sign In
            </Link>
          </form>
        </section>
      </main>
    </>
  );
};

export default Login;
