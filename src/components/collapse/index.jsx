import React, { useState } from "react";

const Collapse = (props) => {
  const data = props.data;

  const [isOpen, setIsOpen] = useState(false);
  const [categoryDropdownVisible, setCategoryDropdownVisible] = useState(false);
  const [notesEditing, setNotesEditing] = useState(false);
  const [notesContent, setNotesContent] = useState("Une note");
  const [selectedCategory, setSelectedCategory] = useState("Food");

  const toggleCollapse = () => setIsOpen(!isOpen);
  const toggleCategoryDropdown = () =>
    setCategoryDropdownVisible(!categoryDropdownVisible);
  const toggleNotesEditing = () => setNotesEditing(!notesEditing);
  const closeDropdowns = (e) => {
    if (!e.target.closest(".category-container")) {
      setCategoryDropdownVisible(false);
    }
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCategoryDropdownVisible(false);
  };

  const handleNotesChange = (e) => {
    setNotesContent(e.target.value);
  };

  const handleNotesBlur = () => {
    setNotesEditing(false);
  };

  return (
    <div className={`collapse ${isOpen ? "open" : ""}`}>
      <div className="collapseHeader" onClick={toggleCollapse}>
        <i
          className={`fa-solid fa-chevron-up chevron ${
            isOpen ? "rotate-0" : "rotate-180"
          }`}
        ></i>
        <div className="collapseRaw">
          <p className="collapseTitle">June 20th, 2020</p>
          <p className="collapseTitle">Golden Sun Bakery</p>
          <p className="collapseTitle">{data.amount}</p>
          <p className="collapseTitle">{data.balance}</p>
        </div>
      </div>
      {isOpen && (
        <div className="collapseContent">
          <p>Transaction Type: Electronic</p>

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
