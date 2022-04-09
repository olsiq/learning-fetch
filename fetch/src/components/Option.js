import React from "react";

import { Buttons } from "./Buttons";
import "../styles/options.css";

export const Option = ({ text, num }) => {
  return (
    <div className="option-wrapper">
      {/* <p>Press btn to fetch from</p> */}
      <Buttons text={text} num={num} />
    </div>
  );
};
