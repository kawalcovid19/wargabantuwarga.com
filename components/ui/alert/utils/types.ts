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
  color?: Colors;
  /**
   * Toggle the visibility of component.
   *
   * @default true
   */
  visible?: boolean;
  /**
   * Set broder style in the left of component.`
   * @default false
   */
  accentBorder?: boolean;
  /**
   * The icon component (from Heroicons) to use in the button. `icon={PlusIcon}`
   */
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export type AlertProps = AlertBaseProps & React.HTMLAttributes<HTMLDivElement>;
