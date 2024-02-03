import { useState } from "react";
import ModalSubmit from "./ModalSubmit";
import { Dot } from "@/svg/view";

const Vacancy = ({ vacancy }: { vacancy: any }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col gap-[32px]">
      <h3 className="h-237575 text-text232">{vacancy?.vacancyName}</h3>
      <div className="flex flex-col gap-[24px]">
        <div className="max-w-[540px]">
          <h4 className="h-175063 text-orange">Йиллик Тажриба</h4>
          <p className="b-0875 text-[#848383]">{vacancy?.experience}</p>
        </div>
        <div className="max-w-[540px]">
          <h4 className="h-175063 text-orange">Масъулиятлар</h4>
          {vacancy?.responsibility?.map((i: any, idx: number) => (
            <p
              key={idx}
              className="b-0875 flex flex-row  items-center gap-1 text-[#848383]"
            >
              <Dot />
              {i?.value}
            </p>
          ))}
        </div>
        <div className="max-w-[540px]">
          <h4 className="h-175063 text-orange">Мажбуриятлар</h4>
          {vacancy?.requirement?.map((i: any, idx: number) => (
            <p
              key={idx}
              className="b-0875 flex flex-row  items-center gap-1 text-[#848383]"
            >
              <Dot />
              {i?.value}
            </p>
          ))}
        </div>
        <div className="max-w-[540px]">
          <h4 className="h-175063 text-orange">Шартлар</h4>
          {vacancy?.condition?.map((i: any, idx: number) => (
            <p
              key={idx}
              className="b-0875 flex flex-row  items-center gap-1 text-[#848383]"
            >
              <Dot />
              {i?.value}
            </p>
          ))}
        </div>
      </div>

      <button
        type="submit"
        onClick={() => setOpen(true)}
        className="btn button-text btn-contained  text-white w-full"
      >
        Submit
      </button>
      <ModalSubmit setOpen={setOpen} open={open} vacancy={vacancy} />
    </div>
  );
};

export default Vacancy;
