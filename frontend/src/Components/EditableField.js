import React, { useState } from "react";

function EditableField({ label, value }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(value);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  //   const handleCancelClick = () => {
  //     setIsEditing(false);
  //     setEditedValue(value);
  //   };

  const handleInputChange = (event) => {
    setEditedValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setIsEditing(false);
    }
  };

  if (isEditing) {
    return (
      <div>
        {/* <label>{label}</label> */}
        <input
          type="text"
          value={editedValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    );
  }

  return (
    <div>
      {/* <label>{label}</label>
      <span>{value}</span> */}
      <button className="edit-component-button" onClick={handleEditClick}>
        {value}
      </button>
    </div>
  );
}

export default EditableField;
