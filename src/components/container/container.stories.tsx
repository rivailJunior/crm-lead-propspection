import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Container from "./Index";

export default {
  title: "Componentes/Container",
  component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
);

const Component = ({ styles }: any) => (
  <div
    className="box"
    style={{
      width: "100px",
      height: "100px",
      backgroundColor: "red",
      ...styles,
    }}
  >
    Box
  </div>
);

export const Default = Template.bind({});

const ContainerChilds = () => {
  const boxItems = Array(9).fill(null);

  return (
    <>
      {boxItems.map((_, id) => {
        return <Component />;
      })}
    </>
  );
};

Default.args = {
  children: [<ContainerChilds />],
};
