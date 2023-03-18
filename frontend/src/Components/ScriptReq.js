import React, { useState, useEffect } from 'react';
import myImage from '../assets/upload.png';
import toast from 'react-hot-toast';


function GeneratePDF() {
  const [inputValue, setInputValue] = useState('');
  const [filePreview, setFilePreview] = useState(null);

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  async function generatePdf() {
    try {
      const response = await fetch(`http://localhost:3007/api/transcript/unofficial/6413061cef21d3fc526c93bc`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ message: inputValue }),
        credentials: "include",
        mode: "cors",
      });
      const blob = await response.blob();
    const fileURL = URL.createObjectURL(blob);
    setFilePreview(fileURL);
    const a = document.createElement("a");
    a.href = fileURL;
    a.download = "transcript.pdf";
    a.click();

      if (!response.success) {
        throw new Error('Failed to generate PDF');
      }
    } catch (error) {
      toast.error("");
    }
  }

  useEffect(() => {
    return () => {
      if (filePreview) {
        URL.revokeObjectURL(filePreview);
      }
    };
  }, [filePreview]);

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
