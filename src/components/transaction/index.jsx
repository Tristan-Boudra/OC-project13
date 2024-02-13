import { Link } from "react-router-dom";
import "../../styles/index.css";

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
