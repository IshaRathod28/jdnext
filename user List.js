import React from 'react'
import axios from 'axios'
import styles from '../../styles/f.module.css'
import Add from './Add';
import Edit from './Edit';
// import 'bootstrap/dist/css/bootstrap.css'
import ReactPaginate from "react-paginate";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { CSVLink } from "react-csv";
export default function List() {

    const router = useRouter();
    const [Searchdata, setSearchdata] = useState("");
    const [Gender, setGender] = useState("");
    const [Hobbies, setHobbies] = useState("");
    const [Status, setStatus] = useState("");
    const [filters, setfilters] = useState(false);

    const [Listitems, setListitems] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 4;
    const pagesVisited = pageNumber * usersPerPage;
    const pageCount = Math.ceil(Listitems.length / usersPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const headers = [
        { label: "Code", key: "code" },
        { label: "Firstname", key: "firstname" },
        { label: "Lastname", key: "lastname" },
        { label: "Email", key: "email" },
        { label: "Gender", key: "gender" },
        { label: "Hobbies", key: "hobbies" },
        { label: "Status", key: "status" },
        { label: "Dateadded", key: "dateadded" },
        { label: "Dateupdated", key: "dateupdated" }
    
    ];

    const handleaddclick = () => {
        router.push('/user/Add')

    }
    const getlist = async () => {

        await axios.get("/api/getuserdata")
            .then((res) => {
                console.log(res.data);
                setListitems(res.data)
            })
    }

    useEffect(() => {
        getlist();

    }, []);

    const editUser = async (id) => {
        console.log(id);

        localStorage.setItem("editid", id);
        router.push('/user/Edit')


    };
    const deleteUser = async (id) => {
if(window.confirm('Are you sure you wish to delete this user') == true){

   
  let r =  await axios.get("/api/deleteuser", { params: { id } });
  getlist();
}
else{
    getlist();
}
       
        
    }
    const viewUser = async (id) => {
        console.log(id, "viewsa ");
        localStorage.clear();
        localStorage.setItem("viewid", id);
        router.push('/user/View');
    };

    const sortbynameA = async () => {
        try {
            await axios.get("/api/sortname")
                .then((res) => { setListitems(res.data) })


        } catch (err) { console.log(err) }
    };
    const sortbynameD = async () => {
        try {
            await axios.post("/api/sortname")
                .then((res) => { setListitems(res.data) }) 
             } catch (err) { console.log(err) }
    };

    const sortbydateA = async () => {
        try {
            await axios.get("/api/sortdate")
                .then((res) => { setListitems(res.data) })


        } catch (err) { console.log(err) }
    };
    const sortbydateD = async () => {
        try {
            await axios.post("/api/sortdate")
                .then((res) => { setListitems(res.data) }) 
             } catch (err) { console.log(err) }
    };
    const handleImport = async()=>{
        router.push('/user/Importdata');
    }
    const Filterdata = async (e) => {
        e.preventDefault();
        try{
         const a =    await axios.get("/api/filterdata",
            { params : {  Searchdata, Gender, Hobbies, Status}    });
            console.log(a.data);
            setListitems(a.data);


        } catch(err){
            console.log(err)
        };
    };
    const Filterreset = async()=>{
         setSearchdata('');
         setGender('');
         setHobbies('');
        setStatus('');
        setfilters(false)
        getlist();

    };
    const Handlestatuschange = async (id, sts) => {
       

        console.log(id);
        console.log(sts);

      var r=  await axios.get("/api/statuschange", { params: { id, sts } }) ;
      getlist();
   
    

    };


    ;
    return (
        <div>
            <div><h2>records </h2>

                {/* add user and export  */}


                <button 
                style={{ "marginTop": "0rem", "marginLeft": "0rem" }}>
                { Listitems?.length && (
                    <CSVLink headers={headers} data={Listitems} target="_blank"> Export   </CSVLink>) }
            </button> &nbsp; &nbsp;
                <button type="button"  onClick={handleaddclick} >add user </button>&nbsp; &nbsp;
             

                <button  onClick={handleImport}
                style={{ "marginTop": "0rem", "marginLeft": "0rem" }}>
import 
            </button> &nbsp; &nbsp;

{
                filters ?
                    <div>
                        <label htmlFor='search' >search</label>
                        < input type="text" id="search" value={Searchdata} onChange={(e) => setSearchdata(e.target.value)} /><br />
                        <input type="radio" name="gender" id="male" value={Gender} onChange={(e) => setGender(e.target.checked == true ? "M" : null)} />
                        <label for="male">male</label>
                        <input type="radio" name="gender" id="female" value={Gender} onChange={(e) => setGender(e.target.checked == true ? "F" : null)} />
                        <label for="female">female</label><br />
                        <label htmlFor='hobby'>hobbies</label>
                        <select id='hobby' onChange={(e) => setHobbies(e.target.value)} >

                            <option >select</option>
                            <option htmlFor="Reading" >Reading</option>
                            <option htmlFor="Travelling">Travelling</option>
                            <option htmlFor="Music">Music</option>
                            <option htmlFor="Cricket">Cricket</option>
                            <option htmlFor="Dancing">Dancing</option>
                            <option htmlFor="Singing">Singing</option>
                        </select><br />
                        <label htmlFor='status' >status</label>
                        <select id='status' onChange={(e) => setStatus(e.target.value)} >

                            <option >select</option>
                            <option htmlFor="A" >A</option>
                            <option htmlFor="I">I</option>

                        </select>
                        <button type='button' onClick={Filterdata} >filter</button> &nbsp; &nbsp;
                        <button type='button' onClick={Filterreset} >reset</button> &nbsp; &nbsp;


                    </div>
                    :
                    <button type="button"  onClick={(e) => setfilters(true)} >FILTER </button>
            }

                <table className={'table table-stripped ' + styles.table} style={{border:"3px solid black",marginTop:"20px"}}>
                    <tr>

                        <th style={{border:"3px solid black"}}>code </th>
                        <th style={{border:"3px solid black"}}>
                            <img  className="img-fluid" onClick={sortbynameA} src="/image/up.jpg" alt="image1"
                                style={{ height: "4vw", marginTop: "0.2rem", marginLeft: "0.5rem" }} />
                            name
                            <img style={{ height: "4vw", marginTop: "0.1rem", marginLeft: "0.1rem" }} class="img-fluid"
                                src="/image/down.jpg" alt="image1" onClick={sortbynameD} />
                        </th>
                        <th style={{border:"3px solid black"}}>email</th>
                        <th style={{border:"3px solid black"}}>image</th>
                        <th style={{border:"3px solid black"}}>gender</th>
                        <th style={{border:"3px solid black"}}>hobbies</th>
                        <th style={{border:"3px solid black"}}>
                            <img onClick={sortbydateA} className="img-fluid" src="/image/up.jpg" alt="image1"
                                style={{ height: "4vw", marginTop: "0.2rem", marginLeft: "0.5rem" }} />
                            date
                            <img onClick={sortbydateD} style={{ height: "4vw", marginTop: "0.1rem", marginLeft: "0.1rem" }} class="img-fluid"
                                src="/image/down.jpg" alt="image1" />
                        </th>
                        <th style={{border:"3px solid black"}}>status</th>
                        <th  >action</th>

                    </tr>

                    {
                        Listitems.slice(pagesVisited, pagesVisited + usersPerPage).map((ob) => (
                            <tr key={ob.code} style={{border:"3px solid black"}}>
                                <td style={{border:"3px solid black"}}>{ob.code}</td>
                                <td style={{border:"3px solid black"}}>{ob.firstname + " " + ob.lastname}</td>
                                <td style={{border:"3px solid black"}}>{ob.email}</td>
                                <td style={{border:"3px solid black"}}><img src={`/image/${ob.photo}`} style={{ height: "50px", width: "50px", borderRadius: "100px" }} /></td>

                                <td style={{border:"3px solid black"}}>{ob.gender}</td>


                                <td style={{border:"3px solid black"}}>{ob.hobbies}</td>
                                <td style={{border:"3px solid black"}}>{ob.dateadded.slice(0, 10)}</td>
                                <td style={{border:"3px solid black"}}>
                                    <span onClick={(e) => Handlestatuschange(ob.code, ob.status)}>{ob.status}</span>
                                </td>
                                <td colSpan={3}>    <button  type="button" onClick={(e) => editUser(ob.recid)}>Edit</button> </td>
                                <td colSpan={3}>  <button  type="button" onClick={(e) => deleteUser(ob.recid)}>Delete</button></td>
                                <td colSpan={3}><button  type="button" onClick={(e) => viewUser(ob.recid)}>View</button></td>
                            </tr>
                        ))

                    }



                </table>
                <div className="pagination d-flex justify-content-center"  >
                    <ReactPaginate breakLabel="..." nextLabel="next >"
                        onPageChange={changePage}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="< previous" containerClassName={"pagination"}
                        pageLinkClassName={"page-link"}
                        previousLinkClassName={"page-link"}
                        nextLinkClassName={"page-link"}
                        activeClassName={"active"}
                         />
                </div>

            </div>

        </div>
    )
}
