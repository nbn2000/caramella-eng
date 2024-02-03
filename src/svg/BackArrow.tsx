import React from "react";

const BackArrow = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={20}
      height={20}
      viewBox="0 0 512 512"
      fill="#fff"
      style={{
        enableBackground: "new 0 0 512 512",
      }}
      {...props}
    >
      <path d="M352 128.4 319.7 96 160 256l159.7 160 32.3-32.4L224.7 256z" />
    </svg>
  );
};

export default BackArrow;
