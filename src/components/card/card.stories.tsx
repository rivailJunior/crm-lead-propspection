import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Text } from "../Index";
import Card from "./Index";

export default {
  title: "Componentes/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const ScoreDefault = Template.bind({});

const Component = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100px",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        fontSize: 60,
        letterSpacing: 0.5,
      }}
    >
      70
    </div>
  );
};

ScoreDefault.args = {
  title: <Text styles={{ color: "black" }}>Lead Score</Text>,
  body: (
    <div>
      <Component />
    </div>
  ),
};

export const ScoreSuccess = Template.bind({});

ScoreSuccess.args = {
  title: <Text styles={{ color: "black" }}>Lead Score</Text>,
  body: (
    <div style={{ color: "black" }}>
      <Component />
    </div>
  ),
  className: "success",
};

export const CardText = Template.bind({});

CardText.args = {
  body: (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Text>Fernando Silva. Fernandinho</Text>
      <Text>fernando@gmail.com</Text>
      <Text>Fê Silva & CO</Text>
      <Text>999 123 1111</Text>
      <Text>San Francisco St, Manaus, 190222-111</Text>
    </div>
  ),
};

export const CardTextSuccess = Template.bind({});

CardTextSuccess.args = {
  body: (
    <div style={{ display: "flex", flexDirection: "column", color: "black" }}>
      <Text>Fernando Silva. Fernandinho</Text>
      <Text>fernando@gmail.com</Text>
      <Text>Fê Silva & CO</Text>
      <Text>999 123 1111</Text>
      <Text>San Francisco St, Manaus, 190222-111</Text>
    </div>
  ),
  className: "success",
};
