import Footer from "../footer";
import Navbar from "../navbar";

/**
 * Component Layout.
 * This component represents the basic layout of the application, including the navigation bar, main content and footer.
 * @param {Object} props - The properties of the component.
 * @param {JSX.Element} props.children - The child elements to display in the layout.
 * @returns {JSX.Element} The layout element.
 */
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
