import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const UploadExcel = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async (event) => {
    event.preventDefault(); // Prevent default form submission

    try {
      const formData = new FormData();
      formData.append('doc', selectedFile);

      const response = await axios.post(
        'http://localhost:3000/api/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      toast.success('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading file:', error.response?.data?.error || error);
      toast.error('Error uploading file: ' + (error.response?.data?.error || error.message));
    }
  };

  return (
    <div>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={handleFileChange} />
        <button type='submit' disabled={!selectedFile}>
          Upload
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UploadExcel;