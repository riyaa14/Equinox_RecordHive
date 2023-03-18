import React, { useState } from "react";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";


function GeneratePDF() {

  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Send a request to the backend to submit the form data
    // and receive the response
    // setFilePreview with the response data
    // SEMESTER ID WHICH IS A REQ PARAMETER IS HARD CODED - value -  6413061cef21d3fc526c93bc
    try {
      const res = await fetch(
        "http://localhost:3007/api/transcript/request/official/6413061cef21d3fc526c93bc",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: inputValue }),
          credentials: "include",
          mode: "cors",
        });
         const data = await res.json();
    if (data.success === true) {
      toast.success("Request Sent!");
      navigate('/dashboard');
    }

    } catch (error) {
      toast.error("An unexpected error occurred- Try again later");
      navigate('/dashboard');
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

      </div>
    </div>
  );
}

export default GeneratePDF;
