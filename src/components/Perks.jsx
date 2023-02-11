import React from 'react'
import Form from 'react-bootstrap/Form';

const Perks = ({selected, onChange}) => {
  
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
  
  
  
  
  
  
  
    return (
    <div>
    <Form.Group className="mb-3" controlId="formBasicPassword">
        {preInput("Perks", "Your pets are import")}
     <div className='grid checkdiv'>
     <label className='border p-2'>
     <input  type="checkbox"/>
     <span>Wifi</span>
     </label>
     <label className='border p-2'>
     <input type="checkbox"/>
     <span>TV</span>
     </label>
     <label className='border p-2'>
     <input type="checkbox"/>
     <span>free parking sport</span>
     </label>
    
     <label className='border p-2'>
     <input type="checkbox"/>
     <span>Radio</span>
     </label>
     <label className='border p-2'>
     <input type="checkbox"/>
     <span>Pets</span>
     </label>
     <label className='border p-2'>
     <input type="checkbox"/>
     <span>Private entrance</span>
     </label>
     </div>
        </Form.Group>
    </div>
  )
}

export default Perks