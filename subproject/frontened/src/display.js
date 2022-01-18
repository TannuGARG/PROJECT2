import React, { useState } from "react"
import "./display.css"
import axios from "axios"
import ShowPage from "./showcity"
//import { useNavigate} from "react-router-dom"
export default function DisplayPage(){
    const [display,setDisplay]=useState([])
    const [value,setValue]=useState(0)
   //const navigate=useNavigate();
   const showDisplay=(e)=>{
    axios.get("http://localhost:9003/")
    .then(res=>{
        console.log(res.data);
        setDisplay(res.data);
        setValue(!value);
       
        console.log("dis",display);
        // res.data.map(item=>{
        //     //console.log(item.name,item.state)
        //     res.send(item.name,item.state)
        // })
        })
  
}
     
    return(
        <div className="main">
            <h1>HOME</h1>
            <button onClick={showDisplay} className="btn">DISPLAY</button>
            {value?<ShowPage {...display} />:null}
            
            
            
            
           
            
           
        </div>
    )
}