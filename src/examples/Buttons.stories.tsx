import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from "@storybook/addon-actions";
import Button from "./Button";

export default {
  button: Button,
  title: "Button",
};

// eslint-disable-next-line react/jsx-props-no-spreading
export const Default = (args) => <Button {...args} />;

Default.args = {
  children: "Click me",
  onClick: action("onClick"),
};
