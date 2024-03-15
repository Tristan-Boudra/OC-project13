import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  setEmail,
  setPassword,
  setRememberMe,
  setAuthToken,
  setError,
} from "../../slices/signInSlice";
import { useLoginMutation } from "../../slices/apiSlice";
import { useEffect } from "react";

/**
 * Login component.
 * This component represents the application login page.
 * @returns {JSX.Element} The login page element.
 */
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const error = useSelector((state) => state.signIn.error);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/profile");
    }
  }, [navigate]);

  /**
   * Handles login form submission.
   * @param {Event} e - The form submission event.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;
    const rememberMeCheckbox = document.getElementById("remember-me").checked;

    // Stores the values ​​entered in the Redux store
    dispatch(setEmail(usernameInput));
    dispatch(setPassword(passwordInput));
    dispatch(setRememberMe(rememberMeCheckbox));

    // Call the login mutation to authenticate the user and obtain the JWT token
    login({ email: usernameInput, password: passwordInput })
      .unwrap()
      .then((data) => {
        const jwtToken = data.body.token;
        !rememberMeCheckbox
          ? dispatch(setAuthToken(jwtToken))
          : localStorage.setItem("token", jwtToken);

        document.getElementById("username").value = "";
        document.getElementById("password").value = "";

        jwtToken && navigate("/profile");
      })
      .catch((error) => {
        dispatch(setError(true));
        console.error("La connexion a échoué : ", error);
      });
  };
  return (
    <>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <div className="sign-in-form">
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
              {error && <p id="error">Connection failed !</p>}
              <Link
                to="/profile"
                className="sign-in-button"
                onClick={handleSubmit}
              >
                Sign In
              </Link>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
