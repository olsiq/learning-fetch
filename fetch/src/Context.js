import React, { createContext, useState } from "react";

export const myCtx = createContext();

export const Context = ({ children }) => {
  const [isActive, setActive] = useState(1);
  const options = [
    { opt: "Lucifer", url: "" },
    { opt: "Advices", url: "" },
    { opt: "Nobel Prizes", url: "" },
  ];

  const value = { isActive, setActive, options };
  return <myCtx.Provider value={value}>{children}</myCtx.Provider>;
};
