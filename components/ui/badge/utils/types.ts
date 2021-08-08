import { BaseColors } from "../../types";

export type BadgeSizes = "basic" | "large";

interface BadgeBaseProps {
  /** A string of all className you want applied to the component */
  className?: string;
  /** Is the badge rounded? */
  rounded?: boolean;
  /** The size of the badge. Available sizes: `"basic" | "large"` */
  size?: BadgeSizes;
  /** The color of the badge.
   * * @type {"blue" | "gray" | "green" | "indigo" | "pink" | "purple" | "red" | "yellow" | "light blue" }
   * @default 'gray'
   */
  color?: BaseColors;
  /**
   * Component used for the root node. Either a string to use a HTML element or a component
   *
   * @default 'span'
   */
  component?: React.ElementType | string;
}

export type BadgeProps = BadgeBaseProps &
  React.HTMLAttributes<HTMLDivElement | HTMLSpanElement>;
