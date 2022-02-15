import React from "react";
 
function Card(props){
return(
    <>
   
        <div className="container">
        <img  className="imagetag" src={props.imgsrc} />

        <p className="paratag">{props.sname}</p>
        <p className="paratag2"> {props.rating}</p>

        </div>
    </>
  )

};
export default Card;