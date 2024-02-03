import React from "react";
import type { SVGProps } from "react";

const CarretDown = (props?: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path fill="#f2360a" d="m12 17.2-8-8L6.1 7l5.9 5.9L17.9 7 20 9.2l-8 8Z" />
    </svg>
  );
};

export default CarretDown;
