import React from "react";
import type { SVGProps } from "react";

const CarretUp = (props?: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="#f2360a" d="m12 7 8 8-2.1 2.2-5.9-5.9-5.9 5.9L4 15l8-8Z" />
    </svg>
  );
};

export default CarretUp;
