import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import gif from '../Img/FoodFeed.gif';
import {
    Form,
    Button,
    Alert,
  } from "react-bootstrap";
  import { useHistory } from "react-router-dom";

  import queryString from "query-string";

export default function Login() {
    const [errMsg, SetErrMsg] = useState("none");
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
  
    
    function onEmailChange(e)  {
    setEmail(e.target.value);
    }



    
  
    function onPasswordChange(e)  {
    setPassword(e.target.value);
    }
    const history = useHistory();
    const qparse = queryString.parse(history.location.search);
  
    function onSubmitForm(e)  {
   
      const usersLocalStorage = localStorage.getItem("data");
      if (usersLocalStorage) {
        const parse = JSON.parse(usersLocalStorage);
        const existUser = parse.find(
          (data) => data.email === email && data.password === password
        );
        if (!existUser) {
          localStorage.setItem("auth", "false");
          SetErrMsg("block");
         console.log('Error')
        } else {
          localStorage.setItem("auth", "true");
          localStorage.setItem("authUser", JSON.stringify(existUser));
          history.push({
            pathname: "/profile"
          });
        }
      }
      e.preventDefault();
    };
  
    useEffect(() => {
      if (qparse.auth === "false") {
        SetErrMsg("block");
      }
      if (localStorage.getItem("auth") === "true")
        history.push({ pathname: "/login" });
    }, []);
  

    return(
        <div>
             <Header/>
             <div class="row">
        <div class="col-6">
            <h1 className="logText">Log in</h1>
       <Form className="login" onSubmit={onSubmitForm} noValidate>
       
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control
     type="email" 
     value={email}
     onChange={onEmailChange}
     placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control 
    type="password" 
    value={password}
    onChange={onPasswordChange}
    placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  <div style={{
      paddingTop:'10px', 
      display: errMsg }}>
  <Alert  variant="danger">
   Check email or password again!
  </Alert>
            </div>
</Form>
</div>
<div className="col-6">
<img align="center" src={gif} 
  style={{  
    width:"auto",
    height:"500px",
    paddingTop:"150px"

  }}
  alt="gif" />
</div>
</div>
        </div>
    );
  }

