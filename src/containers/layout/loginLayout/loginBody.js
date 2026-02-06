import React, { useState, useEffect, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import {useDispatch, useSelector} from 'react-redux';
import {getNewMemberList} from '../../../redux/actions/members';
import { useNavigate } from 'react-router-dom';

const LoginBodyComponent = () =>{
    const [mobile, setMobile] = useState("");
    const [pwd, setPwd] = useState("");
    const dispatch = useDispatch();
    const memberState = useSelector((state) => state.members);
      const navigate = useNavigate();


    useEffect(()=>{
      dispatch(getNewMemberList())
      
    },[])
    console.log("memberState =", memberState);
    const submit = () => {

    }

    const gotoRegistration = () =>{
        navigate("/registration")
    }
    return(
        <div>
            <div className="login-container">
      <Form>
        <Row className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Login</Card.Title>
              <Card.Text>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Mobile Number"
                    value={mobile}
                    onChange={(e) => {
                      setMobile(e.target.value);
                    }}
                   
                  />
                </Form.Group>
               
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={pwd}
                      onChange={(e) => {
                        setPwd(e.target.value);
                      }}
                    />
                  </Form.Group>
                
              </Card.Text>
              <Card.Link>
                <Button
                  variant="primary"
                  onClick={() => {
                    submit();
                  }}
                >
                  Submit
                </Button>
                <br></br>
               
                <div>
                  <Button variant='success'
                    onClick={()=>{gotoRegistration()}}
                  >
                    Registration
                  </Button>
                </div>
              </Card.Link>
            </Card.Body>
          </Card>
        </Row>
      </Form>

      {/* <Alert variant={"warning"}>
      <a href="https://nms-admin-final.web.app/" target="_blank">Player Chest Number click here</a>

          <div> Entry closed . Please contact our Head Coach</div>
          <div>Selva : 9965560087</div>
          
    
   </Alert> */}
    </div>
        </div>
    )
}

export default LoginBodyComponent;