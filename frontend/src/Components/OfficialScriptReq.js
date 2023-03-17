import React, { useState } from "react";

function GeneratePDF() {
  const [inputValue, setInputValue] = useState("");
  const [filePreview, setFilePreview] = useState(null);
  const [err, setErr] = useState(null);

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Send a request to the backend to submit the form data
    // and receive the response
    // setFilePreview with the response data
    const message = inputValue;
    // SEMESTER ID WHICH IS A REQ PARAMETER IS HARD CODED - value -  6413061cef21d3fc526c93bc
    const response = await fetch(
      "http://localhost:3007/api/transcript/request/official/6413061cef21d3fc526c93bc",
      {
        method: "POST",
        body: JSON.stringify(message),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        },
        credentials: "include",
      }
    );

    const json = response.json();

    if (!response.ok) {
      setErr(json.err);
    }
    if (response.ok) {
      setErr(null);
      setInputValue("");
      alert("YOUR REQUEST HAS BEEN SENT");
    }
  };

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
