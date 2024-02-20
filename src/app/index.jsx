import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Profile from "../pages/user";
import Layout from "../components/layout";
import Error from "../pages/error";
import "../styles/index.css";
import Transactions from "../pages/transactions";

/**
 * Composant racine de l'application.
 * Ce composant gère le routage des différentes pages de l'application.
 * @returns {JSX.Element} L'élément racine de l'application.
 */
export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </Router>
  );
}
