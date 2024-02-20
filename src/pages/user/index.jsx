import { useEffect, useState } from "react";
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
} from "../../slices/profileSlice";
import Transaction from "../../components/transaction";
import "../../styles/index.css";

/**
 * Composant User.
 * Ce composant représente la page du profil utilisateur.
 * @returns {JSX.Element} L'élément de la page du profil utilisateur.
 */
const User = () => {
  const dispatch = useDispatch();
  const [getUserProfile] = useGetUserProfileMutation();
  const [updateUserProfile] = useUpdateUserProfileMutation();
  const firstName = useSelector((state) => state.profile.firstName);
  const lastName = useSelector((state) => state.profile.lastName);
  const [editMode, setEditMode] = useState(false);

  /**
   * Active le mode édition du nom d'utilisateur.
   */
  const startEdit = () => {
    setEditMode(true);
  };

  /**
   * Annule le mode édition du nom d'utilisateur.
   */
  const cancelEdit = () => {
    setEditMode(false);
  };

  /**
   * Enregistre les modifications apportées au nom d'utilisateur.
   */
  const saveEdit = () => {
    const firstNameInput = document.getElementById("firstNameInput");
    const lastNameInput = document.getElementById("lastNameInput");

    const newFirstName =
      firstNameInput.value.trim() !== "" ? firstNameInput.value : firstName;
    const newLastName =
      lastNameInput.value.trim() !== "" ? lastNameInput.value : lastName;

    const body = {
      firstName: newFirstName,
      lastName: newLastName,
    };

    updateUserProfile(body)
      .unwrap()
      .then((data) => {
        dispatch(setFirstName(data.body.firstName));
        dispatch(setLastName(data.body.lastName));
        setEditMode(false);
      })
      .catch((error) => {
        console.error(
          "La mise à jour du profil utilisateur a échoué : ",
          error
        );
      });
  };

  useEffect(() => {
    getUserProfile()
      .unwrap()
      .then((data) => {
        dispatch(setId(data.body.id));
        dispatch(setEmail(data.body.email));
        dispatch(setFirstName(data.body.firstName));
        dispatch(setLastName(data.body.lastName));
      })
      .catch(() => {
        window.location.href = "/error";
      });
  }, [dispatch, getUserProfile]);

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
              <div className="profile-edit-zone">
                <button className="profile-edit-button save" onClick={saveEdit}>
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
