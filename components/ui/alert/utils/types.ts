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
  /**
   * Optionally add a close button to alert and allow it to self dismiss.
   */
  dismissible?: boolean;
  /**
   * Method called before the dissmiss animation has started.
   */
  onDismiss?: () => void;
  /**
   * Method called after the dissmiss animation has completed and the component is removed from the dom.
   */
  onDismissed?: () => void;
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
