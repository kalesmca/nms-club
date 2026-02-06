import React, { useState, useEffect } from "react";
import { memberInitState, BLOOD_GROUP_LIST } from "../../config/constants";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import "./register.scss";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {addMember} from '../../redux/actions/members'

import { storage } from "../../firebase-config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const RegistrationComponent = () => {
  const [member, setMember] = useState(memberInitState);
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
   useEffect(()=>{
    console.log("member=", member);
  })
  
  const submit = () => {
    dispatch(addMember(member));
  };


  const handleChange = (e) => {
        console.log("photcha:")

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
      setMember({...member, photoUrl:downloadURL})
      console.log("File available at:", downloadURL);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };
  return (
    <div className="register-container">
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Name"
              value={member.name}
              onChange={(e) => {
                setMember({ ...member, name: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Password: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Optional"
              value={member.pwd}
              onChange={(e) => {
                setMember({ ...member, pwd: e.target.value });
              }}
            />
          </Form.Group>
        </Row>
        {/* <Row className="mb-3">
          
        </Row> */}

        <Row className="mb-3">
          <Form.Group as={Col} controlId="tshirt">
            <Form.Label>Blood Group : </Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={member.bloodgroup}
              onChange={(e) => {
                setMember({ ...member, bloodgroup: e.target.value });
              }}
            >
              {BLOOD_GROUP_LIST.map((size, sIndex) => {
                return (
                  <option key={sIndex} value={size}>
                    {size}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Mobile: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Mobile Number"
              value={member.mobile}
              onChange={(e) => {
                setMember({ ...member, mobile: e.target.value });
              }}
            />
          </Form.Group>
        </Row>

        

        <Button
          variant="primary"
          onClick={() => {
            submit();
          }}
        >
          Submit
        </Button>
      </Form>
      <div>
        <Alert variant={"warning"} className="payment-info">
          <div className="payment-title">Upload your photo</div>
          <div className="payment-amount">
            <input type="file" onChange={handleChange} />
            <button onClick={handleUpload}>Upload</button>
          </div>
          <div className="qr-section">
            <p className="scan-text"></p>
            {member.photoUrl && (
              <div>
                <p>Uploaded Image:</p>
                <img src={member.photoUrl} alt="uploaded" width="200" />
                {/* <p>{url}</p> */}
              </div>
            )}
          </div>
        </Alert>
      </div>
    </div>
  );
};

export default RegistrationComponent;
