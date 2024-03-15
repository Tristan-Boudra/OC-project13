import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Profile from "../pages/user";
import Layout from "../components/layout";
import Error from "../pages/error";
import "../styles/index.css";
import Transactions from "../pages/transactions";

/**
 * Root component of the application.
 * This component manages the routing of the different pages of the application.
 * @returns {JSX.Element} The root element of the application.
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
