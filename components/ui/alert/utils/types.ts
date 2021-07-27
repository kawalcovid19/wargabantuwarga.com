import { Colors } from "../../types";

interface AlertBaseProps {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string;
  /**
   * Sets the color context of the component to one of Tailwindcss’s themed colors.
   *
   * @type {"blue" | "gray" | "green" | "indigo" | "pink" | "purple" | "red" | "yellow" }
   * @default 'primary'
   */
  color: Colors;
  /**
   * Toggle the visibility of component.
   *
   * @default true
   */
  visible?: boolean;
  accentBorder?: boolean;
}

export type AlertProps = AlertBaseProps & React.HTMLAttributes<HTMLDivElement>;
