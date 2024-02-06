import React from "react";
import styles from "@/styles/cards.module.css";

function CardsSkeleton({ length = 3 }) {
  return (
    <div className={`${styles.body}`}>
      {[...Array(length)].map((i, idx) => (
        <div
          role="status"
          className="flex flex-col gap-4 w-[22rem] h-[22rem] space-y-2.5 animate-pulse max-w-lg"
          key={idx}
        >
          <div className="skeleton bg-slate-200 w-[384px] h-[254px]"></div>
          <div className="skeleton bg-slate-200 h-4 w-28"></div>
          <div className="skeleton bg-slate-200 h-4 w-full"></div>
          <div className="skeleton bg-slate-200 h-4 w-full"></div>
        </div>
      ))}
    </div>
  );
}

export default CardsSkeleton;
