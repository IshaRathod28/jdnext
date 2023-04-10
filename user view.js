import React, { useEffect } from 'react'
// import 'bootstrap/dist/css/bootstrap.css'
import { useState } from "react";
import axios from 'axios';

export default function View() {


    const EditID = localStorage.getItem("viewid");
    const [Code, setCode] = useState('');
    const [Firstname, setFirstname] = useState('');
    const [Lastname, setLastname] = useState('');
    const [Email, setEmail] = useState('');
    const [Gender, setGender] = useState('');
    const [Hobbies, setHobbies] = useState([]);
    const [Ans , setAns]= useState([]);
    const [Photo , setPhoto] = useState("");
    const [Country, setCountry] = useState('');
    const setViewdata = async()=>{
       
      
        try {
          const r = await axios.get("/api/edituser", {params :{EditID} })
          console.log(r.data[0])
          setCode(r.data[0].code);
          setFirstname(r.data[0].firstname);
          setLastname(r.data[0].lastname);
          setEmail(r.data[0].email);
          setGender(r.data[0].gender);
          setHobbies(r.data[0].hobbies.split(','));
          setCountry(r.data[0].country);
          setPhoto(r.data[0].photo)
         
      } catch (err) {
          console.log("err in uedit api form");
      }
      };
      useEffect(()=>{
        setViewdata();
      },[])



  return (<>

   
   <center>

 
    <div className='align-center d-inline-block'>
    <img src={`/image/${Photo}`}
                    style={{ height: "50px", width: "50px", borderRadius: "100px" }} />

<label className='fw-bold text-uppercase'> Code</label><span> {Code}</span><br/>
<label className='fw-bold text-uppercase'> firstname</label><span> {Firstname}</span><br/>
<label className='fw-bold text-uppercase'> Lastname</label><span> {Lastname}</span><br/>
<label className='fw-bold text-uppercase'> Email</label><span> {Email}</span><br/>
<label className='fw-bold text-uppercase'> Gender</label><span> {Gender}</span><br/>
<label className='fw-bold text-uppercase'> Hobbies</label><span> {Hobbies}</span><br/>
<label className='fw-bold text-uppercase'> Country</label><span> {Country}</span><br/>

    </div>
    </center>
    </>)
}
