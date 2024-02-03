import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { StaticImageData } from "next/image";
import TwoLayerCake from "@/assets/about-us/2layer-cake.png";
import ThreeLayerCake from "@/assets/about-us/3llayer-cake.png";
import BlueCake from "@/assets/about-us/blue-cake.png";

const EachSection = ({
  header,
  showedText,
  hiddenText,
  img,
  sectionId,
  reverse,
}: {
  header: string;
  showedText: string;
  hiddenText: string;
  img: StaticImageData;
  sectionId: string;
  reverse: boolean;
}) => {
  const router = useRouter();
  const [showText, setShowText] = useState(false);
  const [transition, setTransition] = useState<boolean>(false);
  const onClick = (event: boolean, section: string) => {
    setTransition(true);
    const setTimout = setTimeout(() => {
      setTransition(false);
      setShowText(event);
      router.push(`#${section}`);
      clearTimeout(setTimout);
    }, 400);
  };
  const sectionClassNotReverse =
    "flex flex-row items-start justify-between gap-2 lg:flex-col lg:justify-center lg:items-center lg:gap-6";
  const sectionClassReverse =
    "flex flex-row-reverse justify-between items-start gap-2 lg:flex-col lg:justify-center lg:items-center lg:gap-6";
  return (
    <div
      id={sectionId}
      className={!reverse ? sectionClassReverse : sectionClassNotReverse}
    >
      <div className="md:max-w-[300px] md:max-h-[300px] relative flex justify-center items-center max-w-[370px] max-h-[370px] p-8 bg-[url('../assets/about-us/background.png')] bg-contain bg-no-repeat">
        <Image
          src={img}
          alt="pastry chef"
          width={300}
          height={300}
          className="max-w-full max-h-full mask mask-pentagon object-contain -rotate-[30deg] hover:rotate-0 hover:transition-all transition-transform"
        />
        <div className="absolute w-[28%] top-[5%] left-[5%]">
          <Image src={TwoLayerCake} alt="2 layer cake" />
        </div>
        <div className="absolute w-[40%] top-[8%] -right-[10%] md:right-0">
          <Image src={ThreeLayerCake} alt="3 layer cake" />
        </div>
        <div className="absolute w-[20%] bottom-0">
          <Image src={BlueCake} alt="blue cake" />
        </div>
      </div>
      <div className="mt-12 flex flex-col gap-[15px] max-w-max md:justify-center md:items-center">
        <h3 className="h-175063 text-[#000] max-w-[400px] md:text-center">
          {header}
          <hr className="w-[70%] h-[3px] bg-orange rounded-[30rem] my-1 md:mx-auto" />
        </h3>
        <p className="b-125 max-w-[500px] text-[#848383] md:text-center">
          {showedText}
          {showText && (
            <p
              className={`b-125 max-w-[500px] text-[#848383] md:text-center transition-[opacity] duration-400 ease-in-out
              ${transition ? "opacity-0" : "opacity-100"}
            `}
            >
              {hiddenText}
            </p>
          )}
        </p>
        <button
          className="btn-contained button-text text-white"
          onClick={() => onClick(!showText, sectionId)}
        >
          {showText && !transition ? "Камроқ Ўқиш" : "Кўпроқ Ўқиш"}
        </button>
      </div>
    </div>
  );
};

export default EachSection;
