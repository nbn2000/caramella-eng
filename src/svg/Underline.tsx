import React from "react";
import type { SVGProps } from "react";

const Underline = (props?: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={306}
      height={24}
      fill="none"
      viewBox="0 0 306 24"
      {...props}
    >
      <path
        stroke="#F2360A"
        strokeLinecap="round"
        strokeWidth={5.819}
        d="M3.733 20.534C50.308 9.721 175.306-7.043 302.697 12.4"
      />
    </svg>
  );
};

export default Underline;
