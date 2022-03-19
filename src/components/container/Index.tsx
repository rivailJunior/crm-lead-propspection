import React from "react";
import "./container.css";

type Icontainer = {
  children?: Array<JSX.Element>;
};
export default function Container({ children }: Icontainer) {
  return (
    <section className="container" role="container">
      {React.Children.map(children, (item) => {
        return item;
      })}
    </section>
  );
}
