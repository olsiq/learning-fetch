import React, { useContext } from "react";
import { myCtx } from "../Context";

import { Option } from "./Option";
import "../styles/options.css";

export const Options = ({ text }) => {
  // const [isActive, setActive] = useState(1);
  const myContext = useContext(myCtx);
  // const options = ["Lucifer", "Advices", "Nobel Prizes"];

  const toRender = myContext.options.map((option, index) => {
    const num = index + 1;
    const clName = myContext.isActive === num ? "active" : "notActive";
    return <Option text={option.opt} className={clName} num={num} />;
  });
  // console.log(isActive);
  return (
    <div className="options">
      <p>Press btn to fetch from</p>
      <div className="options-wrapper">{toRender}</div>
    </div>
  );
};
