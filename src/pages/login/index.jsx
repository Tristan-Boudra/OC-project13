import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  setEmail,
  setPassword,
  setRememberMe,
  setAuthToken,
} from "../../slices/signInSlice";
import { useLoginMutation } from "../../slices/apiSlice";
import { useEffect } from "react";

/**
 * Composant Login.
 * Ce composant représente la page de connexion de l'application.
 * @returns {JSX.Element} L'élément de page de connexion.
 */
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/profile");
    }
  }, [navigate]);

  /**
   * Gère la soumission du formulaire de connexion.
   * @param {Event} e - L'événement de soumission du formulaire.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;
    const rememberMeCheckbox = document.getElementById("remember-me").checked;

    // Stocke les valeurs saisies dans le Redux store
    dispatch(setEmail(usernameInput));
    dispatch(setPassword(passwordInput));
    dispatch(setRememberMe(rememberMeCheckbox));

    // Appelle la mutation de connexion pour authentifier l'utilisateur et obtenir le jeton JWT
    login({ email: usernameInput, password: passwordInput })
      .unwrap()
      .then((data) => {
        // Stocke le jeton JWT dans le Redux store
        const jwtToken = data.body.token;
        dispatch(setAuthToken(jwtToken));

        rememberMeCheckbox
          ? localStorage.setItem("token", jwtToken)
          : sessionStorage.setItem("token", jwtToken);

        // Réinitialise les champs de saisie après avoir stocké les données dans le Redux store
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";

        jwtToken && navigate("/profile");
      })
      .catch((error) => {
        const errorMessage = document.getElementById("error");
        errorMessage.style.display = "block";
        console.error("La connexion a échoué : ", error);
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
            <p id="error">Connection failed !</p>
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
