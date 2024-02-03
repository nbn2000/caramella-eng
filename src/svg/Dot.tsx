import React from "react";
import type { SVGProps } from "react";

const Dot = (props?: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={7}
      height={7}
      viewBox="0 0 10 10"
      fill="none"
      {...props}
    >
      <circle cx={5} cy={5} r={5} fill="#f2360a" />
    </svg>
  );
};

export default Dot;
