import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Header from "./Index";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Componentes/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => (
  <BrowserRouter>
    <Header />
  </BrowserRouter>
);

export const Default = Template.bind({});
