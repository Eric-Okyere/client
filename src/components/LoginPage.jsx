import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Link, Navigate } from 'react-router-dom';
import {useContext, useState } from 'react';
import axios from "axios"
import { UserContext } from '../UserContext';

export default function LoginPage  ()  {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [redirect, setRedirect] = useState(false)
  
const {setUser}=useContext(UserContext);


  async function handleLoginSubmit(e){
    e.preventDefault();
    try {
     const {data} = await axios.post("/login", {email,password}, {withCredentials:true})
    setUser(data);
     alert("Login successful");
    setRedirect(true)
    } catch (error) {
      alert("Login failed")
    }
    
  }


if(redirect){
  return <Navigate to={"/"} />
}

  return (
    <div className='login'>
    


  <Card style={{ width: '18rem' }} className="CardBody">
      <Card.Body>
        <Card.Title>Feel free to login</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
        <Form onSubmit={handleLoginSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" 
      value={email}
      onChange={e=>setEmail(e.target.value)}
      />
     
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" 
      value={password}
      onChange={e=>setPassword(e.target.value)}
      />
    </Form.Group>
    
    <Button className='loginbut' variant="primary" type="submit">
     Login
    </Button>
   Don't have an account yet? 
    <Link  to={"/register"}>Register</Link>
   
  </Form>
        </Card.Text>
        
      </Card.Body>
    </Card>


    </div>
  )
}

