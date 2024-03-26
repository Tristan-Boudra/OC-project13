import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetUserProfileMutation,
  useUpdateUserProfileMutation,
} from "../../slices/apiSlice";
import {
  setId,
  setEmail,
  setFirstName,
  setLastName,
  setIsLoading,
  setError,
  setEditMode,
} from "../../slices/profileSlice";
import Transaction from "../../components/transaction";
import "../../styles/index.css";

/**
 * User component.
 * This component represents the user profile page.
 * @returns {JSX.Element} The user profile page element.
 */
const User = () => {
  const dispatch = useDispatch();
  const [getUserProfile] = useGetUserProfileMutation();
  const [updateUserProfile] = useUpdateUserProfileMutation();
  const firstName = useSelector((state) => state.profile.firstName);
  const lastName = useSelector((state) => state.profile.lastName);
  const authToken = useSelector((state) => state.signIn.authToken);
  const isLoading = useSelector((state) => state.profile.isLoading);
  const editMode = useSelector((state) => state.profile.editMode);
  const error = useSelector((state) => state.profile.error);
  const localToken = localStorage.getItem("token");
  const token = authToken || localToken;

  useEffect(() => {
    getUserProfile(token)
      .unwrap()
      .then((data) => {
        dispatch(setId(data.body.id));
        dispatch(setEmail(data.body.email));
        dispatch(setFirstName(data.body.firstName));
        dispatch(setLastName(data.body.lastName));
        setTimeout(() => {
          dispatch(setIsLoading(false));
        }, 1000);
      })
      .catch(() => {
        setTimeout(() => {
          window.location.href = "/error";
        }, 1000);
      });
  }, [dispatch, getUserProfile, token]);

  const startEdit = () => {
    dispatch(setEditMode(true));
  };

  const cancelEdit = () => {
    dispatch(setEditMode(false));
  };

  const validateInput = (input) => {
    const regex = /^[a-zA-ZÀ-ÿ-' ]+$/;
    return regex.test(input);
  };

  const saveEdit = () => {
    const firstNameInput = document.getElementById("firstNameInput");
    const lastNameInput = document.getElementById("lastNameInput");

    const newFirstName =
      firstNameInput.value.trim() !== "" ? firstNameInput.value : firstName;
    const newLastName =
      lastNameInput.value.trim() !== "" ? lastNameInput.value : lastName;

    if (!validateInput(newFirstName) || !validateInput(newLastName)) {
      dispatch(setError(true));
      return;
    }

    const body = {
      firstName: newFirstName,
      lastName: newLastName,
    };

    updateUserProfile({ body, token })
      .unwrap()
      .then((data) => {
        dispatch(setFirstName(data.body.firstName));
        dispatch(setLastName(data.body.lastName));
        dispatch(setEditMode(false));
        dispatch(setError(false));
      })
      .catch((error) => {
        dispatch(setError(true));
      });
  };

  if (isLoading) {
    return <div id="loading">Data is loading ...</div>;
  }

  return (
    <>
      <main className="main bg-dark">
        {editMode ? (
          <div className="profile-header">
            <p className="profile-welcome">Welcome back</p>
            <div className="profile-edit">
              <div className="profile-edit-zone">
                <input
                  className="profile-edit-input"
                  type="text"
                  id="firstNameInput"
                  name="firstNameInput"
                  placeholder={firstName}
                />
                <input
                  className="profile-edit-input"
                  type="text"
                  id="lastNameInput"
                  name="lastNameInput"
                  placeholder={lastName}
                />
              </div>
              <div className="profile-edit-zone-button">
                <div>
                  {error && (
                    <p id="error">
                      Some characters in user fields are incorrect
                    </p>
                  )}
                </div>
                <div className="profile-edit-buttons">
                  <button
                    className="profile-edit-button save"
                    onClick={saveEdit}
                  >
                    Save
                  </button>
                  <button
                    className="profile-edit-button cancel"
                    onClick={cancelEdit}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="profile-header">
            <p className="profile-welcome">Welcome back</p>
            <p className="profile-welcome">
              {firstName} {lastName}!
            </p>
            <button className="transaction-button" onClick={startEdit}>
              Edit Name
            </button>
          </div>
        )}
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
