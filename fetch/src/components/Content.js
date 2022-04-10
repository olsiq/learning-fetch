import React from "react";
import "../styles/content.css";
import { List } from "./List";

export const Content = () => {
  return (
    <div className="content">
      <p>Below is a list of items that where fetch</p>
      <List />
    </div>
  );
};
