import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios"

export default function RegisterPage  ()  {

const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

async function registerUser (e) {
    e.preventDefault()
  try {
    await  axios.post("/register",  {
        name,
        email,
        password
    })
    alert("Registration successful. Feel free to login")
  } catch (e) {
    alert("Registration failed please try again")
  }
}


  return (
    <div className='login'>
    


  <Card style={{ width: '18rem' }} className="CardBody">
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
        <Form onSubmit={registerUser} >
    <Form.Group className="mb-3"  >
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" 
      placeholder="Enter name" 
      value={name}
      onChange={e=>setName(e.target.value)}
      />
     
    </Form.Group>
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
     Register
    </Button>
    Already have an account? 
    <Link  to={"/login"}>Login</Link>
   
  </Form>
        </Card.Text>
        
      </Card.Body>
    </Card>


    </div>
  )
}

