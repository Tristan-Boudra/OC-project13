import { useDispatch, useSelector } from "react-redux";
import Collapse from "../../components/collapse";
import { useEffect } from "react";

/**
 * Transactions component.
 * This component represents the user's transactions page.
 * @returns {JSX.Element} The transaction page element.
 */
const Transactions = () => {
  const dispatch = useDispatch();
  const authToken = useSelector((state) => state.signIn.authToken);
  const isLoading = useSelector((state) => state.profile.isLoading);
  useEffect(() => {
    const token = localStorage.getItem("token") || authToken;
    if (!token) {
      setTimeout(() => {
        window.location.href = "/error";
      }, 1000);
    }
  }, [authToken, dispatch]);

  const dataTransaction = [
    {
      id: 0,
      amount: "$5.00",
      balance: "$2082.79",
    },
    {
      id: 1,
      amount: "$10.00",
      balance: "$2087.79",
    },
    {
      id: 2,
      amount: "$20.00",
      balance: "$2097.79",
    },
    {
      id: 3,
      amount: "$30.00",
      balance: "$2117.79",
    },
    {
      id: 4,
      amount: "$40.00",
      balance: "$2147.79",
    },
    {
      id: 5,
      amount: "$50.00",
      balance: "$2181.79",
    },
  ];

  if (isLoading) {
    return <div id="loading">Data is loading ...</div>;
  }

  return (
    <div className="body-transactions">
      <section className="account-transactions">
        <div className="account-content-wrapper-transactions">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
      </section>
      <section className="contentCollapse">
        <div className="collapseHeaderTransaction">
          <i className="fa-solid fa-chevron-up hidden"></i>
          <div className="collapseRaw">
            <p className="collapseTitle">Date</p>
            <p className="collapseTitle">Description</p>
            <p className="collapseTitle">Amount</p>
            <p className="collapseTitle">Balance</p>
          </div>
        </div>
        {dataTransaction.map((transaction) => (
          <Collapse key={transaction.id} data={transaction} />
        ))}
      </section>
    </div>
  );
};

export default Transactions;
