import React, { useState } from "react";

/**
 * Composant Collapse.
 * Ce composant affiche une section qui peut être collapsée ou étendue.
 * @param {Object} props - Les propriétés du composant.
 * @param {Object} props.data - Les données à afficher dans la section collapsée.
 * @returns {JSX.Element} L'élément de section collapsée.
 */
const Collapse = (props) => {
  const data = props.data;

  const [isOpen, setIsOpen] = useState(false);
  const [categoryDropdownVisible, setCategoryDropdownVisible] = useState(false);
  const [notesEditing, setNotesEditing] = useState(false);
  const [notesContent, setNotesContent] = useState("Une note");
  const [selectedCategory, setSelectedCategory] = useState("Food");

  /**
   * Bascule l'état de l'ouverture/fermeture de la section collapsée.
   */
  const toggleCollapse = () => setIsOpen(!isOpen);

  /**
   * Bascule l'affichage du menu déroulant de catégorie.
   */
  const toggleCategoryDropdown = () =>
    setCategoryDropdownVisible(!categoryDropdownVisible);

  /**
   * Bascule le mode d'édition des notes.
   */
  const toggleNotesEditing = () => setNotesEditing(!notesEditing);

  /**
   * Ferme tous les menus déroulants.
   * @param {Event} e - L'événement de clic.
   */
  const closeDropdowns = (e) => {
    if (!e.target.closest(".category-container")) {
      setCategoryDropdownVisible(false);
    }
  };

  /**
   * Gère le changement de catégorie.
   * @param {Event} e - L'événement de changement.
   */
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCategoryDropdownVisible(false);
  };

  /**
   * Gère le changement de notes.
   * @param {Event} e - L'événement de changement.
   */
  const handleNotesChange = (e) => {
    setNotesContent(e.target.value);
  };

  /**
   * Gère la perte de focus des notes.
   */
  const handleNotesBlur = () => {
    setNotesEditing(false);
  };

  return (
    <div className={`collapse ${isOpen ? "open" : ""}`}>
      {/* Contenu de l'en-tête */}
      <div className="collapseHeader" onClick={toggleCollapse}>
        {/* Icône de chevron */}
        <i
          className={`fa-solid fa-chevron-up chevron ${
            isOpen ? "rotate-0" : "rotate-180"
          }`}
        ></i>
        {/* Contenu de l'en-tête */}
        <div className="collapseRaw">
          <p className="collapseTitle">June 20th, 2020</p>
          <p className="collapseTitle">Golden Sun Bakery</p>
          <p className="collapseTitle">{data.amount}</p>
          <p className="collapseTitle">{data.balance}</p>
        </div>
      </div>
      {/* Contenu de la section collapsée */}
      {isOpen && (
        <div className="collapseContent">
          <p>Transaction Type: Electronic</p>

          {/* Sélecteur de catégorie */}
          <div className="category-container">
            {categoryDropdownVisible ? (
              <div>
                <label htmlFor="categoryDropdown">Category:</label>
                <select
                  id="categoryDropdown"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  onBlur={closeDropdowns}
                >
                  <option value="Food">Food</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Electronics">Electronics</option>
                </select>
              </div>
            ) : (
              <p className="category-text">
                Category: {selectedCategory}{" "}
                <i
                  className="fa-solid fa-pencil"
                  id="pencilCategory"
                  onClick={toggleCategoryDropdown}
                ></i>
              </p>
            )}
          </div>

          {/* Éditeur de notes */}
          <div className="notes-container">
            {notesEditing ? (
              <div>
                <label htmlFor="notesInput">Notes:</label>
                <textarea
                  id="notesInput"
                  value={notesContent}
                  onChange={handleNotesChange}
                  onBlur={handleNotesBlur}
                ></textarea>
              </div>
            ) : (
              <p>
                Notes: {notesContent}{" "}
                <i
                  className="fa-solid fa-pencil"
                  id="pencilNotes"
                  onClick={toggleNotesEditing}
                ></i>
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Collapse;
