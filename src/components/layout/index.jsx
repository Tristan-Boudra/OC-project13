import Footer from "../footer";
import Navbar from "../navbar";

/**
 * Composant Layout.
 * Ce composant représente la mise en page de base de l'application, comprenant la barre de navigation, le contenu principal et le pied de page.
 * @param {Object} props - Les propriétés du composant.
 * @param {JSX.Element} props.children - Les éléments enfants à afficher dans la mise en page.
 * @returns {JSX.Element} L'élément de mise en page.
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
