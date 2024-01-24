import "../../styles/index.css";
import iconNavLogo from "../../assets/image/argentBankLogo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isUserPage = location.pathname === "/user";

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
        <Link className="main-nav-item" to="/login">
          <i className="fas fa-user-circle"></i>
          Sign In
        </Link>
        {isUserPage && (
          <Link className="main-nav-item" to="/">
            <i className="fas fa-sign-out-alt"></i>
            Sign Out
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
