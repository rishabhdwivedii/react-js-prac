import axios from "axios";
import { useState } from "react";

const Upload = () => {
  const [file, setFile] = useState();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append("video", file);
    try {
      await axios.post("http://localhost:3000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("File uploaded successfully");
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  return (
    <div className="bg-gray-400">
      <div>Upload option for now!</div>
      <div>
        <input type="file" onChange={handleFileChange}></input>
        <button className="bg-white " onClick={uploadFile}>
          Upload
        </button>
      </div>
    </div>
  );
};

export default Upload;
