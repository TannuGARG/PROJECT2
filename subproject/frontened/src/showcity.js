import React, { useState } from "react"
import "./show.css"

export default function ShowPage(display){
    console.log("lkjhgfd",display)
    
    
     
    return(
        <table>
         <tr>
            <th>id</th>
            <th>state </th>
            <th>capital</th>
       </tr>
        
    
            {Object.keys(display).map((key, index) =>
               <tr> 
                    <td key={index}>{display[key].id}</td>
                    <td key={index}>{display[key].name}</td>
                    <td key={index}>{display[key].state}</td>


               </tr>
               
            )}
            </table>
    
          );
        }
   

        
        
    
