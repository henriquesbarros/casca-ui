import type { StoryObj, Meta } from "@storybook/react";
import { Avatar, AvatarProps } from "@casca-ui/react";

export default {
  title: "Data display/Avatar",
  component: Avatar,
  args: {
    src: "http://github.com/henriquesbarros.png",
    alt: "Henrique Barros",
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
