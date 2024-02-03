import React from "react";
import styles from "@/styles/cards.module.css";

function CardsSkeleton({ length = 3 }) {
  return (
    <div className={styles.body}>
      {[...Array(length)].map((i, idx) => (
        <div className="flex flex-col gap-4 w-[22rem] h-[22rem]" key={idx}>
          <div className="skeleton w-[384px] h-[254px]"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      ))}
    </div>
  );
}

export default CardsSkeleton;
