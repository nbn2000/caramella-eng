import React from "react";
import type { SVGProps } from "react";

const SmallUnderline = (props?: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={142}
      height={12}
      fill="none"
      viewBox="0 0 142 12"
      {...props}
    >
      <path
        stroke="#F2360A"
        strokeLinecap="round"
        strokeWidth={2.688}
        d="M2 9.797c21.515-4.995 79.256-12.74 138.102-3.758"
      />
    </svg>
  );
};

export default SmallUnderline;
