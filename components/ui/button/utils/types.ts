export type ButtonSizes = "lg" | "md" | "sm" | "xl" | "xs";
export type ButtonColors =
  | "blue"
  | "brand"
  | "gray"
  | "green"
  | "indigo"
  | "light-blue"
  | "pink"
  | "purple"
  | "red"
  | "yellow";

interface ButtonBaseProps {
  /** Make the button expand the width of the container. */
  block?: boolean;
  /** The base colour of the button. */
  color?: ButtonColors;
  /** Is the button rounded? */
  rounded?: boolean;
  /** Renders the loading state of button. */
  isLoading?: boolean;
  /** Changes the text that renders when the button is loading. Defaults to `"Memuat..."` */
  loadingText?: string;
  /** The size of the button. Available sizes: `"xs" | "sm" | "md" | "lg" | "xl"` */
  size?: ButtonSizes;
  /** The icon component (from Heroicons) to use in the button. `icon={PlusIcon}` */
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export type ButtonProps = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export type AnchorButtonProps = Omit<
  ButtonBaseProps,
  "isLoading" | "loadingText"
> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;
