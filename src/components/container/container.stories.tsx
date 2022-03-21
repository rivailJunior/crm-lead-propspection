import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ContainerRow from "./Index";

export default {
  title: "Componentes/ContainerRow",
  component: ContainerRow,
} as ComponentMeta<typeof ContainerRow>;

const Template: ComponentStory<typeof ContainerRow> = (args) => (
  <ContainerRow {...args} />
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

const ContainerRowChilds = () => {
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
  children: [<ContainerRowChilds />],
};
