import React, { use } from 'react'
import { useState } from "react";
import axios from 'axios';
export default function Pic() {
    const [image, setImage] = useState("dharmik.jpg");
    const [Photo, setPhoto] = useState('');
    //  const [fileName, setFileName] = useState("");
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

    return (
        <div>
            <div>

                <h4>Select Image</h4>
                <input type="file" name="myImage" onChange={uploadToClient} />
                <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={uploadToServer}
                >
                    Send to server
                </button>
            </div>
        </div>
    );
}




