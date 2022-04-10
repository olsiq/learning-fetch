import React, { useContext, useEffect, useState } from "react";
import { myCtx } from "../Context";

export const List = () => {
  const [list, setList] = useState([]);
  const context = useContext(myCtx);
  //select the proper url from myctx
  const url = context.options[context.isActive - 1].url;

  const letsFetch = async (url, opt) => {
    try {
      const res = await fetch(url);
      const response = await res.json();
      switch (opt) {
        case 1:
          setList(await response.map((el) => el.quote));
          break;

        case 2:
          setList([response.slip.advice]);
          break;
        case 3:
          setList(await response.results.map((el) => el.name));
          break;

        default:
          throw Error("Unknow Option");
      }
    } catch (error) {
      console.log("error somewhere at fetch");
    }
  };

  useEffect(() => {
    letsFetch(url, context.isActive);
  }, [url, context.isActive]);

  return (
    <div className="list-wrapper">
      <ul>
        {list.map((el, index) => {
          return <li key={index}>{el}</li>;
        })}
      </ul>
    </div>
  );
};
