import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserProfileMutation } from "../../slices/apiSlice";
import {
  setId,
  setEmail,
  setFirstName,
  setLastName,
} from "../../slices/profileSlice";
import Transaction from "../../components/transaction";
import "../../styles/index.css";

const User = () => {
  const dispatch = useDispatch();
  const [getUserProfile] = useGetUserProfileMutation();
  const firstName = useSelector((state) => state.profile.firstName);
  const lastName = useSelector((state) => state.profile.lastName);

  useEffect(() => {
    getUserProfile()
      .unwrap()
      .then((data) => {
        dispatch(setId(data.body.id));
        dispatch(setEmail(data.body.email));
        dispatch(setFirstName(data.body.firstName));
        dispatch(setLastName(data.body.lastName));
      })
      .catch((error) => {
        console.error("User profile fetch failed: ", error);
      });
  }, [dispatch, getUserProfile]);
  return (
    <>
      <main className="main bg-dark">
        <div className="profile-header">
          <p className="profile-welcome">Welcome back</p>
          <p className="profile-welcome">
            {firstName} {lastName}!
          </p>
          <button className="profile-button">Edit Name</button>
        </div>
        <div className="main-balance">
          <h2 className="sr-only">Accounts</h2>
          <Transaction
            title="Argent Bank Checking (x8349)"
            amount="2,082.79"
            description="Available Balance"
          />
          <Transaction
            title="Argent Bank Savings (x6712)"
            amount="10,928.42"
            description="Available Balance"
          />
          <Transaction
            title="Argent Bank Credit Card (x8349)"
            route
            amount="184.30"
            description="Current Balance"
          />
        </div>
      </main>
    </>
  );
};

export default User;
