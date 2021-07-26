import * as React from "react";

export function DonationIcon({
  width,
  height,
  fill = "currentColor",
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      fill="none"
      height={24}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.58.315L9.433 5.36h7.146l1.386-1.849c.029-.038.06-.073.091-.109a.953.953 0 00-.232-1.439L14.78.136a.953.953 0 00-1.198.18z"
        fill={fill}
      />
      <path
        d="M10.535 10.646c0-.469.38-.85.85-.85h.858c.47 0 .85.381.85.85v1.859a1.28 1.28 0 11-2.558 0v-1.859z"
        fill={fill}
        stroke={fill}
        strokeWidth={0.3}
      />
      <path
        clipRule="evenodd"
        d="M20.627 6.502H3a1 1 0 100 2.001h17.627a1 1 0 100-2z"
        fill={fill}
        fillRule="evenodd"
      />
      <path
        d="M8.24 9.504H3.382a1 1 0 00-1 1v7.065C2.381 20.121 4.705 22 7.322 22h8.984c2.617 0 4.94-1.879 4.94-4.43v-7.066a1 1 0 00-1-1h-4.859a.858.858 0 000 1.715h3.145a1 1 0 011 1v5.35c0 1.397-1.335 2.716-3.226 2.716H7.322c-1.891 0-3.226-1.319-3.226-2.716v-5.35a1 1 0 011-1h3.145a.858.858 0 100-1.715z"
        fill={fill}
      />
    </svg>
  );
}
