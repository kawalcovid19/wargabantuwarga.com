import * as React from "react";

export function OxygenIcon({
  width,
  height,
  fill = "currentColor",
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 24 24"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <ellipse
        cx={8.98281}
        cy={17.0626}
        fill={fill}
        rx={1.38076}
        ry={1.38076}
      />
      <ellipse
        cx={10.3642}
        cy={13.3346}
        fill={fill}
        rx={1.38076}
        ry={1.38076}
      />
      <circle cx={7.14219} cy={13.795} fill={fill} r={0.920506} />
      <path
        clipRule="evenodd"
        d="M17.268 7.535a1.565 1.565 0 100-3.13 1.565 1.565 0 000 3.13zm0 1.657a3.222 3.222 0 100-6.443 3.222 3.222 0 000 6.443z"
        fill={fill}
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M5.67 2.841v-.552a.828.828 0 10-1.657 0V5.05a.828.828 0 001.656 0v-.552h1.105v2.354A5.985 5.985 0 003 12.414v9.665c0 .509.412.921.92.921h10.126a.92.92 0 00.92-.92v-9.666a5.985 5.985 0 00-3.773-5.562V4.498h.092c1.077 0 2.038.228 2.87.64a3.218 3.218 0 01.827-1.438c-1.073-.551-2.315-.859-3.697-.859h-.123a2.21 2.21 0 00-4.357 0H5.669zM8.43 6.456a6.058 6.058 0 011.105 0V3.209a.552.552 0 00-1.105 0v3.247zm3.879 14.887a1 1 0 001-1v-7.929a4.326 4.326 0 00-8.653 0v7.93a1 1 0 001 1h6.653z"
        fill={fill}
        fillRule="evenodd"
      />
      <path
        d="M18.997 8.69c-.459.292-.997.472-1.576.499a9.43 9.43 0 01.4 2.765v10.218a.829.829 0 001.656 0V11.954c0-1.15-.165-2.251-.48-3.265z"
        fill={fill}
      />
    </svg>
  );
}
