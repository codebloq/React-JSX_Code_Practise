import React from "react";
import ReactDOM from "react-dom";

//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
ReactDOM.render(
  <div>
    <h1>Areas of Practice.</h1>
    <hr />
    <ul>
      <li>International Humanitarian Law</li>
      <li>Public/Private International Law</li>
      <li>Alternative Dispute Resolution</li>
      <li>Intellectual Property Law</li>
      <li>Cyber Laws</li>
      <li>Corporate & Commercial Laws</li>
      <li>Environmental Law</li>
    </ul>
  </div>,
  document.getElementById("root")
);
