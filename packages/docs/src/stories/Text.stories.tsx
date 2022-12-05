import type { StoryObj, Meta } from "@storybook/react";
import { Text, TextProps } from "@casca-ui/react";

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    children:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt impedit laborum voluptatum officia placeat reprehenderit nisi possimus doloribus ullam voluptates, inventore sit optio, facere vitae quis sed, nemo expedita doloremque.",
  },
  argTypes: {
    size: {
      options: [
        "xxs",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
        "8xl",
        "9xl",
      ],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong text",
    as: "strong",
  },
};
