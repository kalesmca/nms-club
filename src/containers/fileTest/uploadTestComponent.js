import React, { useState } from "react";
import { storage } from "../../firebase-config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function UploadImage() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!image) return;

    try {
      // Create unique file name
      const imageRef = ref(storage, `images/${Date.now()}-${image.name}`);

      // Upload file
      await uploadBytes(imageRef, image);

      // Get download URL
      const downloadURL = await getDownloadURL(imageRef);
      console.log(downloadURL);

      setUrl(downloadURL);
      console.log("File available at:", downloadURL);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>

      {url && (
        <div>
          <p>Uploaded Image:</p>
          <img src={url} alt="uploaded" width="200" />
          <p>{url}</p>
        </div>
      )}
    </div>
  );
}

export default UploadImage;
