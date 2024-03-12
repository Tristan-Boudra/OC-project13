import "../../styles/index.css";
import iconNavLogo from "../../assets/image/argentBankLogo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetLoginInfo } from "../../slices/signInSlice";
import { resetProfileInfo } from "../../slices/profileSlice";

/**
 * Composant Navbar.
 * Ce composant représente la barre de navigation de l'application.
 * @returns {JSX.Element} L'élément de barre de navigation.
 */
const Navbar = () => {
  const dispatch = useDispatch();
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");
  const isAuthenticated = !!token;
  const firstName = useSelector((state) => state.profile.firstName);

  /**
   * Gère le clic sur le bouton de déconnexion.
   * Réinitialise les informations de connexion et de profil, et supprime le jeton d'authentification du stockage local.
   */
  const handleClick = () => {
    dispatch(resetLoginInfo());
    dispatch(resetProfileInfo());
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={iconNavLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isAuthenticated ? (
          <div className="main-nav-all">
            <Link className="main-nav-item" to="/profile">
              <i className="fas fa-user-circle"></i>
              {firstName}
            </Link>
            <Link className="main-nav-item" to="/" onClick={handleClick}>
              <i className="fas fa-sign-out-alt"></i>
              Sign Out
            </Link>
          </div>
        ) : (
          <Link className="main-nav-item" to="/login">
            <i className="fas fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
