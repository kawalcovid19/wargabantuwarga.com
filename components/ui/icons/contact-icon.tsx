export function ContactIcon({
  width,
  height,
  fill = "currentColor",
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      fill="none"
      height="18"
      viewBox="0 0 20 18"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 4H3C1.89543 4 1 4.89543 1 6V15C1 16.1046 1.89543 17 3 17H17C18.1046 17 19 16.1046 19 15V6C19 4.89543 18.1046 4 17 4H12M8 4V3C8 1.89543 8.89543 1 10 1C11.1046 1 12 1.89543 12 3V4M8 4C8 5.10457 8.89543 6 10 6C11.1046 6 12 5.10457 12 4M7 12C8.10457 12 9 11.1046 9 10C9 8.89543 8.10457 8 7 8C5.89543 8 5 8.89543 5 10C5 11.1046 5.89543 12 7 12ZM7 12C8.30622 12 9.41741 12.8348 9.82924 14M7 12C5.69378 12 4.58249 12.8348 4.17065 14M13 9H16M13 13H15"
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
