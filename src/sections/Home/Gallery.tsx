import { SmallUnderline } from "@/svg/view";
import Image from "next/image";
import birthdayCake from "@/assets/gallery/birthday-cake.jpg";
import biscuits from "@/assets/gallery/biscuits.jpg";
import cupCake from "@/assets/gallery/cup-cakes.jpg";
import customCake from "@/assets/gallery/custom-cakes.jpg";
import macarons from "@/assets/gallery/macarons.jpg";
import weddingCake from "@/assets/gallery/wedding-cake.jpg";
import Link from "next/link";
import { useState } from "react";

const Gallery = () => {
  const [mainImg, setMainImg] = useState({
    id: 1,
    img: birthdayCake,
    link: "/menu?query=birthdayCake",
  });
  const [transition, setTransition] = useState(false);
  const hovered =
    "rounded-[50%] w-full h-full transition-[opacity] duration-200 ease-in-out";
  const unHovered =
    "rounded-[50%] opacity-[0.6] w-full h-full transition-[opacity] duration-200 ease-in-out";

  const handleHover = (id: number, img: any, link: string) => {
    if (mainImg.id !== id) {
      setTransition(true);
      const timeout = setTimeout(() => {
        setTransition(false);
        setMainImg({ id: id, img: img, link: link });
        clearTimeout(timeout);
      }, 200);
    } else {
      return;
    }
  };
  return (
    <div className="cont-y container-p">
      <h2 className="h-237575 text-text232 text-center mb-10">
        <span className="h-237575 text-orange relative">
          Галерея
          <SmallUnderline className="absolute -bottom-2 left-0 w-full" />
        </span>
      </h2>
      <div className="max-w-full mx-auto flex justify-center items-center relative">
        <Link
          href={mainImg.link}
          className="aspect-square w-[30%] my-[6rem] lg:w-[40%]"
        >
          <Image
            src={mainImg.img}
            alt="hovered image"
            width={300}
            height={300}
            className={`rounded-[50%] w-full h-full transition-[opacity] duration-200 ease-in-out ${
              transition ? "opacity-0" : "opacity-100"
            }`}
          />
        </Link>
        <div
          className="wedding-cake absolute top-[0%] right-[25%] aspect-square w-[9%] lg:w-[13%] lg:right-[15%]"
          onMouseMove={() =>
            handleHover(1, weddingCake, "/menu?query=weddingCake")
          }
        >
          <div className="relative w-full h-full">
            <Image
              src={weddingCake}
              alt="wedding cake"
              width={80}
              height={80}
              className={mainImg.id === 1 ? hovered : unHovered}
            />

            <h6 className="text-text233 b-125 absolute top-[100%]  left-[50%] translate-x-[-50%] md:text-[0.8rem] whitespace-nowrap">
              Wedding Cakes
            </h6>
          </div>
        </div>
        <div
          className="biscuit absolute right-[25%] bottom-[0%] aspect-square w-[9%] lg:w-[13%] lg:right-[15%]"
          onMouseMove={() => handleHover(2, biscuits, "/menu?query=biscuits")}
        >
          <div className="relative w-full h-full">
            <Image
              src={biscuits}
              alt="biscuits"
              width={80}
              height={80}
              className={mainImg.id === 2 ? hovered : unHovered}
            />
            <h6 className="text-text233 b-125 absolute top-[100%]  left-[50%] translate-x-[-50%] md:text-[0.8rem] whitespace-nowrap">
              Biscuits
            </h6>
          </div>
        </div>
        <div
          className="cupcake absolute left-[15%] top-[50%] -translate-y-[50%] aspect-square w-[9%] lg:w-[13%] lg:left-[5%]"
          onMouseMove={() => handleHover(3, cupCake, "/menu?query=cupcake")}
        >
          <div className="relative w-full h-full">
            <Image
              src={cupCake}
              alt="cup cake"
              width={80}
              height={80}
              className={mainImg.id === 3 ? hovered : unHovered}
            />
            <h6 className="text-text233 b-125 absolute top-[100%]  left-[50%] translate-x-[-50%] md:text-[0.8rem] whitespace-nowrap">
              Cupcakes
            </h6>
          </div>
        </div>
        <div
          className="custom-cake absolute left-[25%] bottom-[0%] aspect-square w-[9%] lg:w-[13%] lg:left-[15%]"
          onMouseMove={() =>
            handleHover(4, customCake, "/menu?query=customCake")
          }
        >
          <div className="relative w-full h-full">
            <Image
              src={customCake}
              alt="custom cake"
              width={80}
              height={80}
              className={mainImg.id === 4 ? hovered : unHovered}
            />
            <h6 className="text-text233 b-125 absolute top-[100%]  left-[50%] translate-x-[-50%] md:text-[0.8rem] whitespace-nowrap">
              Custom Cakes
            </h6>
          </div>
        </div>

        <div
          className="macarons absolute right-[15%] top-[50%] -translate-y-[50%] aspect-square w-[9%] lg:w-[13%] lg:right-[5%]"
          onMouseMove={() => handleHover(5, macarons, "/menu?query=macarons")}
        >
          <div className="relative w-full h-full">
            <Image
              src={macarons}
              alt="macarons"
              width={80}
              height={80}
              className={mainImg.id === 5 ? hovered : unHovered}
            />
            <h6 className="text-text233 b-125 absolute top-[100%]  left-[50%] translate-x-[-50%] md:text-[0.8rem] whitespace-nowrap">
              Macarons
            </h6>
          </div>
        </div>
        <div
          className="birthday-cake absolute left-[25%] top-[0%] lg:left-[15%]  aspect-square w-[9%] lg:w-[13%]"
          onMouseMove={() =>
            handleHover(6, birthdayCake, "/menu?query=birthdayCake")
          }
        >
          <div className="relative w-full h-full ">
            <Image
              src={birthdayCake}
              alt="birthday cake"
              width={80}
              height={80}
              className={mainImg.id === 6 ? hovered : unHovered}
            />
            <h6 className="text-text233 b-125 absolute top-[100%] left-[50%] translate-x-[-50%] md:text-[0.8rem] whitespace-nowrap">
              Birthday Cakes
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
