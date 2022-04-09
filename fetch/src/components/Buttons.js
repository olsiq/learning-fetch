import React, { useContext, Fragment } from "react";
import { myCtx } from "../Context";
import "../styles/btn.css";
export const Buttons = ({ text, num }) => {
  const myContext = useContext(myCtx);
  const activate = (num) => {
    myContext.setActive(num);
  };

  return (
    <Fragment>
      <button className="btn" onClick={() => activate(num)}>
        {text}
      </button>
    </Fragment>
  );
};
