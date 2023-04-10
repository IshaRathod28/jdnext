import { useState } from "react";
import axios from "axios";
function Add(){


    const [Code, setCode] = useState('');
    const [Firstname, setFirstname] = useState('');
    const [Lastname, setLastname] = useState('');
    const [Email, setEmail] = useState('');
    const [Gender, setGender] = useState('');
    const [Hobbies, setHobbies] = useState([]);
    const [image, setImage] = useState("avinash.jpg");
    const[Photo , setPhoto] = useState('');

    const [Country, setCountry] = useState('');

    const hobbiesvalue = [
        {name : 1, value: "Reading" },
        {name : 2, value: "Travelling" },
        {name : 3, value: "Music" },
        {name : 4, value: "Cricket" },
        {name : 5, value: "Dancing" },
        {name : 6, value: "Singing" }
    ]
    const gethobbies = (e) => {
        const { value, checked } = e.target
        if (checked) {
            setHobbies([...Hobbies, value])
        }
        else {
            setHobbies(Hobbies.filter((e) => e !== value))
        }
    };

    // image uploading  
    const uploadToClient = (e) => {
        if (e.target.files && e.target.files[0]) {
            setPhoto(e.target.files[0]);
            setImage(e.target.files[0].name);

        }
    };
    const uploadToServer = async (event) => {
          const formData = new FormData();
        formData.append("file", Photo);
        formData.append("fileName", image);
        try {
            const res = await axios.post("/api/addimage", formData);
            console.log(res);
        } catch (err) {
            console.log("err in uplodaing image add form");
        }
    };

    

    const handleAdd = async () => {
        console.log("hobby", Hobbies, Code, Firstname, Gender , Photo , image)

        try{
            await axios.post("/api/adduser" , 
            {Code , Firstname , Lastname , Email , Gender , Hobbies , Photo , image , Country })
        }catch(err){
            console.log("error in uploading user data ")
        }
    }


    return(<div>
        
        <div className='row justify-content-center align-center d-flex'  >
            <h2>Add user </h2>
            <form   className="col-4 ">

<label htmlFor="Code" className="fw-bold text-uppercase">code</label>
<input className="form-control" type="text" id="Code" value={Code} onChange={(e) => setCode(e.target.value)} required /><br />

<label className="fw-bold text-uppercase"  htmlFor="Firstname">Firstname</label>
<input className="form-control" type="text" id="Firstname" value={Firstname} onChange={(e) => setFirstname(e.target.value)} required /><br />

<label className="fw-bold text-uppercase" htmlFor="Lastname">Lastname</label>
<input className="form-control" type="text" id="Lastname" value={Lastname} onChange={(e) => setLastname(e.target.value)} required /><br />

<label className="fw-bold text-uppercase" htmlFor="Email">Email</label>
<input className="form-control" type="email" id="Email" value={Email} onChange={(e) => setEmail(e.target.value)} required /><br />

<label className="fw-bold text-uppercase" htmlFor="Gender">Gender:   </label>

<input  type="radio" id="male" name="Gender" value={Gender} onChange={(e) => setGender(e.target.checked == true ? "M" : null)} />
<label className=" text-uppercase" htmlFor="male">male</label>

<input  type="radio" id="female" name="Gender" value={Gender} onChange={(e) => setGender(e.target.checked == true ? "F" : null)} />
<label className=" text-uppercase" htmlFor="female">female</label><br />

<label className="fw-bold text-uppercase" htmlFor="hobbies">hobbies</label><br />

{
    hobbiesvalue.map((ob) => (<>
        <input  type="checkbox" id={ob.name} value={ob.value} onChange={gethobbies} />
        <label className="fw-bold text-uppercase "  htmlFor={ob.name} >{ob.value}<br /></label>
    </>))
}







<br />

{/* <label className="fw-bold text-uppercase" htmlFor="Photo">Photo</label>
<input className="form-control" type="file" id="Photo" multiple accept="image/*" onChange={saveFile} required />
<button type="button" onClick={uploadFile}>Upload</button><br /> */}

<br />

                <label className="fw-bold text-uppercase" htmlFor="myImage">image</label>
                <input type="file" name="myImage" onChange={uploadToClient} ></input>
                {/* <button   className="btn btn-outline-success" onClick={} >upload</button> */}

              
 <br />
<label className="fw-bold text-uppercase" htmlFor="Country">Country</label>
<select id='Country' value={Country} onChange={(e) => setCountry(e.target.value)} >

    <option htmlFor="India" >India</option>
    <option htmlFor="usa">USA</option>
    <option htmlFor="Pakistan">Pakistan</option>
    <option htmlFor="Africa">Africa</option>
    <option htmlFor="Europe">Europe</option>
    <option htmlFor="UK">UK</option>
</select>

<br />


<button  type="button" 
onClick={() => { uploadToServer(); handleAdd();}}
 >submit</button>
</form>
        </div>
      

    </div>)
}
export default Add ; 
