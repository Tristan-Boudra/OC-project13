import { Link } from "react-router-dom";
import "../../styles/index.css";

/**
 * Composant Transaction.
 * Ce composant représente une transaction dans l'application.
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.title - Le titre de la transaction.
 * @param {number} props.amount - Le montant de la transaction.
 * @param {string} props.description - La description de la transaction.
 * @returns {JSX.Element} L'élément de transaction.
 */
const Transaction = (props) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{props.title}</h3>
        <p className="account-amount">${props.amount}</p>
        <p className="account-amount-description">{props.description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <Link to="/transactions" className="transaction-button">
          View transactions
        </Link>
      </div>
    </section>
  );
};

export default Transaction;
