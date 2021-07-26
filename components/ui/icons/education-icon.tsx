import * as React from "react";

export function EducationIcon({
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
      <path
        d="M13.752 2.5a1 1 0 011-1h.684c.038 0 .39 0 .764.002.52.002.92.408.92.929v5.494l-1.313-.787a.722.722 0 00-.742 0l-1.313.787V2.5z"
        fill={fill}
      />
      <path
        clipRule="evenodd"
        d="M3.5 5.254v14.455A2.791 2.791 0 006.291 22.5h11.551a2.791 2.791 0 002.792-2.791V5.254a3.75 3.75 0 00-1.564-3.049.866.866 0 00-1.012 1.407c.512.368.843.966.843 1.642v10.699a3.771 3.771 0 00-.578-.044H5.81c-.196 0-.389.015-.577.044V5.254c0-1.116.905-2.021 2.021-2.021h5.053a.866.866 0 000-1.733H7.254A3.754 3.754 0 003.5 5.254zm1.733 13.492v.963c0 .584.474 1.058 1.058 1.058h11.551c.45 0 .833-.279.987-.673H7.254a.866.866 0 010-1.733h11.575a1.06 1.06 0 00-.987-.674H6.292c-.585 0-1.06.474-1.06 1.059z"
        fill={fill}
        fillRule="evenodd"
      />
    </svg>
  );
}
