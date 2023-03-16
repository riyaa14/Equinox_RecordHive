import React, { useState } from 'react';
import myImage from '../assets/upload.png';


function GeneratePDF() {
  const [inputValue, setInputValue] = useState('');
  const [filePreview, setFilePreview] = useState(null);

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function generatePdf() {
    // Send a request to the backend to generate the PDF
    // and receive the PDF as a blob or base64 encoded string
    // setFilePreview with the generated PDF data
  }

  return (
    <div className="file-container">
      <div className="file-upload">
        <label htmlFor="textbox"><h6>Submit unofficial Transcript generation request:</h6></label>
        <input
          type="text"
          id="textbox"
          value={inputValue}
          onChange={handleInputChange}
        />
        <div className="imge-container">
          <img src={myImage} alt="My Image" />
        </div>
        <label htmlFor="pdf-generate">
          <i className="fa fa-file-pdf-o"></i>Generate PDF:
        </label>
        <button
          id="pdf-generate"
          onClick={generatePdf}
          type="submit"
          className="submit"
          value="Submit"
        >
          Download
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
