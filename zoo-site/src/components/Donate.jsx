import React from "react";
import { useNavigate } from "react-router-dom";

export const Donate = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <div id="donate">
        <h2>SAVE THE ANIMALS</h2>
        <br />
        <br />
        <br />
        <h3>When you make a donation to Zoological Center, you join our efforts to care for animals at the zoo and protect wild animals around  the world. Please enter the amount you wish to donate.</h3>   
        <br />
        <input type="text" placeholder="Enter Amount"></input>
        <button id="donate-button" onClick={() => {navigate("/thanks")}}>Donate</button>
      </div> 
    </div>
  );
}; 