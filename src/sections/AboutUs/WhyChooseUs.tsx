import { SmallUnderline } from "@/svg/view";
import Image from "next/image";
import BestValue from "@/assets/about-us/best-value.png";
import FoodSafety from "@/assets/about-us/food-safety-stamp.png";
import Halal from "@/assets/about-us/Halal-logo.png";

const WhyChooseUs = () => {
  return (
    <div>
      <div className="cont-y">
        <h2 className="h-237575 text-text232 text-center mb-10 md:text-center">
          Нега Бизни{" "}
          <span className="h-237575 text-orange relative md:text-center whitespace-nowrap">
            Танлайсиз
            <SmallUnderline className="absolute -bottom-2 left-0 w-full" />
          </span>
        </h2>
      </div>
      <div className="flex flex-row justify-center items-start gap-4 xl:flex-wrap">
        <div className="flex flex-col justify-center items-center gap-6 max-w-[350px]">
          <div className="max-w-[100px] max-h-[100px]">
            <Image
              src={Halal}
              alt="halal logo"
              width={100}
              height={100}
              className="object-cover w-[100px] h-[100px]"
            />
          </div>
          <h3 className="h-175063 text-[#000] max-w-[400px] text-center">
            Махсулот Кафолати
            <hr className="w-[70%] h-[3px] bg-orange rounded-[30rem] my-1 mx-auto" />
          </h3>
          <p className="b-125  text-[#848383] text-center">
            Бизнинг махсулотимизни динимиз йетакчилари хам истемол қилиши сизга
            махсулотимиз халоллигига далил беради
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-6 max-w-[350px]">
          <div className="max-w-[100px] max-h-[100px]">
            <Image
              src={BestValue}
              alt="halal logo"
              width={100}
              height={100}
              className="object-cover w-[100px] h-[100px]"
            />
          </div>
          <h3 className="h-175063 text-[#000] max-w-[400px] text-center">
            Махсулотимиз Бахоси
            <hr className="w-[70%] h-[3px] bg-orange rounded-[30rem] my-1 mx-auto" />
          </h3>
          <p className="b-125  text-[#848383] text-center">
            Мижозларимизни фикрича бизнинг компаниямиз шахардаги энг арзон лекин
            юқори сифатли махсулотларни ишлаб чиқариш бўйича йетакчи ўринларни
            эганлайди
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-6 max-w-[350px]">
          <div className="max-w-[100px] max-h-[100px]">
            <Image
              src={FoodSafety}
              alt="halal logo"
              width={100}
              height={100}
              className="object-cover w-[100px] h-[100px]"
            />
          </div>
          <h3 className="h-175063 text-[#000] max-w-[400px] text-center">
            Маҳсулот Хавфсизлиги
            <hr className="w-[70%] h-[3px] bg-orange rounded-[30rem] my-1 mx-auto" />
          </h3>
          <p className="b-125 text-[#848383] text-center">
            Биз мижозларимизни соғлигини ўйлаган ҳолда ва маҳсулотимизни
            тозалигига ишонч ҳосил қилган ҳолда маҳсулотларимизни таёрлаймиз
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
