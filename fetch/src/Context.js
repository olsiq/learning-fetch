import React, { createContext, useState } from "react";

export const myCtx = createContext();

export const Context = ({ children }) => {
  const [isActive, setActive] = useState(1);
  const options = [
    //? last number indicate the quotes list  from 1 to the given number
    { opt: "Lucifer", url: "https://lucifer-quotes.vercel.app/api/quotes/9" },

    //?get advice from specific id
    // { opt: "Advices", url: "https://api.adviceslip.com/advice/1" },
    {
      opt: "Advices",
      //?get advice from id
      url: `https://api.adviceslip.com/advice/${Math.floor(
        Math.random() * 15
      )}`,
    },

    {
      opt: "Pokemon",
      url: `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${Math.floor(
        Math.random() * 15
      )}`,
    },
  ];

  const value = { isActive, setActive, options };
  return <myCtx.Provider value={value}>{children}</myCtx.Provider>;
};
