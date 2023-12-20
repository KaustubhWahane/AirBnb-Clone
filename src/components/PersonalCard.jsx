import React from "react";
export default function PersonalCard(props){
    return(
          <div className="card">
            <img src={props.image} alt="Avatar" className="cardImage" />
              <div className="container">
                <h4><b />{props.name}</h4> 
                <p>{props.work}</p> 
              </div>
          </div>
    )
}