import Image from "next/image";
import { StaticImageData } from "next/image";

const Cards = ({
  img,
  price,
  name,
}: {
  img: StaticImageData;
  description: string;
  price: number;
  name: string;
}) => {
  return (
    <div className="max-w-full h-[100px] p-4 flex flex-row justify-between items-center gap-[5px] md:flex-col md:h-max md:gap-6 md:w-max   shadow-[0_1px_4px_0_rgba(0,0,0,0.25)] rounded-[15px]">
      <div className="flex flex-row gap-5 items-center md:flex-col">
        <Image
          src={img}
          alt="image alt"
          width={100}
          height={100}
          style={{ width: "auto", height: "auto" }}
          className="rounded-[5px] md:w-[400px] md:max-h-[200px]"
        />
        <div>
          <h5 className="b-125 text-text233">{name}</h5>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center gap-3 ">
        <span className="text-text232 b-125 ">1</span>
        <span className="text-text232 b-125 ">x</span>
        <span className="b-125 text-text233">{price}</span>
        <span className="b-125 text-text233">=</span>
        <span className="b-125 text-text233">{price * 1}</span>
      </div>
    </div>
  );
};

export default Cards;
