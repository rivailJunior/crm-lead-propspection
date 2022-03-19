import React from "react";
import "./list.css";

type IList = {
  children: JSX.Element | Array<JSX.Element>;
};

export default function List({ children }: IList) {
  return (
    <ul role="list" className="list">
      {React.Children.map(children, (item) => {
        return item;
      })}
    </ul>
  );
}

type IItem = {
  children: string | JSX.Element;
  onClick?: void;
};

export const ListItem = ({ children, onClick }: IItem) => {
  const handleOnClick = onClick || function () {};
  return (
    <li role="listItem" className="listItem" onClick={handleOnClick}>
      {children}
    </li>
  );
};
