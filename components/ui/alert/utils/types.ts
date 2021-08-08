import { BaseColors } from "../../types";

interface AlertBaseProps {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string;
  /**
   * Sets the color context of the component to one of Tailwindcss’s themed colors.
   *
   * @type {"blue" | "gray" | "green" | "indigo" | "pink" | "purple" | "red" | "yellow" | "light blue" }
   * @default 'yellow'
   */
  color?: BaseColors;
  /**
   * Toggle the visibility of component.
   *
   * @default true
   */
  /**
   * Optionally add a close button to alert and allow it to self dismiss.
   */
  dismissible?: boolean;
  visible?: boolean;
  /**
   * Set border style in the left of component.`
   * @default false
   */
  accentBorder?: boolean;
  /**
   * The icon component (from Heroicons) to use in the button. `icon={PlusIcon}`
   */
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export type AlertProps = AlertBaseProps & React.HTMLAttributes<HTMLDivElement>;
