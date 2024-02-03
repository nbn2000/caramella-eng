import React from "react";
import type { SVGProps } from "react";

const InfoIcon = (props?: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={15}
      height={15}
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        fill="red"
        strokeMiterlimit={10}
        d="M25 2C12.31 2 2 12.31 2 25s10.31 23 23 23 23-10.31 23-23S37.69 2 25 2zm0 2c11.61 0 21 9.39 21 21s-9.39 21-21 21S4 36.61 4 25 13.39 4 25 4zm0 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-4 10v2h2v13h-2v2h8v-2h-2V21h-5z"
        fontFamily="none"
        fontSize="none"
        fontWeight="none"
        style={{
          mixBlendMode: "normal",
        }}
        textAnchor="none"
        transform="scale(5.12)"
      />
    </svg>
  );
};

export default InfoIcon;
