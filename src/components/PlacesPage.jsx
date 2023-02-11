import React,{useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Card from 'react-bootstrap/Card';
import Perks from './Perks';
import axios from 'axios';


const PlacesPage = () => {
let {action} = useParams

const [title, setTitle] = useState("")
const [address, setAddress] = useState("")
const [addedPhoto, setAddedPhoto] = useState([])
const [photoLink, setPhotoLink] = useState("")
const [description, setDescription] = useState("")
const [perks, setPerks] = useState([])
const [extraInfo, setExtraInfo] = useState("")
const [checkIn, setCheckIn] = useState("")
const [checkOut, setCheckOut] = useState("")
const [maxGuest, setMaxGuest] = useState(1)


function inputHeader(text){
  return(
    <h6>{text}</h6>
  )
}

function inputDescription(text){
  return(
    <p>{text}</p>
  )
}

function preInput(header, description){
  return(
   <div>
   {inputHeader(header)}
    {inputDescription(description)}
   </div>
  )
}

async function addPhotoByLink(e){
  e.preventDefault()
  const {data:filename} = await axios.post("/upload-by-link", {link: photoLink})
setAddedPhoto(prev=>{
  return [...prev, filename]
})
setPhotoLink("")
}

 function uploadPhotos(e){
  const files = e.target.files;
  const data = new FormData();
  for (let i = 0; i < files.length; i++) {
    data.append("photos", files[i])
  }
  axios.post("/upload", data, {
    headers: {"Content-Type":"multipart/form-data"}
  }).then(response =>{
    const {data:filenames} = response;
    setAddedPhoto(prev=>{
      return [...prev, ...filenames]
    })
  })
}

  return (
    <div className='places'>
    {action === "undefined" &&(
      <div>
      <Link className='Addnew' to={"/account/places/new"}>Add new place</Link>
      </div>
    )}
    {action!=="undefined"&&(
      <div>
   
    <Card  >
    <Card.Body>
      <Card.Title>Feel free to login</Card.Title>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        {preInput("Title", "Title should be short and catchy")}
        <Form.Control value={title} onChange={e=>setTitle(e.target.value)} type="text" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
       {preInput("Address", "Address to this place")}
        <Form.Control value={address} onChange={e=>setAddress(e.target.value)} type="text" placeholder="address" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        {preInput("Photos", "Add photo links")}
        <div className='photodiv'>
        <Form.Control
        className='addpht'
         value={photoLink} 
         onChange={e=>setPhotoLink(e.target.value)} 
        
         type="text" 
         placeholder="add your image here .jpg" />
        <Button  onClick={addPhotoByLink} className='addbut'  variant="warning" type="submit">
        Add Photos
       </Button>
       </div>
        </Form.Group>
     
        <div className='uploadimg'>
        {setAddedPhoto.length>0 && addedPhoto.map(link=>(
          <div >
        <img className='AddedImg' alt='' src={'http://localhost:4000/uploads/'+link}  />
          </div>
        ))}
      <label className='photo' >
      <input type="file" multiple onChange={uploadPhotos}  />
       Upload 
      </label>
      </div>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        {preInput("Description", "Description to your place")}
      
      <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '80px' }}
      value={description}
      onChange={e=>setDescription(e.target.value)}
    />
      </Form.Group>

      
      <Perks selected={perks} onChange={setPerks}/>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        {preInput("Extra Info", "Do well to bring more description")}
      <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '80px' }}
      value={extraInfo}
      onChange={e=>setExtraInfo(e.target.value)}
    />
      </Form.Group>
      <div className='extrainfo'>
      <div>
      <span>Check In</span>
      <input value={checkIn} onChange={e=>setCheckIn(e.target.value)} className='extradiv' type="text" placeholder='14'/>
      </div>
      <div>
      <span>Check Out</span>
      <input value={checkOut} onChange={e=>setCheckOut(e.target.value)} className='extradiv' type="text" placeholder='11'/>
      </div>
      <div>
      <span>Max Guess</span>
      <input value={maxGuest} onChange={e=>setMaxGuest(e.target.value)} className='extradiv' type="number" placeholder='max guest'/>
      </div>
      </div>
      <Button variant="primary" className='placesbut'>
      Add
    </Button>
    </Form>
      
    </Card.Body>
  </Card>

      </div>
    )}

    </div>
  );
}

export default PlacesPage