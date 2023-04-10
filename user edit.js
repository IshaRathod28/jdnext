import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from "react";
import axios from 'axios';
export default function Edit() {





  const [Code, setCode] = useState('');
  const [Firstname, setFirstname] = useState('');
  const [Lastname, setLastname] = useState('');
  const [Email, setEmail] = useState('');
  const [Gender, setGender] = useState('');
  const [Hobbies, setHobbies] = useState([]);

  const [Photo, setPhoto] = useState("");
  const [Country, setCountry] = useState('');






  const setEditdata = async () => {
    const EditID = localStorage.getItem("editid");

    try {
      const r = await axios.get("/api/edituser", { params: { EditID } })
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

  const handleEdit = async () => {
    console.log("first ", Code, Firstname, Lastname, Gender, Email, Hobbies, Country, Photo)

    try {
      let r = await axios.post("/api/edituser", {
        Code, Firstname, Lastname,
        Gender, Email, Hobbies, Country, Photo
      })
      console.log(r);

    } catch (err) { console.log(err) }

  }


  useEffect(() => {
    setEditdata();
  }, []);


  return (<><div>

  </div>

    <div class='row justify-content-center align-center d-flex'  >
      <h2>edit user </h2>

      <div>
        <img src={`/image/${Photo}`}
          style={{ height: "50px", width: "50px", borderRadius: "100px" }} />

      </div>
      <form class="col-4 ">



        <label htmlFor="Code" class="fw-bold text-uppercase">code</label>
        <input class="form-control" type="text" id="Code" value={Code} onChange={(e) => setCode(e.target.value)} readOnly={true} required /><br />

        <label class="fw-bold text-uppercase" htmlFor="Firstname">Firstname</label>
        <input class="form-control" type="text" id="Firstname" value={Firstname} onChange={(e) => setFirstname(e.target.value)} required /><br />

        <label class="fw-bold text-uppercase" htmlFor="Lastname">Lastname</label>
        <input class="form-control" type="text" id="Lastname" value={Lastname} onChange={(e) => setLastname(e.target.value)} required /><br />

        <label class="fw-bold text-uppercase" htmlFor="Email">Email</label>
        <input class="form-control" type="email" id="Email" value={Email} onChange={(e) => setEmail(e.target.value)} required /><br />

        <label class="fw-bold text-uppercase" htmlFor="Gender">Gender:   </label>

        <input type="radio" id="male" name="Gender" value={Gender} checked={Gender == "M" ? true : null} onChange={(e) => setGender(e.target.checked == true ? "M" : null)} />
        <label class=" text-uppercase" htmlFor="male">male</label>

        <input type="radio" id="female" name="Gender" value={Gender} checked={Gender == "F" ? true : null} onChange={(e) => setGender(e.target.checked == true ? "F" : null)} />
        <label class=" text-uppercase" htmlFor="female">female</label><br />

        <label class="fw-bold text-uppercase" htmlFor="hobbies">hobbies</label><br />

        <div class="form-check">
          <label className="fw-bold text-uppercase " htmlFor="Reading" >Reading</label>
          <input type="checkbox" id="Reading" value="Reading"
            onChange={(e) => {
              if (Hobbies.includes("Reading")) {
                setHobbies(Hobbies.filter((item) => { return item != "Reading" }))
              } else {
                setHobbies([...Hobbies, "Reading"])
              }
            }}
            checked={Hobbies.includes("Reading") ? "true" : null} />&nbsp;&nbsp;

          <label className="fw-bold text-uppercase " htmlFor="Travelling" >Travelling</label>
          <input type="checkbox" id="Travelling"
            onChange={(e) => {
              if (Hobbies.includes("Travelling")) {
                setHobbies(Hobbies.filter((item) => { return item != "Travelling" }))
              } else {
                setHobbies([...Hobbies, "Travelling"])
              }
            }}
            checked={Hobbies.includes("Travelling") ? true : null} />&nbsp;&nbsp;

          <label className="fw-bold text-uppercase " htmlFor="Music" >Music</label>
          <input type="checkbox" id="Music"
            onChange={(e) => {
              if (Hobbies.includes("Music")) {
                setHobbies(Hobbies.filter((item) => { return item != "Music" }))
              } else {
                setHobbies([...Hobbies, "Music"])
              }
            }}
            checked={Hobbies.includes("Music") ? true : null} />&nbsp;&nbsp;

          <label className="fw-bold text-uppercase " htmlFor="Cricket" >Cricket</label>
          <input type="checkbox" id="Cricket" value="Cricket"
            onChange={(e) => {
              if (Hobbies.includes("Cricket")) {
                setHobbies(Hobbies.filter((item) => { return item != "Cricket" }))
              } else {
                setHobbies([...Hobbies, "Cricket"])
              }
            }}

            checked={Hobbies.includes("Cricket") ? true : null} />&nbsp;&nbsp;

          <label className="fw-bold text-uppercase " htmlFor="Dancing" >Dancing</label>
          <input type="checkbox" id="Dancing" value="Dancing"
            onChange={(e) => {
              if (Hobbies.includes("Dancing")) {
                setHobbies(Hobbies.filter((item) => { return item != "Dancing" }))
              } else {
                setHobbies([...Hobbies, "Dancing"])
              }
            }}
            checked={Hobbies.includes("Dancing") ? true : null} />&nbsp;&nbsp;

          <label className="fw-bold text-uppercase " htmlFor="Singing" >Singing</label>
          <input type="checkbox" id="Singing" value="Singing"
            onChange={(e) => {
              if (Hobbies.includes("Singing")) {
                setHobbies(Hobbies.filter((item) => { return item != "Singing" }))
              } else {
                setHobbies([...Hobbies, "Singing"])
              }
            }}
            checked={Hobbies.includes("Singing") ? true : null} />&nbsp;&nbsp;



        </div>







        <br />

        {/* <label class="fw-bold text-uppercase" htmlFor="Photo">Photo</label>
<input class="form-control" type="file" id="Photo" multiple accept="image/*" onChange={saveFile} required />
<button type="button" onClick={uploadFile}>Upload</button><br /> */}


        {/* <input type="file" name="myImage" onChange={uploadToClient} />
        <button
          className="btn btn-primary"
          type="submit"
          onClick={uploadToServer}
        >
         upload
        </button> */}

        <label class="fw-bold text-uppercase" htmlFor="Country">Country</label>
        <select id='Country' value={Country} onChange={(e) => setCountry(e.target.value)} >

          <option htmlFor="India" >India</option>
          <option htmlFor="usa">USA</option>
          <option htmlFor="Pakistan">Pakistan</option>
          <option htmlFor="Africa">Africa</option>
          <option htmlFor="Europe">Europe</option>
          <option htmlFor="UK">UK</option>
        </select>

        <br />


        <button type="button" onClick={handleEdit} >submit</button>
      </form>
    </div>


  </>


  )
}
