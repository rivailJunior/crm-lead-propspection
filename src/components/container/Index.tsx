import React from "react";
import "./container.css";

type Icontainer = {
  children?: Array<JSX.Element> | JSX.Element;
  className?: string;
};
export default function ContainerRow({ children, className }: Icontainer) {
  return (
    // eslint-disable-next-line jsx-a11y/aria-role
    <section className={`container-row ${className}`} role="container-row">
      {React.Children.map(children, (item) => {
        return item;
      })}
    </section>
  );
}

export function Container({ children }: Icontainer) {
  return (
    // eslint-disable-next-line jsx-a11y/aria-role
    <section className="container" role="container">
      {React.Children.map(children, (item) => {
        return item;
      })}
    </section>
  );
}
