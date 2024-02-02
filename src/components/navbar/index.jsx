import "../../styles/index.css";
import iconNavLogo from "../../assets/image/argentBankLogo.png";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetLoginInfo } from "../../slices/signInSlice";
import { resetProfileInfo } from "../../slices/profileSlice";

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const isUserPage = location.pathname === "/profile";
  const firstName = useSelector((state) => state.profile.firstName);

  const handleClick = () => {
    dispatch(resetLoginInfo());
    dispatch(resetProfileInfo());
    localStorage.removeItem("token");
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
        {isUserPage ? (
          <div>
            <Link className="main-nav-item" to="/login">
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
