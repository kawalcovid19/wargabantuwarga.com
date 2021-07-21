export type ButtonSizes = "lg" | "md" | "sm" | "xl" | "xs";

interface ButtonBaseProps {
  /** Make the button expand the width of the container. */
  block?: boolean;
  /** The size of the button. Available sizes: `"xs" | "sm" | "md" | "lg" | "xl"` */
  size?: ButtonSizes;
  /** The icon component (from Heroicons) to use in the button. `icon={PlusIcon}` */
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export type ButtonProps = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;
