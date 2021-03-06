import { ComponentStory, ComponentMeta } from "@storybook/react";
import Text from "../text/Index";
import List, { ListItem } from "./Index";

export default {
  title: "Componentes/List",
  component: List,
} as ComponentMeta<typeof List>;

const ListChilds = () => {
  const boxItems = Array(9).fill(null);

  return (
    <>
      {boxItems.map(() => {
        return (
          <ListItem>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </Text>
          </ListItem>
        );
      })}
    </>
  );
};
const Template: ComponentStory<typeof List> = (args) => (
  <List>
    <ListChilds />
  </List>
);

export const Default = Template.bind({});

Default.args = {};
