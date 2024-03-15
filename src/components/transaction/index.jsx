import { Link } from "react-router-dom";
import "../../styles/index.css";

/**
 * Transaction component.
 * This component represents a transaction in the application.
 * @param {Object} props - The properties of the component.
 * @param {string} props.title - The title of the transaction.
 * @param {number} props.amount - The transaction amount.
 * @param {string} props.description - The description of the transaction.
 * @returns {JSX.Element} The transaction element.
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
