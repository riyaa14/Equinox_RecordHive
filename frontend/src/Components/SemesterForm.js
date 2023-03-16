import React from "react";

const SemesterForm = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <form className="create">
          <button className="close-btn" onClick={() => props.setTrigger(false)}>
            close
          </button>
          <h3>ADD A NEW SEMESTER</h3>

          <label>SEMESTER NUMBER:</label>
          <input type="text" />

          <label>START DATE:</label>
          <input type="text" />

          <label>END DATE: </label>
          <input type="text" />

          <label>SEMESTER TYPE(ODD/EVEN): </label>
          <input type="text" />

          <button> ADD SEMESTER </button>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
};

export default SemesterForm;
