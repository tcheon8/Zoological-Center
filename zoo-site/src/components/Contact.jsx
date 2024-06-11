import React from "react";
import { FaPhone } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

export const Contact = () => {
  return (
    <div>
      <div id="contact">
        <h2>CONTACT</h2>
      </div>

    <div class="icons">
      <div id="phone">
        <FaPhone size= {50}/>
        <br />
        <br />
        <h3>XXX-XXX-XXXX</h3>
        <h3>10AM-6PM EST</h3>
      </div>

      <div id="email">
        <CiMail size= {80}/>
        <br />
        <br />
        <h3>zoological@gmail.com</h3>
      </div>
    </div>
   </div>
  );
};
