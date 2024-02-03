import React from "react";

const Menu = (props?: any) => {
  const { color, size } = props;
  return (
    <svg width={size} height={size} viewBox="0 0 100 80" fill={color}>
      <rect width={100} height={20} rx={10} />
      <rect width={100} height={20} y={30} rx={10} />
      <rect width={100} height={20} y={60} rx={10} />
    </svg>
  );
};

export default Menu;
