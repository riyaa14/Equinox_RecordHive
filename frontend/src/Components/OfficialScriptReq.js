import React, { useState } from "react";

function GeneratePDF() {
  const [inputValue, setInputValue] = useState("");
  const [filePreview, setFilePreview] = useState(null);

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Send a request to the backend to submit the form data
    // and receive the response
    // setFilePreview with the response data
  }

  return (
    <div className="file-containeroff">
      <div className="file-uploadoff">
        <label htmlFor="textbox1">
          <h6 style={{ fontSize: "16px" }}>
            Submit Official Transcript generation request:
          </h6>
        </label>
        <input
          className="req-transcript-student"
          type="text"
          id="textbox1"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          id="submit-btn"
          onClick={handleSubmit}
          type="submit"
          className="submit"
          value="Submit"
        >
          Submit
        </button>

        <div className="pdf-preview">
          {filePreview && (
            <embed
              src={filePreview}
              type="application/pdf"
              width="100%"
              height="600px"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default GeneratePDF;
