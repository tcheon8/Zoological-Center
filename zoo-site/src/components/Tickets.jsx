import React from "react";
import { useNavigate } from "react-router-dom";

export const Tickets = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <div id="visit">
        <h2>VISITING ZOOLOGICAL</h2>
        <br />
        <h3>Zoological is currently open 7 days a week from 10:00 am to 5:00 pm. Walk-up admissions are accepted. However, we encourage all guests to purchase their tickets online to get to the fun faster! No reservation date or time is required. Tickets purchased are good for 365 days from the date of purchase.</h3>
        <br />
        <h3>If you have any questions about the animal experiences we offer or you would like to host a kids birthday party, contact us today! We have a number of event spaces for you to choose from.</h3>
      </div>

      <div class="admission">
        <div id="regular">
          <h1>Regular</h1>
          <h2>(Age 13-64)</h2>
          <br />
          <h2>$25.95</h2>
          <br />
          <button class="button" onClick={() => {navigate("/purchase")}}>Buy Ticket</button>
        </div>

        <div id="children">
          <h1>Children</h1>
          <h2>(Age 2-12)</h2>
          <br />
          <h3>$19.95</h3>
          <br />
          <button class="button" onClick={() => {navigate("/purchase")}}>Buy Ticket</button>
        </div>
      </div>
   </div>
  );
};