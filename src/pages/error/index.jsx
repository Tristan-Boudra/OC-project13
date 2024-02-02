import { Link } from "react-router-dom";

/**
 * NotFound component.
 *
 * @param {void}
 * @returns {JSX.Element} - Rendered component.
 */

function Error() {
  return (
    <div>
      <div className="error">
        <h1 className="error-code">404</h1>
        <p className="error-text">Page not found</p>
        <Link className="error-link" to="/">
          Return to home page
        </Link>
      </div>
    </div>
  );
}

export default Error;
