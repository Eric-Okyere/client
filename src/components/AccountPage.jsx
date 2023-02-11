import React from 'react'
import { useContext,useState } from 'react'
import { UserContext } from '../UserContext';
import { Link, Navigate, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import axios from "axios"
import PlacesPage from './PlacesPage';






export default function Account  () {
  const {ready, user, setUser}= useContext(UserContext);
const [redirect, setRedirect] = useState(null)

  let {subpage} = useParams();
  if(subpage===undefined){
    subpage= "profile"
  }

  async function logout(){
    await axios.post("/logout")
    setUser(null);
    setRedirect("/")
  }



  function linkClasses (type=null){
    let classes = "py-2 px-6";
    if(type===subpage){
      classes += "background-pink text-black round-full"
    }
    return classes
  }


if(!ready){
  return "Loading........."
}

  if(ready && !user && !redirect){
    return <Navigate to={'/login'} />
  }   


  function linkClasses (type=null){
    let classes = "inline-flex gap-1 py-2 px-6 rounded-full"
    if(type=== subpage){
      classes += "bg-pink text-blue";
    } else{
      classes += "bg-gray-200"
    }
    return classes;
  }


if(redirect){
  return <Navigate to={redirect} />
}

  return (   
    <div className='account'>
    
   <nav className='mynav'>
   <Link className={linkClasses("profile")} id="navlinks" to={"/account"} >My Profile</Link>
   <Link className={linkClasses("bookings")} id="navlinks" to={"/account/bookings"} >My Bookings</Link>
   <Link  className={linkClasses("places")} id="navlinks" to={"/account/places"} >My accommodations</Link>
   </nav> 
  
    { subpage === "profile" &&(
      <div className='userinfo'>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>User Info</Card.Title>

        <Card.Text>
         <p>Username: {user.name}</p>
        <p>Email: {user.email}</p>
        </Card.Text>
       <button onClick={logout} className='logoutbut'>Logout</button>
      </Card.Body>
    </Card>
      </div>
    )
    }

    {subpage=== "places" && (
      <PlacesPage />
    )

    }
    </div>
  );
}

