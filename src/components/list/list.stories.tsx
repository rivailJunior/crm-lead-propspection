import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import List, { ListItem } from "./Index";

export default {
  title: "Componentes/List",
  component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const Default = Template.bind({});

const ListChilds = () => {
  const boxItems = Array(9).fill(null);

  return (
    <>
      {boxItems.map((item, id) => {
        return (
          <ListItem>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </ListItem>
        );
      })}
    </>
  );
};

Default.args = {
  children: [<ListChilds />],
};
