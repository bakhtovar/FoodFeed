import React, { useState,useEffect } from 'react';
import gif from '../Img/FoodFeed.gif';
import Header from '../Components/Header';
import {
    Form,
    Button,
  } from "react-bootstrap";
  import { useHistory, Link } from "react-router-dom";
  export default function Register(){

  
    const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
    const [errMsg, setErrMsg] = useState("none");
 
  function onUserNameChange(e)  {
  setForm({
    username: e.target.value,
    email: form.email,
    password: form.password,
  });
}
  function onEmailChange(e) {
  setForm({
    username: form.unsername,
    email: e.target.value,
    password: form.password,

  });
}
  
  function onPassChange(e) {
  setForm({
    username: form.username,
    email: form.email,
    password: e.target.value,
  
  });
}
  

const history = useHistory();

function onSubForm(e){
  if (
    form.username !== "" &&
    form.email !== "" &&
    form.password !== ""
  ) {
    const usersFromLocalStorage = localStorage.getItem("data");

    if (usersFromLocalStorage) {
      const parsedUsers = JSON.parse(usersFromLocalStorage);
      parsedUsers.push(form);
      localStorage.setItem("data", JSON.stringify(parsedUsers));
    } else {
      localStorage.setItem("data", JSON.stringify([form]));
    }

    history.push({
      pathname: "/login",
      search: "?reg=success"
    });
  } else {
    setErrMsg("block");
  }
  e.preventDefault();
};

useEffect(() => {
  if (localStorage.getItem("auth") === "true")
    history.push({ pathname: "/register" });
}, []);

    return (
        <div>

          <h1 className="regText">Register</h1>
        <Header/>
        <div class="row">
        <div class="col-6">
        <Form
         onSubmit={onSubForm} 
         noValidate 
         className="FormReg">
        <Form.Label>Username</Form.Label>
        <Form.Control 
        value={form.username}
        onChange={onUserNameChange}
        type="text"
        placeholder="Enter username" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control 
    type="email" 
    value={form.email}
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
    value={form.password}
    onChange={onPassChange}
  
    placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button 
  variant="primary" 
  
  type="submit">
    Submit
  </Button>
  <Link className="sub" to="/login">Already have the account? Log in</Link>  
  <div style={{ display: errMsg }}>
                  <i className="errMsg">Come on, Fill out the form</i>
                </div>
</Form>
</div>
<div className="col-6">
<img align="center" src={gif} 
  style={{  

    width:"auto",
    height:"300px"
    
  }}
  alt="gif" />
</div>
</div>




    </div>

    );
}