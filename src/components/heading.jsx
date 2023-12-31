import React from "react";
import Photo from '../Images/ReactLogo.png';
import searchLogo from '../Images/searchLogo.jpg';

export default function Heading(){
    return(
    <>
        <div className="date">Date:- 20/12/2023</div>
        <div className="topText">
            <p>Learn about Guest Favourites, the most loved homes on Airbnb</p>
        </div>
            <nav className="logoItems">
                <img src={Photo} className="logo" alt="Error 404"/>
                <h3 style={{color:"red"}}>airbnb</h3>
                <div className="middleNavbar">
                 <ul>
                    <li>Anywhere</li>
                    <hr />
                    <li>Anyweek</li>
                    <hr />
                    <li>AddGuests</li>
                    <li><img src={searchLogo} className="navLogo" alt="Error 409"/></li>
                 </ul>
                </div>
            </nav>
    </>
    )
}
