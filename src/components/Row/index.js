import React from "react";
import "./style.css";

function Row(props) {
  return (

    
      <tbody> 
        <tr>
          <td>{props.name}</td>
          <td><span onClick={() => props.filterByOccupation(props.occupation)}>{props.occupation}</span></td>
          <td>{props.location}</td>
          <td><span onClick={() => props.removeFriend(props.id)} className="remove">
                    𝘅
                </span></td>
        </tr>
      </tbody>
      
     
      
  );      
};

export default Row;