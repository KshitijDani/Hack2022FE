import React, {useState} from 'react'
import {Icon, Loader} from 'semantic-ui-react'
import axios from 'axios';
import Doctor from './Doctor';
// import fetch from 'node-fetch';

const Home = () => {    
    const [doctors, setDoctors] = useState([]);
    const [searchString, setSearchString ]= useState("");
    const [isSearchInProgress, setIsSearchInProgress] = useState(false);
 
    const doctorContainer = () => doctors.map((doc, index) => <Doctor docId={index}></Doctor>);

    async function onSearch(e){
        e.preventDefault();
        setIsSearchInProgress(true);

        let response = await fetch("https://dabe-2404-f801-8028-3-d616-7937-28d-a956.in.ngrok.io/search", {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            // body: {"searchString": "Adssa"},
            // mode: "no-cors",
            // referrerPolicy: "no-referrer"
        })

        let json = await response.json()
        console.log(json);

        // .then((response)=>{
        //     setIsSearchInProgress(false);
        //     response.json().then((data)=>{
        //         console.log("data", data);
        //     })
        //     console.log("res", response);
        // })
        // .catch((err)=>{
        //     setIsSearchInProgress(false);
        //     console.log("err", err);
        // })
    }
    return (
        <>
            <div className="back" id="home">
                <div className='container'>
                    <h2 className='title'>Search Doctor, Make an Appointment</h2>
                    <p className='subtitle'>Discover the best doctors, clinic and hospital the city nearest to you.</p>
                    <form>
                        <Icon size='large' className='fa-search' name="search"></Icon>
                        <input type="text" placeholder='Search here' onChange={(e) => setSearchString(e.target.value)}></input>
                        <button type="submit" onClick={(e) => onSearch(e)}>
                            {isSearchInProgress &&  <Loader size='small' active inline inverted />}
                            {!isSearchInProgress && "Search"}
                        </button>
                    </form>
                </div>
            </div>
            {!isSearchInProgress && doctors.length > 0 && <div style={{marginTop: "20px", marginBottom:"20px", display:"flex", justifyContent: "center"}}><div className="doctorContainer">{doctorContainer()}</div></div>}
        </>
    );
};

export default Home
