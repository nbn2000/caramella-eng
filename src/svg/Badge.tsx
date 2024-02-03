import React from "react";
import type { SVGProps } from "react";

const Badge = (props?: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={55}
      height={55}
      fill="none"
      viewBox="0 0 55 55"
      {...props}
    >
      <circle cx={27.5} cy={27.5} r={27.5} fill="#E58829" />
    </svg>
  );
};

export default Badge;
